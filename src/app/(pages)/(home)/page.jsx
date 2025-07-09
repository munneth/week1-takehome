import Image from "next/image";
import styles from "../_globals/mixins.scss";

import RecentWorkComponent from "../_components/recentWorkComponent";

export default function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Image src="/pen.svg" alt="hero" width={50} height={50} />
        </div>
        <div>
          <h1
            style={{
              fontFamily: "Inter !important",
              fontWeight: 700,
              fontStyle: "bold",
              fontSize: "3.25rem",
              lineHeight: "3.625rem",
              letterSpacing: "0%",
              verticalAlign: "middle",
              marginBottom: "3rem",
            }}
          >
            Recent Work
          </h1>
        </div>
        <div>
          <p
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "2rem",
              lineHeight: "100%",
              letterSpacing: "0%",
              verticalAlign: "middle",
              marginBottom: "2rem",
            }}
          >
            Transforming ideas into incredible realities is what we do best
          </p>
        </div>
      </div>
      <div>
        <RecentWorkComponent />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Inter",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "1.125rem",
            lineHeight: "100%",
            letterSpacing: "0%",
            marginTop: "2rem",
          }}
        >
          AND MORE...
        </p>
      </div>
    </>
  );
}
