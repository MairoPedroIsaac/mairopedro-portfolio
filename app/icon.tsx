import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <svg width="64" height="64" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="11" fill="#FFFFFF" />
        <path
          d="M8.25 35V12L15 24.5L21.75 12V35M28.75 35V14.5H33.5A6 6 0 0 1 33.5 26.5H28.75"
          fill="none"
          stroke="#000000"
          strokeWidth="4.2"
        />
      </svg>
    ),
    size
  );
}
