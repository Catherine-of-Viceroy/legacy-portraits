import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./tile.module.css";

export type TileProps = {
  title: string;
  image: string;
  description: string | ReactNode;
  url?: string;
  isPlaceholder?: boolean;
};

export default function Tile({
  title,
  image,
  description,
  url,
  isPlaceholder = true,
}: TileProps) {
  const isClickable = !isPlaceholder && Boolean(url);
  const className = `${styles.tile}${isPlaceholder ? ` ${styles.placeholder}` : ""}`;
  const content = (
    <>
      {!isPlaceholder ? (
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 620px) 100vw, 620px"
          className={styles.background}
          unoptimized={image.endsWith(".svg")}
        />
      ) : null}
      {isPlaceholder ? (
        <>
          <p className={styles.comingSoon}>Coming Soon</p>
          <h2 className={styles.title}>{title}</h2>
        </>
      ) : (
        <>
          <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            {isClickable ? (
              <Image src="/images/link.svg" alt="" width={32} height={32} />
            ) : null}
          </div>
          <p className={styles.description}>{description}</p>
        </>
      )}
    </>
  );

  if (isClickable) {
    return (
      <a
        className={className}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}
