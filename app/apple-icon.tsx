import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#000000" }}>
        <svg width="120" height="120" viewBox="0 0 48 48">
          <path
            d="M8.25 35V12L15 24.5L21.75 12V35M28.75 35V14.5H33.5A6 6 0 0 1 33.5 26.5H28.75"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="4.2"
          />
        </svg>
      </div>
    ),
    size
  );
}
