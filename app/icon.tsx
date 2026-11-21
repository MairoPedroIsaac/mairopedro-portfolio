import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <svg width="64" height="64" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="11" fill="#FFFFFF" />
        <path
          d="M7 36.5V11.5L15.25 24.5L23.5 11.5V36.5M30.5 36.5V18H34.5A5 5 0 0 1 34.5 28H30.5"
          fill="none"
          stroke="#000000"
          strokeWidth="4.2"
        />
      </svg>
    ),
    size
  );
}
