import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <svg width="64" height="64" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="11" fill="#FFFFFF" />
        <path
          d="M10.5 35V13.5L19.25 26L28 13.5V35M28 13.5H32.5C36.09 13.5 39 16.41 39 20C39 23.59 36.09 26.5 32.5 26.5H28"
          fill="none"
          stroke="#000000"
          strokeWidth="4.6"
        />
      </svg>
    ),
    size
  );
}
