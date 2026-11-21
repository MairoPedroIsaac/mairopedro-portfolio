import { ImageResponse } from "next/og";

export const alt = "Mairo Pedro Isaac, Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(family: string, weight: number) {
  try {
    const css = await (await fetch(`https://fonts.googleapis.com/css2?family=${family}:wght@${weight}`)).text();
    const url = css.match(/src: url\((.+?)\)/)?.[1];
    return url ? await (await fetch(url)).arrayBuffer() : null;
  } catch {
    return null;
  }
}

export default async function OgImage() {
  const [bold, regular] = await Promise.all([loadFont("Plus+Jakarta+Sans", 800), loadFont("DM+Sans", 500)]);
  const fonts = [
    ...(bold ? [{ name: "Jakarta", data: bold, weight: 800 as const, style: "normal" as const }] : []),
    ...(regular ? [{ name: "DM Sans", data: regular, weight: 500 as const, style: "normal" as const }] : []),
  ];

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
          padding: "64px 80px",
          color: "#FFFFFF",
          fontFamily: "DM Sans",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <svg width="72" height="72" viewBox="0 0 48 48">
              <rect width="48" height="48" rx="11" fill="#FFFFFF" />
              <path
                d="M8 35V13.5L14.25 25L20.5 13.5V35M28 35V13.5H33A6.5 6.5 0 0 1 33 26.5H28"
                fill="none"
                stroke="#000000"
                strokeWidth="4.2"
              />
            </svg>
            <div style={{ display: "flex", fontFamily: "Jakarta", fontSize: 26, letterSpacing: 5, textTransform: "uppercase" }}>
              Mairo Pedro Isaac
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, color: "#9A9A9A", textTransform: "uppercase" }}>
            Full-Stack Developer
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontFamily: "Jakarta", fontSize: 57, lineHeight: 1.1, letterSpacing: -1.5 }}>
          <span>Websites, web apps &amp; mobile apps</span>
          <span>that bring your business</span>
          <span style={{ color: "#9A9A9A" }}>more customers.</span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #5E5E5E", paddingTop: 24, fontSize: 24, color: "#CFCFCF" }}>
          <span>Next.js · Django · Node.js</span>
          <span>mairopedro.com</span>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
