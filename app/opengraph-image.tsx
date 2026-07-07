import { ImageResponse } from "next/og";

export const alt = "Lauren Lee";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "#0a0a0a",
          color: "#ededed",
          fontFamily: "monospace",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", color: "#22c55e", fontSize: 32, marginBottom: 24 }}>
          $ whoami
        </div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700 }}>Lauren</div>
        <div style={{ display: "flex", fontSize: 40, marginTop: 12, color: "#ededed" }}>
          | Software Engineer & Nonprofit Founder
        </div>
        <div style={{ display: "flex", fontSize: 28, marginTop: 12, color: "#a3a3a3" }}>
          BS/MS Computer Science @ Yale University
        </div>
      </div>
    ),
    { ...size }
  );
}
