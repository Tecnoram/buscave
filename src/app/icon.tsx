import { ImageResponse } from "next/og";

export const size = {
  width: 256,
  height: 256,
};

export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 150,
          fontWeight: 800,
          letterSpacing: -10,
          borderRadius: 64,
          border: "16px solid #0f172a",
          boxSizing: "border-box",
          textShadow: "0 10px 24px rgba(15, 23, 42, 0.28)",
        }}
      >
        B
      </div>
    ),
    size,
  );
}
