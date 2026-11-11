"use client";
import { useState } from "react";
export default function EmailCopyButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }
  return <button className="email-copy" onClick={copyEmail} type="button" aria-live="polite"><span>{copied ? "Email copied" : email}</span><span aria-hidden="true">{copied ? "✓" : "▢"}</span></button>;
}
