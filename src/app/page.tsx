import { Header } from "@/components/Header/Header";
import styles from "./page.module.scss";
import { Main } from "@/components/Main/Main";
import { About } from "@/components/About/About";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <Main />
        <About />
      </main>
    </div>
  );
}
