"use client";

import { useEffect, useState, type CSSProperties } from "react";

type StarPosition = { left: number; top: number; delay: number };

export default function ShootingStars() {
  const [position, setPosition] = useState<StarPosition | null>(null);

  useEffect(() => {
    setPosition({
      left: 5 + Math.random() * 35,
      top: Math.random() * 18,
      delay: Math.random() * 24,
    });
  }, []);

  if (!position) return null;

  return (
    <div className="shooting-stars" aria-hidden="true">
      <span style={{
        left: `${position.left}%`,
        top: `${position.top}%`,
        animationDelay: `${position.delay}s`,
      } as CSSProperties} />
    </div>
  );
}
