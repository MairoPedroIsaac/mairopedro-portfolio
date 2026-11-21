import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#000000" }}>
        <svg width="120" height="120" viewBox="0 0 48 48">
          <path
            d="M10.5 35V13.5L19.25 26L28 13.5V35M28 13.5H32.5C36.09 13.5 39 16.41 39 20C39 23.59 36.09 26.5 32.5 26.5H28"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="4.6"
          />
        </svg>
      </div>
    ),
    size
  );
}
