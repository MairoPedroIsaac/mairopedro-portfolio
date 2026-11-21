import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#000000" }}>
        <svg width="120" height="120" viewBox="0 0 48 48">
          <path
            d="M7 36.5V11.5L15.25 24.5L23.5 11.5V36.5M30.5 36.5V18H34.5A5 5 0 0 1 34.5 28H30.5"
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
