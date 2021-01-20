import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavStream from "../components/NavStream/NavStream";
import HomeSearch from "../components/HomeSearch/HomeSearch";
import Explore from "../components/Explore/Explore";
import MissUpdate from "../components/MissUpdate/MissUpdate";
// import HomeExams from "../components/HomeExams/HomeExams";
import dynamic from "next/dynamic";
const HomeExams = dynamic(() => import("../components/HomeExams/HomeExams"), {
  ssr: false,
});

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
        {/* <MissUpdate /> */}
        <HomeExams />
      </main>
    </div>
  );
}
