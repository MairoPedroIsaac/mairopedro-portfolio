"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * Hero portrait: Mairo's real photo cut out from its background, with a live
 * network drawn in code around it. Lines flow out from the head, the shoulders
 * dissolve into a geometric mesh, small pulses travel along the lines, and the
 * nodes move away gently from the mouse.
 *
 * Colours come from CSS variables (--hero-line, --hero-node, --hero-accent),
 * so light and dark mode work, and the accent can be changed in one place.
 */

// Outline of the head and shoulders, as fractions of the photo (x, y).
const OUTLINE: [number, number][] = [
  [0.03, 0.574], [0.174, 0.545], [0.3, 0.505], [0.307, 0.44], [0.205, 0.372],
  [0.214, 0.314], [0.194, 0.285], [0.24, 0.24], [0.27, 0.198], [0.307, 0.165],
  [0.366, 0.138], [0.434, 0.122], [0.505, 0.11], [0.584, 0.107], [0.653, 0.14],
  [0.72, 0.169], [0.755, 0.227], [0.77, 0.285], [0.786, 0.343], [0.773, 0.4],
  [0.748, 0.445], [0.725, 0.51], [0.746, 0.545], [0.821, 0.574], [0.92, 0.61],
];
const HEAD = { x: 0.49, y: 0.33 };
const FACE = { x: 0.49, y: 0.36, rx: 0.22, ry: 0.2 };

type Node = { bx: number; by: number; x: number; y: number; ox: number; oy: number; phase: number; amp: number; hot: boolean; mesh: boolean };

function rand(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function buildNodes(): Node[] {
  const r = rand(42);
  const nodes: Node[] = [];
  const add = (u: number, v: number, mesh = false) =>
    nodes.push({ bx: u, by: v, x: 0, y: 0, ox: 0, oy: 0, phase: r() * Math.PI * 2, amp: 0.004 + r() * 0.006, hot: r() < 0.12, mesh });

  // 1. Just outside the outline of the head and shoulders
  OUTLINE.forEach(([u, v]) => add(HEAD.x + (u - HEAD.x) * 1.07, HEAD.y + (v - HEAD.y) * 1.05));
  // 2. A halo of nodes around the head, mostly above and to the sides
  for (let i = 0; i < 30; i++) {
    const a = Math.PI * (0.95 + r() * 1.15); // upper arc
    const k = 1 + r() * 0.55;
    add(HEAD.x + Math.cos(a) * 0.36 * k, HEAD.y + Math.sin(a) * 0.27 * k);
  }
  // 3. A mesh where the shoulders dissolve
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 8; col++) {
      const u = -0.06 + col * 0.16 + (r() - 0.5) * 0.08 + (row % 2) * 0.08;
      const v = 0.6 + row * 0.095 + (r() - 0.5) * 0.04;
      add(u, v, true);
    }
  }
  // Keep the face clear
  return nodes.filter((n) => ((n.bx - FACE.x) / FACE.rx) ** 2 + ((n.by - FACE.y) / FACE.ry) ** 2 > 1);
}

function buildEdges(nodes: Node[]) {
  const edges: [number, number][] = [];
  const seen = new Set<string>();
  nodes.forEach((a, i) => {
    const near = nodes
      .map((b, j) => ({ j, d: Math.hypot(a.bx - b.bx, (a.by - b.by) * 1.4) }))
      .filter((o) => o.j !== i)
      .sort((p, q) => p.d - q.d)
      .slice(0, a.mesh ? 3 : 2);
    near.forEach(({ j, d }) => {
      if (d > (a.mesh ? 0.26 : 0.2)) return;
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (seen.has(key)) return;
      const mx = (a.bx + nodes[j].bx) / 2;
      const my = (a.by + nodes[j].by) / 2;
      if (((mx - FACE.x) / FACE.rx) ** 2 + ((my - FACE.y) / FACE.ry) ** 2 < 1) return;
      seen.add(key);
      edges.push([i, j]);
    });
  });
  return edges;
}

// Triangles in the mesh, filled very faintly for the low-poly look
function buildTriangles(nodes: Node[], edges: [number, number][]) {
  const adj = new Map<number, Set<number>>();
  edges.forEach(([a, b]) => {
    if (!adj.has(a)) adj.set(a, new Set());
    if (!adj.has(b)) adj.set(b, new Set());
    adj.get(a)!.add(b);
    adj.get(b)!.add(a);
  });
  const tris: [number, number, number][] = [];
  edges.forEach(([a, b]) => {
    if (!nodes[a].mesh || !nodes[b].mesh) return;
    adj.get(a)!.forEach((c) => {
      if (c > b && adj.get(b)!.has(c) && nodes[c].mesh) tris.push([a, b, c]);
    });
  });
  return tris;
}

