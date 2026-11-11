import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Divyansh's Portfolio",
  description: "Full-stack developer building fast, responsive web applications and reliable backends with clean architecture.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
