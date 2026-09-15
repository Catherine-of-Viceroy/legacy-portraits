import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./tile.module.css";

export type TileProps = {
  title: string;
  image: string;
  description: string | ReactNode;
};

export default function Tile({ title, image, description }: TileProps) {
  return (
    <div className={styles.tile}>
      <Image
        src={image}
        alt=""
        fill
        sizes="(max-width: 620px) 100vw, 620px"
        className={styles.background}
      />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <Image
          src="/images/link.svg"
          alt=""
          width={32}
          height={32}
        />
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
