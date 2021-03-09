import React from "react";
import styles from "./NavStream.module.css";
import Link from "next/link";
const NavStream = () => {
  return (
    <div className={styles.navSt_cont}>
      <div>
        <Link href="/explore/exams/engineering">
          <a>Engineering</a>
        </Link>
      </div>
      <div> <Link href="/explore/exams/medical">
          <a>Medical</a>
        </Link></div>
      <div> <Link href="/explore/exams/management">
          <a>Management</a>
        </Link></div>
      <div> <Link href="/explore/exams/law">
          <a>Law</a>
        </Link></div>
      <div> <Link href="/explore/exams/design">
          <a>Design</a>
        </Link></div>
      <div> <Link href="/explore/exams">
          <a>See More</a>
        </Link></div>
    </div>
  );
};
export default NavStream;
