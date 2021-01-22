import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavStream from "../components/NavStream/NavStream";
import HomeSearch from "../components/HomeSearch/HomeSearch";
import Explore from "../components/Explore/Explore";
import MissUpdate from "../components/MissUpdate/MissUpdate";
import Footer from "../components/Footer/Footer";
import dynamic from "next/dynamic";
const HomeExams = dynamic(() => import("../components/HomeExams/HomeExams"), {
  ssr: false,
});

const HomeColleges = dynamic(
  () => import("../components/HomeColleges/HomeColleges"),
  {
    ssr: false,
  }
);

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
        <MissUpdate
          themeColor="#4a788d"
          heading="Never miss an Update!"
          headingSup="You focus on your studies , we take care of rest"
        />
        <HomeExams />
        <MissUpdate
          themeColor="#1C8549"
          heading="Get complete study material!"
          headingSup="Previous Year Question Papers, Preparation Kit and much more!"
        />
        <HomeColleges />
        <Footer />
      </main>
    </div>
  );
}
