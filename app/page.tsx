import AboutMe from "@/components/AboutMe";
import styles from "./page.module.css";
import IntroBox from "@/components/IntroBox";

export default function Home() {
  return (
    <div className={styles.page}>
      <IntroBox />
      <AboutMe />
    </div>
  );
}
