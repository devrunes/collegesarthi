import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import styles from "./EccComponent.module.css";

const EccComponent = () => {
  const router = useRouter();
  const query = router.query;
  //   console.log(query);
  const links = ["exams", "colleges", "courses"];
  useEffect(() => {
    // console.log(query);
    if (query.type) {
      let idx = links.indexOf(query.type);
      let navLinks = document.getElementsByClassName(styles.ecc_nav_link);
      for (let i = 0; i < 3; i++) {
        navLinks[i].classList.remove(styles.ecc_active);
      }
      navLinks[idx].classList.add(styles.ecc_active);
      //   console.log(navLinks);
    }
  }, [query]);

  return (
    <div>
      <Head>
        <title>
          CollegeSarthi {query.type ? `- ${query.type.toUpperCase()}` : ""}
        </title>
      </Head>
      <div className={styles.ecc_topNav}>
        <Link href="/exams">
          <a className={styles.ecc_nav_link}>Exams</a>
        </Link>
        <Link href="/colleges">
          <a className={styles.ecc_nav_link}>Colleges</a>
        </Link>
        <Link href="/courses">
          <a className={styles.ecc_nav_link}>Courses</a>
        </Link>
      </div>
      <div>{query.type}</div>
    </div>
  );
};
export default EccComponent;
