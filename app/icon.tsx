import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <svg width="64" height="64" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="11" fill="#FFFFFF" />
        <path
          d="M8 35V13.5L14.25 25L20.5 13.5V35M28 35V13.5H33A6.5 6.5 0 0 1 33 26.5H28"
          fill="none"
          stroke="#000000"
          strokeWidth="4.2"
        />
      </svg>
    ),
    size
  );
}
