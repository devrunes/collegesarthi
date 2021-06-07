import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import styles from "./EccComponent.module.css";
import Lobby from "./Lobby/Lobby";
import Footer from "../Footer/Footer";

const EccComponent = ({ data }) => {
  const router = useRouter();
  const query = router.query;
  const links = ["exams", "colleges"];

  const [stream, course, state, city] = query.filters || [
    "all-stream",
    "all-courses",
    "all-india",
    "",
  ];

  useEffect(() => {
    // console.log(query);
    if (query.type) {
      let idx = links.indexOf(query.type);
      let navLinks = document.getElementsByClassName(styles.ecc_nav_link);
      for (let i = 0; i < 2; i++) {
        navLinks[i].classList.remove(styles.ecc_active);
      }
      navLinks[idx].classList.add(styles.ecc_active);
      //   console.log(navLinks);
    }
  }, [query]);
  return (
    <div className={styles.ecc_wrapper}>
      <Head>
        <title>
          CollegeSarathi {query.type ? `- ${query.type.toUpperCase()}` : ""}
        </title>
      </Head>
      <div className={styles.ecc_topNav}>
        <Link href="/explore/exams">
          <a className={styles.ecc_nav_link}>Exams</a>
        </Link>
        <Link href="/explore/colleges">
          <a className={styles.ecc_nav_link}>Colleges</a>
        </Link>
        {/* <Link href="/explore/courses">
          <a className={styles.ecc_nav_link}>Courses</a>
        </Link> */}
      </div>
      {/* <div>{query.type}</div> */}
      <h1 className={styles.heading}>
        {stream !== "all-stream" || state != "all-india"
          ? `Top ${
              course && course != "all-courses"
                ? course
                : stream != "all-stream"
                ? stream
                : ""
            } Colleges ${
              city && city !== ""
                ? `in ${city}`
                : state && state !== "all-india"
                ? `in ${state}`
                : ""
            }`
          : ""}
      </h1>
      <Lobby query={query} data={data} />
      <Footer />
    </div>
  );
};
export default EccComponent;
