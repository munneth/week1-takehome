import styles from "./recentWorkComponent.module.scss";
import RecentWorkCard from "./recentWorkCard";

export default function RecentWorkComponent() {
  return (
    <>
      <div className={styles.grid}>
        <RecentWorkCard
          quarter="WINTER/SPRING 2023"
          imgPath="/5caa0c870a4a04b249e5d5292f19a17ac8ac6edd.png"
          title="IELC Tutoring"
          description="Website and brand identity project for the Interactive Elementary Learning Center to boost credibility and increase participation in their free 7-week summer program."
          link="https://www.google.com"
        />
        <RecentWorkCard
          quarter="FALL/WINTER 2023"
          imgPath="/topRight.png"
          title="Bloom and Vine"
          description="Website project for Bloom and Vine a boutique floral design studio located in Northern California. Bloom and Vine strives to make every event unforgettable."
          link="https://www.google.com"
        />
        <RecentWorkCard
          quarter="WINTER/SPRING 2022"
          imgPath="/bottomLeft.png"
          title="New Vietnam Studies Initiative"
          description="We developed the website for NVSI, promoting research and collaboration in fields related to contemporary Vietnam's economic, political, and cultural development."
          link="https://www.google.com"
        />
        <RecentWorkCard
          quarter="FALL/WINTER 2021"
          imgPath="/Frame 1749.png"
          title="ONELOOP"
          description="Oneloop is a team of graduate and undergraduate students at UCD. They design and build a Hyperloop pod to compete in SpaceX's annual Hyperloop competition."
          link="https://www.google.com"
        />
      </div>
    </>
  );
}
