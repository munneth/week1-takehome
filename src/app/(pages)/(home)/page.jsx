import Image from "next/image";
import styles from "../_globals/mixins.scss";
import RecentWorkCard from "../_components/recentWorkCard";

export default function Home() {
  return (
    <>
      <RecentWorkCard
        quarter="Q1 2025"
        imgPath="/images/recentWork/q1.png"
        title="Recent Work"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        link="https://www.google.com"
      />
    </>
  );
}
