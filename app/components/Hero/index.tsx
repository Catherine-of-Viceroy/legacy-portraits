"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import heroImage from "@/public/images/hero.jpg";
import heroImageA from "@/public/images/hero_a.jpg";
import styles from "./index.module.css";

const INTRO_DURATION_MS = 4000;

export default function Hero() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), INTRO_DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <Image
        src={heroImage}
        alt=""
        fill
        preload
        placeholder="blur"
        sizes="100vw"
        className={styles.background}
        style={{ objectFit: "cover", objectPosition: "58% 50%" }}
      />
      <Image
        src={heroImageA}
        alt=""
        fill
        preload
        placeholder="blur"
        sizes="100vw"
        className={`${styles.background} ${styles.intro} ${
          showIntro ? "" : styles.introHidden
        }`}
        style={{ objectFit: "cover", objectPosition: "58% 50%" }}
      />
      <div className={styles.content}>
        <span className={styles.tagline}>Design</span>
        <span className={styles.dot} aria-hidden="true" />
        <span className={styles.tagline}>Innovation</span>
        <span className={styles.dot} aria-hidden="true" />
        <span className={styles.tagline}>Empathy</span>
      </div>
    </section>
  );
}
