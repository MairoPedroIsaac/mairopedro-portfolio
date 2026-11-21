import { ImageResponse } from "next/og";

export const alt = "Mairo Pedro Isaac, Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadAnton() {
  try {
    const css = await (await fetch("https://fonts.googleapis.com/css2?family=Anton")).text();
    const url = css.match(/src: url\((.+?)\)/)?.[1];
    return url ? await (await fetch(url)).arrayBuffer() : null;
  } catch {
    return null;
  }
}

export default async function OgImage() {
  const anton = await loadAnton();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050505",
          padding: "72px 80px",
          color: "#fff",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 6, color: "#9A9A9A" }}>FULL-STACK DEVELOPER</div>
        <div style={{ display: "flex", flexDirection: "column", fontFamily: anton ? "Anton" : "sans-serif", fontSize: 168, lineHeight: 0.9, fontWeight: 700 }}>
          <span>MAIRO</span>
          <span>PEDRO ISAAC</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #5E5E5E", paddingTop: 24, fontSize: 24, color: "#CFCFCF" }}>
          <span>Websites · Web apps · Mobile apps</span>
          <span>mairopedro.com</span>
        </div>
      </div>
    ),
    { ...size, fonts: anton ? [{ name: "Anton", data: anton, weight: 400, style: "normal" }] : [] }
  );
}
