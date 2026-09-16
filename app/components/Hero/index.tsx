import Image from "next/image";
import heroImage from "@/public/images/hero.jpg";
import styles from "./index.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <Image
        src={heroImage}
        alt=""
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className={styles.background}
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
