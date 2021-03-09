import Head from "next/head";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";
import { db } from "../lib/firebase-admin";
const NavStream = dynamic(() => import("../components/NavStream/NavStream"));
const Explore = dynamic(() => import("../components/Explore/Explore"));
const HomeSearch = dynamic(() => import("../components/HomeSearch/HomeSearch"));
const MissUpdate = dynamic(() => import("../components/MissUpdate/MissUpdate"));
const Footer = dynamic(() => import("../components/Footer/Footer"));
const HomeExams = dynamic(() => import("../components/HomeExams/HomeExams"), {
  ssr: false,
});
import { useAuth } from "../lib/auth";

const HomeColleges = dynamic(
  () => import("../components/HomeColleges/HomeColleges"),
  {
    ssr: false,
  }
);

export default function Home({ data }) {
  const { auth } = useAuth();
  console.log(data, "auth data");

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
        <HomeExams data={data} />
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

export async function getServerSideProps() {
  var res = db.collection("exams").where("displayOnHome", "==", true);
  var docs = await res.get();
  var data = [];
  if (docs.empty) {
    return {
      props: { data },
      // data: [],
    };
  }
  console.log(data, "asd");
  docs.forEach((doc) => {
    data.push(doc.data());
  });
  console.log(data, "piyush");
  return {
    props: { data }, // will be passed to the page component as props
  };
}
