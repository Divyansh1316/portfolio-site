"use client";

import { useEffect, useRef } from "react";

export default function ScrollEffects() {
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const hero = document.querySelector<HTMLElement>(".hero");
    root.dataset.scrollMotion = "ready";

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        if (entry.target.classList.contains("timeline")) {
          entry.target.classList.add("timeline-revealed");
        }
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    document.querySelectorAll(".scroll-reveal, .timeline").forEach((item) => observer.observe(item));

    const cards = Array.from(document.querySelectorAll<HTMLElement>(".project-card"));
    const canTrackPointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onCardMove = (event: PointerEvent) => {
      if (!canTrackPointer) return;
      const card = event.currentTarget as HTMLElement;
      const bounds = card.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
    const onCardLeave = (event: PointerEvent) => {
      const card = event.currentTarget as HTMLElement;
      card.style.removeProperty("--mouse-x");
      card.style.removeProperty("--mouse-y");
    };
    cards.forEach((card) => {
      card.addEventListener("pointermove", onCardMove);
      card.addEventListener("pointerleave", onCardLeave);
    });

    let frame = 0;
    const updateProgress = () => {
      const maxScroll = root.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
      if (hero) {
        const heroProgress = Math.min(window.scrollY / (hero.offsetHeight * 1.1), 1);
        hero.style.setProperty("--hero-scale", String(1 - heroProgress * 0.16));
        hero.style.setProperty("--hero-shift", `${-24 * heroProgress}px`);
        hero.style.opacity = String(1 - heroProgress * 0.35);
      }
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      observer.disconnect();
      cards.forEach((card) => {
        card.removeEventListener("pointermove", onCardMove);
        card.removeEventListener("pointerleave", onCardLeave);
        card.style.removeProperty("--mouse-x");
        card.style.removeProperty("--mouse-y");
      });
      delete root.dataset.scrollMotion;
      if (hero) {
        hero.style.removeProperty("--hero-scale");
        hero.style.removeProperty("--hero-shift");
        hero.style.removeProperty("opacity");
      }
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true"><span ref={progressRef} /></div>;
}
