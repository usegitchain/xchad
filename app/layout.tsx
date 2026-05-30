import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "xChad — Chad keeps X clean.",
  description:
    "AI moderator for X group chats. Scam links, impersonators, FUD floods — gone in milliseconds.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://rsms.me/"
        />
        <link
          rel="stylesheet"
          href="https://rsms.me/inter/inter.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
