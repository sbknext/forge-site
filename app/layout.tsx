import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forge — Solo devs ship like teams",
  description:
    "Multi-agent SDLC harness for solo developers. Python/Node/Rust SDKs, self-hostable, MIT.",
  metadataBase: new URL("https://forge.sbknext.com"),
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Forge — Solo devs ship like teams",
    description:
      "Multi-agent SDLC harness for solo developers. Python/Node/Rust SDKs, self-hostable, MIT.",
    url: "https://forge.sbknext.com",
    siteName: "Forge",
    type: "website",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forge — Solo devs ship like teams",
    description:
      "Multi-agent SDLC harness for solo developers. Python/Node/Rust SDKs, self-hostable, MIT.",
    images: ["/og-image.svg"],
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
