import styles from "./recentWorkCard.module.scss";

export default function RecentWorkCard({
  quarter,
  imgPath,
  title,
  description,
  link,
}) {
  return (
    <div className={styles.card}>
      <p>{quarter}</p>
      <img src={imgPath} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        VISIT SITE
      </a>
    </div>
  );
}