export default function HeroPortrait() {
  const wrap = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const el = wrap.current;
    const cv = canvas.current;
    if (!el || !cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = buildNodes();
    const edges = buildEdges(nodes);
    const tris = buildTriangles(nodes, edges);
    const pulses = Array.from({ length: 9 }, (_, i) => ({ e: (i * 7) % edges.length, t: i / 9, speed: 0.004 + (i % 3) * 0.002 }));

    let colours = { line: "rgba(255,255,255,0.3)", node: "#fff", accent: "#CFCFCF", fill: "rgba(255,255,255,0.03)" };
    const readColours = () => {
      const s = getComputedStyle(el);
      colours = {
        line: s.getPropertyValue("--hero-line").trim() || colours.line,
        node: s.getPropertyValue("--hero-node").trim() || colours.node,
        accent: s.getPropertyValue("--hero-accent").trim() || colours.accent,
        fill: s.getPropertyValue("--hero-fill").trim() || colours.fill,
      };
    };
    readColours();
    const themeWatch = new MutationObserver(readColours);
    themeWatch.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    let w = 0, h = 0, dpr = 1;
    // The photo sits centred, in the bottom 90% of the box
    const img = { x: 0, y: 0, w: 0, h: 0 };
    const resize = () => {
      const r = el.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      cv.width = w * dpr;
      cv.height = h * dpr;
      cv.style.width = `${w}px`;
      cv.style.height = `${h}px`;
      img.h = h * 0.9;
      img.w = img.h * (2 / 3);
      img.x = (w - img.w) / 2;
      img.y = h * 0.1;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);

    const mouse = { x: -9999, y: -9999, active: false };
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.active = true;
    };
    const onLeave = () => (mouse.active = false);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);

    let visible = true;
    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
    io.observe(el);

    const start = performance.now();
    let frame = 0;

    const draw = (now: number) => {
      frame = requestAnimationFrame(draw);
      if (!visible && !reduce) return;
      const t = (now - start) / 1000;
      const intro = reduce ? 1 : Math.min(1, t / 1.8);

      // Positions: gentle drift, plus a soft push away from the mouse
      nodes.forEach((n) => {
        const bx = img.x + n.bx * img.w;
        const by = img.y + n.by * img.h;
        const dx = reduce ? 0 : Math.sin(t * 0.6 + n.phase) * n.amp * img.w;
        const dy = reduce ? 0 : Math.cos(t * 0.5 + n.phase) * n.amp * img.w;
        let tx = 0, ty = 0;
        if (mouse.active) {
          const mx = bx - mouse.x, my = by - mouse.y;
          const d = Math.hypot(mx, my);
          const R = 110;
          if (d < R && d > 0.1) {
            const f = (1 - d / R) ** 2 * 26;
            tx = (mx / d) * f;
            ty = (my / d) * f;
          }
        }
        n.ox += (tx - n.ox) * 0.08;
        n.oy += (ty - n.oy) * 0.08;
        n.x = bx + dx + n.ox;
        n.y = by + dy + n.oy;
      });

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      // Faint low-poly fill
      ctx.fillStyle = colours.fill;
      tris.forEach(([a, b, c], i) => {
        if (i % 2) return;
        ctx.globalAlpha = intro;
        ctx.beginPath();
        ctx.moveTo(nodes[a].x, nodes[a].y);
        ctx.lineTo(nodes[b].x, nodes[b].y);
        ctx.lineTo(nodes[c].x, nodes[c].y);
        ctx.closePath();
        ctx.fill();
      });

      // Lines, drawn in one by one at the start
      ctx.strokeStyle = colours.line;
      ctx.lineWidth = 1;
      edges.forEach(([a, b], i) => {
        const p = Math.min(1, Math.max(0, intro * 1.6 - (i / edges.length) * 0.6));
        if (p <= 0) return;
        ctx.globalAlpha = p;
        ctx.beginPath();
        ctx.moveTo(nodes[a].x, nodes[a].y);
        ctx.lineTo(nodes[a].x + (nodes[b].x - nodes[a].x) * p, nodes[a].y + (nodes[b].y - nodes[a].y) * p);
        ctx.stroke();
      });

      // Nodes
      nodes.forEach((n, i) => {
        ctx.globalAlpha = Math.min(1, intro * 1.5 - (i / nodes.length) * 0.4);
        ctx.fillStyle = n.hot ? colours.accent : colours.node;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.hot ? 3.2 : n.mesh ? 1.6 : 2.1, 0, Math.PI * 2);
        ctx.fill();
      });

      // Pulses travelling along the lines, like data moving
      if (!reduce && intro >= 1) {
        ctx.fillStyle = colours.accent;
        pulses.forEach((p) => {
          p.t += p.speed;
          if (p.t >= 1) {
            const [, end] = edges[p.e];
            const next = edges.findIndex(([a], k) => a === end && k !== p.e);
            p.e = next >= 0 ? next : Math.floor(Math.random() * edges.length);
            p.t = 0;
          }
          const [a, b] = edges[p.e];
          const x = nodes[a].x + (nodes[b].x - nodes[a].x) * p.t;
          const y = nodes[a].y + (nodes[b].y - nodes[a].y) * p.t;
          ctx.globalAlpha = Math.sin(p.t * Math.PI);
          ctx.beginPath();
          ctx.arc(x, y, 2.4, 0, Math.PI * 2);
          ctx.fill();
        });
      }
      ctx.globalAlpha = 1;
      if (reduce) cancelAnimationFrame(frame);
    };
    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      io.disconnect();
      themeWatch.disconnect();
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={wrap} className="hero-portrait relative aspect-[5/6] w-full max-w-[520px] md:ml-auto select-none">
      {/* Soft light behind the head */}
      <div
        aria-hidden
        className="absolute left-1/2 top-[30%] h-[62%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--hero-glow), transparent)" }}
      />
      <div className="absolute bottom-0 top-[10%] left-[14%] w-[72%] portrait-in">
        <Image
          src="/images/profile-cutout.webp"
          alt="Mairo Pedro Isaac"
          fill
          priority
          sizes="(max-width: 768px) 90vw, 420px"
          className="object-contain object-bottom"
          style={{
            WebkitMaskImage: "radial-gradient(ellipse 62% 72% at 50% 36%, #000 66%, transparent 100%)",
            maskImage: "radial-gradient(ellipse 62% 72% at 50% 36%, #000 66%, transparent 100%)",
          }}
        />
      </div>
      <canvas ref={canvas} aria-hidden className="absolute inset-0 pointer-events-none" />
    </div>
  );
}
