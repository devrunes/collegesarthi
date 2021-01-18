import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavStream from "../components/NavStream/NavStream";
import HomeSearch from "../components/HomeSearch/HomeSearch";
import Explore from "../components/Explore/Explore";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CollegeSarthi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavStream />
        <HomeSearch />
        <Explore />
      </main>
    </div>
  );
}
