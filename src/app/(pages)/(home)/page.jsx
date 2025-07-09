import styles from "./page.module.scss";
import Image from "next/image";
import RecentWorkComponent from "../_components/recentWorkComponent";

export default function Home() {
  return (
    <div>
      {/* Top Section (white) */}
      <div className={styles.topSection}>
        <h1 className={styles.mission}>
          Our mission is to design creative
          <br />
          digital solutions that have a<br />
          positive social impact
        </h1>
      </div>
      {/* Gradient Section (purple) */}
      <div className={styles.gradientSection}>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/design-home 1.png"
            alt="Hero"
            width={596.4}
            height={298.2}
            className={styles.heroImage}
            priority
          />
        </div>
        <div className={styles.penWrapper}>
          <Image
            src="/Pen.svg"
            alt="Pen Icon"
            width={50}
            height={50}
            className={styles.pen}
          />
        </div>
        <h3 className={styles.subheading}>Recent Work</h3>
        <p className={styles.subtitle}>
          Transforming ideas into incredible realities is what we do best
        </p>
        <div className={styles.bottomSection}>
          <RecentWorkComponent />
        </div>
        <div>
          <p className={styles.andMore}>AND MORE...</p>
        </div>
      </div>
    </div>
  );
}
