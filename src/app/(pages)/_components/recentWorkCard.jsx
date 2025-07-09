import styles from "./recentWorkCard.module.scss";
import Link from "next/link";

export default function RecentWorkCard({
  quarter,
  imgPath,
  title,
  description,
  link,
}) {
  return (
    <div className={styles.card}>
      <p className={styles.quarter}>{quarter}</p>
      <img
        src={imgPath}
        alt={title}
        style={{
          backgroundColor:
            imgPath === "/bottomLeft.png" ? "white" : "transparent",
        }}
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        VISIT SITE
      </Link>
    </div>
  );
}
