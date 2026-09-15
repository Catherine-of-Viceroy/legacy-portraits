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
      />
      <h1 className={styles.title}>Hero</h1>
    </section>
  );
}
