import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmartLeaf - AI-Powered Plant Health Analysis",
  description:
    "SmartLeaf analyzes plant images to detect diseases, monitor growth, and evaluate plant health — empowering farmers with AI-driven insights.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
