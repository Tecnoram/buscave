import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #059669 0%, #10b981 55%, #34d399 100%)",
          color: "#ffffff",
          fontSize: 104,
          fontWeight: 800,
          letterSpacing: -8,
          borderRadius: 42,
          border: "12px solid #0f172a",
          boxSizing: "border-box",
          textShadow: "0 8px 18px rgba(15, 23, 42, 0.25)",
        }}
      >
        B
      </div>
    ),
    size,
  );
}
