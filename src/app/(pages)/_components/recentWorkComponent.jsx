import styles from "./recentWorkComponent.module.scss";
import RecentWorkCard from "./recentWorkCard";

export default function RecentWorkComponent() {
  return (
    <>
      <div>
        <img src="/images/recentWork/recentWork.png" alt="Recent Work" />
        <h2>Recent Work</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className={styles.grid}>
        <RecentWorkCard
          quarter="Q1 2025"
          imgPath="/images/recentWork/q1.png"
          title="Recent Work"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="https://www.google.com"
        />
        <RecentWorkCard
          quarter="Q1 2025"
          imgPath="/images/recentWork/q1.png"
          title="Recent Work"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="https://www.google.com"
        />
        <RecentWorkCard
          quarter="Q1 2025"
          imgPath="/images/recentWork/q1.png"
          title="Recent Work"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="https://www.google.com"
        />
        <RecentWorkCard
          quarter="Q1 2025"
          imgPath="/images/recentWork/q1.png"
          title="Recent Work"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="https://www.google.com"
        />
      </div>
    </>
  );
}
