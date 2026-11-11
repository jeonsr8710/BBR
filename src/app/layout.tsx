import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BBR Card Studio | 온라인 빼빼로데이 카드 만들기 & 보내기",
  description:
    "이메일, 카카오톡, SMS로 달콤한 온라인 빼빼로데이 카드를 간편하게 만들어 보내보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#fdf6f0] text-stone-900">
        {children}
      </body>
    </html>
  );
}
