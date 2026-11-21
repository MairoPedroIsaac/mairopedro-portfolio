import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#000000" }}>
        <svg width="120" height="120" viewBox="0 0 48 48">
          <path
            d="M8 35V13.5L14.25 25L20.5 13.5V35M28 35V13.5H33A6.5 6.5 0 0 1 33 26.5H28"
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
