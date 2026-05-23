import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forge — Solo devs ship like teams",
  description:
    "Forge is an open-source AI sub-agent framework. Spin up Sonnet-powered specialists from Python, Node, or Rust and ship like a full team — alone.",
  metadataBase: new URL("https://forge.sbknext.com"),
  openGraph: {
    title: "Forge — Solo devs ship like teams",
    description:
      "Open-source AI sub-agent framework. Python, Node, Rust. Self-host or use ours.",
    url: "https://forge.sbknext.com",
    siteName: "Forge",
    type: "website",
  },
};

// TODO: add analytics (PostHog or GA) once domain is live.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
