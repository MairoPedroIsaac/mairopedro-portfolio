"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * Hero portrait: Mairo's real photo cut out from its background, with a live
 * network drawn in code around it.
 *  - Orbit lines circle the head, with small dots travelling along them.
 *  - Connected nodes spread out to both sides of the head.
 *  - The shoulders break up into low-poly shards at the bottom.
 * Everything drifts slowly and moves away from the mouse.
 *
 * Colours come from CSS variables in globals.css (--hero-line, --hero-node,
 * --hero-accent, --hero-shard, --hero-glow), so light and dark mode both work
 * and the accent colour can be changed in one place.
 */

// All positions are fractions of the photo box (u across, v down).
const HEAD = { u: 0.5, v: 0.3 };
const FACE = { u: 0.5, v: 0.3, ru: 0.36, rv: 0.33 }; // kept clear of nodes and lines

type P = { bu: number; bv: number; x: number; y: number; ox: number; oy: number; phase: number; amp: number; hot: boolean; size: number };

function rand(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const inFace = (u: number, v: number) => ((u - FACE.u) / FACE.ru) ** 2 + ((v - FACE.v) / FACE.rv) ** 2 < 1;

function makePoint(r: () => number, u: number, v: number, hotChance: number): P {
  return { bu: u, bv: v, x: 0, y: 0, ox: 0, oy: 0, phase: r() * Math.PI * 2, amp: 0.004 + r() * 0.008, hot: r() < hotChance, size: 1.4 + r() * 2.4 };
}

// Nodes that spread out from the sides of the head
function buildSideNodes(r: () => number) {
  const nodes: P[] = [];
  let tries = 0;
  while (nodes.length < 34 && tries++ < 2000) {
    const left = nodes.length % 2 === 0;
    const u = left ? -0.42 + r() * 0.62 : 0.8 + r() * 0.6;
    const v = 0.02 + r() * 0.62;
    if (inFace(u, v)) continue;
    nodes.push(makePoint(r, u, v, 0.4));
  }
  return nodes;
}

function linkNearest(nodes: P[], k: number, max: number) {
  const edges: [number, number][] = [];
  const seen = new Set<string>();
  nodes.forEach((a, i) => {
    nodes
      .map((b, j) => ({ j, d: Math.hypot(a.bu - b.bu, a.bv - b.bv) }))
      .filter((o) => o.j !== i && o.d < max)
      .sort((p, q) => p.d - q.d)
      .slice(0, k)
      .forEach(({ j }) => {
        const key = i < j ? `${i}-${j}` : `${j}-${i}`;
        if (seen.has(key)) return;
        if (inFace((a.bu + nodes[j].bu) / 2, (a.bv + nodes[j].bv) / 2)) return;
        seen.add(key);
        edges.push([i, j]);
      });
  });
  return edges;
}

// Where the suit ends: a jagged V along the bottom of the photo (fractions of the photo box).
// The photo is clipped to this line, and small triangles break away below it.
const ZIG: [number, number][] = (() => {
  const r = rand(19);
  const pts: [number, number][] = [];
  const n = 17;
  for (let i = 0; i < n; i++) {
    const u = 0.02 + (i / (n - 1)) * 0.96;
    const base = 0.68 + 0.25 * Math.pow(1 - Math.abs(u - 0.5) / 0.48, 1.3);
    const tooth = i % 2 ? 0.018 + r() * 0.02 : -0.01 - r() * 0.01;
    pts.push([u, Math.min(0.985, base + tooth)]);
  }
  return pts;
})();

// CSS clip-path for the photo, so the suit ends on the jagged line
const PHOTO_CLIP = `polygon(0% 0%, 100% 0%, 100% ${(ZIG[ZIG.length - 1][1] * 100).toFixed(1)}%, ${[...ZIG]
  .reverse()
  .map(([u, v]) => `${(u * 100).toFixed(1)}% ${(v * 100).toFixed(1)}%`)
  .join(", ")}, 0% ${(ZIG[0][1] * 100).toFixed(1)}%)`;

type Tone = "suit" | "grey" | "accent";
const tone = (r: () => number): Tone => {
  const x = r();
  return x < 0.55 ? "suit" : x < 0.82 ? "grey" : "accent";
};

function buildBottom(r: () => number) {
  // the jagged line itself, as moving points
  const edge = ZIG.map(([u, v]) => makePoint(r, u, v, 0.35));
  edge.forEach((p) => (p.amp *= 0.4));

  // triangles hanging from the line, like the suit breaking apart
  const hang: { a: P; b: P; apex: P; tone: Tone }[] = [];
  for (let i = 0; i < edge.length - 1; i++) {
    if (r() < 0.3) continue;
    const lo = Math.max(edge[i].bv, edge[i + 1].bv);
    const apex = makePoint(r, (edge[i].bu + edge[i + 1].bu) / 2 + (r() - 0.5) * 0.04, lo + 0.018 + r() * 0.035, 0);
    hang.push({ a: edge[i], b: edge[i + 1], apex, tone: tone(r) });
  }

  // small loose pieces drifting below
  const bits: { c: P; size: number; rot: number; tone: Tone; dist: number }[] = [];
  for (let i = 0; i < 22; i++) {
    const k = r() * (ZIG.length - 1);
    const j = Math.floor(k);
    const u = ZIG[j][0] + (ZIG[j + 1][0] - ZIG[j][0]) * (k - j);
    const vEdge = ZIG[j][1] + (ZIG[j + 1][1] - ZIG[j][1]) * (k - j);
    const dist = 0.03 + r() * 0.13;
    bits.push({ c: makePoint(r, u + (r() - 0.5) * 0.05, vEdge + dist, 0), size: 0.012 + r() * 0.026 * (1 - dist * 3), rot: r() * Math.PI * 2, tone: tone(r), dist });
  }

  // a thin network over the shoulders and chest (never the face)
  const net: P[] = [];
  let tries = 0;
  while (net.length < 22 && tries++ < 3000) {
    const u = 0.05 + r() * 0.9;
    const k = Math.min(ZIG.length - 2, Math.floor((u - 0.02) / (0.96 / (ZIG.length - 1))));
    const bottom = Math.min(ZIG[k][1], ZIG[k + 1][1]) - 0.02;
    const top = Math.abs(u - 0.5) < 0.2 ? 0.66 : 0.62;
    const v = top + r() * (bottom - top);
    if (v >= bottom) continue;
    net.push(makePoint(r, u, v, 0.55));
  }
  const netNodes = [...net, ...edge];
  const netEdges = linkNearest(netNodes, 2, 0.2);
  return { edge, hang, bits, netNodes, netEdges };
}

// Orbit rings around the head
const ORBITS = [
  { ru: 0.6, rv: 0.19, tilt: -0.12, width: 1.6, speed: 0.22, dots: 3 },
  { ru: 0.7, rv: 0.22, tilt: 0.1, width: 1.1, speed: -0.16, dots: 2 },
  { ru: 0.5, rv: 0.17, tilt: -0.04, width: 1.3, speed: 0.3, dots: 2 },
];

export default function HeroPortrait() {
  const wrap = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null); // behind the photo
  const frontCanvas = useRef<HTMLCanvasElement>(null); // in front, only the shoulder shards

  useEffect(() => {
    const el = wrap.current;
    const cv = canvas.current;
    const fcv = frontCanvas.current;
    if (!el || !cv || !fcv) return;
    const ctx = cv.getContext("2d");
    const fctx = fcv.getContext("2d");
    if (!ctx || !fctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const r = rand(7);
    const side = buildSideNodes(r);
    const sideEdges = linkNearest(side, 2, 0.32);
    const { edge, hang, bits, netNodes, netEdges } = buildBottom(r);
    const all: P[] = [...side, ...netNodes, ...hang.map((h) => h.apex), ...bits.map((b) => b.c)];

    let colours = { line: "rgba(255,255,255,0.3)", node: "#fff", accent: "#F5B800", shard: "60,60,60" };
    const readColours = () => {
      const s = getComputedStyle(el);
      colours = {
        line: s.getPropertyValue("--hero-line").trim() || colours.line,
        node: s.getPropertyValue("--hero-node").trim() || colours.node,
        accent: s.getPropertyValue("--hero-accent").trim() || colours.accent,
        shard: s.getPropertyValue("--hero-shard").trim() || colours.shard,
      };
    };
    readColours();
    const themeWatch = new MutationObserver(readColours);
    themeWatch.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    // The canvas is larger than the photo so the network can spread out.
    let w = 0, h = 0, dpr = 1;
    const box = { x: 0, y: 0, w: 0, h: 0 };
    const resize = () => {
      const c = cv.getBoundingClientRect();
      const p = el.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = c.width;
      h = c.height;
      cv.width = fcv.width = w * dpr;
      cv.height = fcv.height = h * dpr;
      // the photo box inside the wrapper (matches the markup below)
      box.w = p.width * 0.9;
      box.h = box.w * 1.5;
      box.x = p.left - c.left + (p.width - box.w) / 2;
      box.y = p.top - c.top + p.height - box.h;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);

    const mouse = { x: -9999, y: -9999 };
    const onMove = (e: PointerEvent) => {
      const c = cv.getBoundingClientRect();
      mouse.x = e.clientX - c.left;
      mouse.y = e.clientY - c.top;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    let visible = true;
    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
    io.observe(cv);

    const start = performance.now();
    let frame = 0;
    const X = (u: number) => box.x + u * box.w;
    const Y = (v: number) => box.y + v * box.h;

    const draw = (now: number) => {
      frame = requestAnimationFrame(draw);
      if (!visible && !reduce) return;
      const t = Math.max(0, (now - start) / 1000);
      const t0 = t;
      const intro = reduce ? 1 : Math.min(1, t / 1.6);
      const ease = Math.max(0, 1 - (1 - intro) ** 3);

      all.forEach((n) => {
        const bx = X(n.bu);
        const by = Y(n.bv);
        const dx = reduce ? 0 : Math.sin(t * 0.6 + n.phase) * n.amp * box.w;
        const dy = reduce ? 0 : Math.cos(t * 0.5 + n.phase) * n.amp * box.w;
        let tx = 0, ty = 0;
        const mx = bx - mouse.x, my = by - mouse.y;
        const d = Math.hypot(mx, my);
        const R = 120;
        if (d < R && d > 0.1) {
          const f = (1 - d / R) ** 2 * 30;
          tx = (mx / d) * f;
          ty = (my / d) * f;
        }
        n.ox += (tx - n.ox) * 0.08;
        n.oy += (ty - n.oy) * 0.08;
        // during the intro, points fly in from the head
        n.x = X(HEAD.u) + (bx + dx + n.ox - X(HEAD.u)) * ease;
        n.y = Y(HEAD.v) + (by + dy + n.oy - Y(HEAD.v)) * ease;
      });

      [ctx, fctx].forEach((c) => {
        c.setTransform(dpr, 0, 0, dpr, 0, 0);
        c.clearRect(0, 0, w, h);
        c.lineCap = "round";
      });

      // FRONT CANVAS: only the shoulders. The suit stays, a thin network runs over it,
      // and the bottom edge breaks into small triangles.
      const fill = (t: Tone, alpha: number) => {
        fctx.globalAlpha = alpha * intro;
        fctx.fillStyle =
          t === "accent" ? colours.accent : t === "suit" ? `rgb(${colours.shard})` : `rgba(${colours.shard},0.45)`;
      };
      hang.forEach(({ a, b, apex, tone: t }) => {
        fill(t, t === "grey" ? 1 : 0.92);
        fctx.beginPath();
        fctx.moveTo(a.x, a.y);
        fctx.lineTo(b.x, b.y);
        fctx.lineTo(apex.x, apex.y);
        fctx.closePath();
        fctx.fill();
      });
      bits.forEach(({ c, size, rot, tone: t, dist }) => {
        const s = size * box.w;
        const spin = rot + (reduce ? 0 : Math.sin(t0 * 0.4 + rot) * 0.25);
        fill(t, Math.max(0, 1 - dist / 0.17) * (t === "grey" ? 1 : 0.9));
        fctx.beginPath();
        for (let k = 0; k < 3; k++) {
          const ang = spin + (k * Math.PI * 2) / 3;
          const px = c.x + Math.cos(ang) * s, py = c.y + Math.sin(ang) * s * 0.8;
          if (k === 0) fctx.moveTo(px, py);
          else fctx.lineTo(px, py);
        }
        fctx.closePath();
        fctx.fill();
      });
      fctx.strokeStyle = colours.accent;
      fctx.lineWidth = 0.9;
      netEdges.forEach(([a, b]) => {
        fctx.globalAlpha = 0.7 * intro;
        fctx.beginPath();
        fctx.moveTo(netNodes[a].x, netNodes[a].y);
        fctx.lineTo(netNodes[b].x, netNodes[b].y);
        fctx.stroke();
      });
      netNodes.forEach((n) => {
        fctx.globalAlpha = intro;
        fctx.fillStyle = n.hot ? colours.accent : colours.node;
        fctx.beginPath();
        fctx.arc(n.x, n.y, n.hot ? n.size * 0.9 + 0.6 : n.size * 0.6, 0, Math.PI * 2);
        fctx.fill();
      });
      void edge;

      // BACK CANVAS (behind the photo): orbits, side network and nodes, so nothing covers the face
      const orbit = (o: (typeof ORBITS)[number], i: number, front: boolean) => {
        const tilt = o.tilt + (reduce ? 0 : Math.sin(t * 0.25 + i) * 0.05);
        const cx = X(HEAD.u), cy = Y(0.35 + 0.015 * i);
        const rx = Math.max(0, o.ru * box.w * ease), ry = Math.max(0, o.rv * box.h * ease);
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(tilt);
        ctx.strokeStyle = colours.accent;
        ctx.lineWidth = o.width;
        ctx.globalAlpha = (front ? 0.9 : 0.45) * intro;
        ctx.beginPath();
        // front = lower half of the ellipse (in front of the face), back = upper half
        if (front) ctx.ellipse(0, 0, rx, ry, 0, 0.08 * Math.PI, 0.92 * Math.PI);
        else ctx.ellipse(0, 0, rx, ry, 0, 1.05 * Math.PI, 1.95 * Math.PI);
        ctx.stroke();
        // dots travelling along the ring
        for (let k = 0; k < o.dots; k++) {
          const a = ((t * o.speed + k / o.dots) % 1) * Math.PI * 2;
          const isFront = Math.sin(a) > 0;
          if (isFront !== front) continue;
          ctx.globalAlpha = (front ? 1 : 0.6) * intro;
          ctx.fillStyle = colours.accent;
          ctx.beginPath();
          ctx.arc(Math.cos(a) * rx, Math.sin(a) * ry, front ? 4 : 2.6, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      };
      ORBITS.forEach((o, i) => orbit(o, i, false));

      ctx.strokeStyle = colours.line;
      ctx.lineWidth = 1;
      sideEdges.forEach(([a, b]) => {
        ctx.globalAlpha = intro;
        ctx.beginPath();
        ctx.moveTo(side[a].x, side[a].y);
        ctx.lineTo(side[b].x, side[b].y);
        ctx.stroke();
      });

      side.forEach((n) => {
        ctx.globalAlpha = intro;
        ctx.fillStyle = n.hot ? colours.accent : colours.node;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.hot ? n.size + 0.8 : n.size * 0.8, 0, Math.PI * 2);
        ctx.fill();
      });

      ORBITS.forEach((o, i) => orbit(o, i, true));

      ctx.globalAlpha = 1;
      fctx.globalAlpha = 1;
      if (reduce) cancelAnimationFrame(frame);
    };
    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      io.disconnect();
      themeWatch.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div ref={wrap} className="hero-portrait relative aspect-[3/4] w-full max-w-[460px] mx-auto md:mr-0 md:-mt-16 select-none">
      {/* Soft light behind the head */}
      <div
        aria-hidden
        className="absolute left-1/2 top-[32%] h-[70%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--hero-glow), transparent)" }}
      />
      {/* The network spreads past the photo on every side. This layer sits behind the photo. */}
      <canvas
        ref={canvas}
        aria-hidden
        className="absolute -left-[45%] -right-[25%] -top-[10%] -bottom-[8%] h-[118%] w-[170%] pointer-events-none"
      />
      {/* Photo box: 90% of the width, 2:3, sitting on the bottom (matches the canvas maths) */}
      <div className="absolute bottom-0 left-[5%] w-[90%] aspect-[2/3] portrait-in" style={{ clipPath: PHOTO_CLIP }}>
        <Image
          src="/images/profile-cutout.webp"
          alt="Mairo Pedro Isaac"
          fill
          priority
          sizes="(max-width: 768px) 90vw, 440px"
          quality={90}
          className="object-contain object-bottom"
        />
      </div>
      {/* Only the shoulder shards are drawn in front of the photo */}
      <canvas
        ref={frontCanvas}
        aria-hidden
        className="absolute -left-[45%] -right-[25%] -top-[10%] -bottom-[8%] h-[118%] w-[170%] pointer-events-none"
      />
    </div>
  );
}
