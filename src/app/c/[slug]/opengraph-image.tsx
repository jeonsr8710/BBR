import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";
import { prisma } from "@/lib/prisma";
import { getTemplate } from "@/lib/templates";

export const size = {
  width: 1200,
  height: 600,
};

export const contentType = "image/png";

function loadKoreanFont(): Buffer | null {
  try {
    const fontPath = path.join(
      process.cwd(),
      "assets",
      "fonts",
      "UnDinaruBold.ttf"
    );
    if (fs.existsSync(fontPath)) {
      return fs.readFileSync(fontPath);
    }
  } catch {
    // fallback
  }
  return null;
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let card: {
    title: string;
    senderName: string;
    templateId: string;
  } | null = null;

  try {
    card = await prisma.card.findUnique({
      where: { slug },
      select: { title: true, senderName: true, templateId: true },
    });
  } catch {
    card = null;
  }

  const tpl = getTemplate(card?.templateId ?? "sweet-choco");
  const isLight = tpl.id === "strawberry-pink" || tpl.id === "almond-gold";
  const textColor = isLight ? "#1c1917" : "#fefce8";
  const mutedColor = isLight ? "#57534e" : "#e7e5e4";

  const titleText = card?.title || "Happy Pepero Day!";
  const senderText = `From. ${card?.senderName || "Your Friend"}`;
  const fontData = loadKoreanFont();

  const panelBg = isLight
    ? "rgba(255, 255, 255, 0.72)"
    : "rgba(0, 0, 0, 0.28)";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: tpl.ogBg,
          textAlign: "center",
          fontFamily: fontData ? "UnDinaru" : "sans-serif",
        }}
      >
        <div
          style={{
            width: "100%",
            height: 14,
            backgroundColor: tpl.ogAccent,
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: 520,
            padding: "40px 36px",
            borderRadius: 32,
            backgroundColor: panelBg,
            border: `4px solid ${tpl.ogAccent}`,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 18,
            }}
          >
            <div
              style={{
                width: 10,
                height: 36,
                borderRadius: 6,
                backgroundColor: "#f59e0b",
                display: "flex",
              }}
            />
            <div
              style={{
                width: 10,
                height: 44,
                borderRadius: 6,
                backgroundColor: "#fb7185",
                display: "flex",
              }}
            />
            <div
              style={{
                width: 10,
                height: 36,
                borderRadius: 6,
                backgroundColor: "#78350f",
                display: "flex",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              padding: "9px 22px",
              borderRadius: "999px",
              backgroundColor: tpl.ogAccent,
              color: "#ffffff",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "0.08em",
              marginBottom: 22,
            }}
          >
            11.11 HAPPY PEPERO DAY
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: 38,
              fontWeight: 700,
              color: textColor,
              lineHeight: 1.35,
              marginBottom: 18,
              maxWidth: 440,
              wordBreak: "keep-all",
            }}
          >
            {titleText}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: 24,
              color: mutedColor,
            }}
          >
            {senderText}
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: 14,
            backgroundColor: tpl.ogAccent,
            display: "flex",
          }}
        />
      </div>
    ),
    {
      ...size,
      ...(fontData
        ? {
            fonts: [
              {
                name: "UnDinaru",
                data: fontData,
                style: "normal",
                weight: 700,
              },
            ],
          }
        : {}),
    }
  );
}
