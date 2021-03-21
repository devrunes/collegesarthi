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
// import { useAuth } from "../lib/auth";

const HomeColleges = dynamic(
  () => import("../components/HomeColleges/HomeColleges"),
  {
    ssr: false,
  }
);

export default function Home({ collegeData, examData }) {
  // const { auth } = useAuth();

  return (
    <div className={styles.container}>
      <Head>
        <title>CollegeSarthi</title>
      </Head>

      <main className={styles.main}>
        <NavStream />

        <HomeSearch />

        <Explore />

        <MissUpdate
          themeColor="#333366"
          heading="Never miss an Update!"
          headingSup="You focus on your studies , we take care of rest"
        />
        <HomeExams data={examData} />
        <MissUpdate
          themeColor="#1C8549"
          heading="Get complete study material!"
          headingSup="Previous Year Question Papers, Preparation Kit and much more!"
        />
        <HomeColleges data={collegeData} />
        <Footer />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  var examRef = db.collection("exams").where("displayOnHome", "==", true);
  var examDocs = await examRef.get();

  var examData = [];

  // if (examDocs.empty) {
  //   return {
  //     props: { examData },
  //   };
  // }

  examDocs.forEach((doc) => {
    const { links, prelog, examName, url } = doc.data();
    examData.push({ links, prelog, examName, url });
  });

  var collegeRef = db.collection("colleges").where("displayOnHome", "==", true);
  var collegeDocs = await collegeRef.get();

  var collegeData = [];

  collegeDocs.forEach((doc) => {
    collegeData.push(doc.data());
  });

  return {
    props: { collegeData, examData }, // will be passed to the page component as props
  };
}
