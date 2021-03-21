import React, { useEffect } from "react";
import styles from "./hamburgerMenu.module.css";
import Image from "next/image";
import Link from "next/link";

const HamburgerMenu = ({setOpen}) => {
  useEffect(() => {
    const anchors = document.querySelectorAll(
      ".hamburgerMenu_nav_ham_menu_link__1AGCU"
    );
    anchors.forEach((el) =>
      el.addEventListener("click", () => {
        setOpen(false);
      })
    );
    return anchors.forEach((el) =>
      el.removeEventListener("click", () => {
        setOpen(false);
      })
    );
    // console.log(anchors);
  }, []);
  return (
    <>
      <div>
        <div className={styles.nav_ham_menu_link}>
          <div className={styles.nav_ham_menu_image}>
            <Image
              src="/hamExam.svg"
              alt="exam logo "
              layout="fill"
              quality={100}
            />
          </div>
          <Link href="/explore/exams">
            <a>Exams</a>
          </Link>
        </div>
        <div className={styles.nav_ham_menu_link}>
          <div className={styles.nav_ham_menu_image}>
            <Image src="/hamCol.svg" alt="exam logo " layout="fill" />
          </div>
          <Link href="/explore/colleges">
            <a>Colleges</a>
          </Link>
        </div>
        <div className={styles.nav_ham_menu_link}>
          <div className={styles.nav_ham_menu_image}>
            <Image src="/hamWar.svg" alt="exam logo " layout="fill" />
          </div>
          <Link href="/write-a-review">
            <a>Write a review</a>
          </Link>
        </div>
      </div>
      <hr />
      <div>
        <div className={styles.nav_ham_menu_link}>
          <div className={styles.nav_ham_menu_image}>
            <Image src="/hamEng.svg" alt="exam logo " layout="fill" />
          </div>
          <Link href="/explore/exams/engineering">
            <a>Engineering</a>
          </Link>
        </div>
        <div className={styles.nav_ham_menu_link}>
          <div className={styles.nav_ham_menu_image}>
            <Image src="/hamMed.svg" alt="exam logo " layout="fill" />
          </div>
          <Link href="/explore/exams/medical">
            <a>Medical</a>
          </Link>
        </div>
        <div className={styles.nav_ham_menu_link}>
          <div className={styles.nav_ham_menu_image}>
            <Image src="/hamHM.svg" alt="exam logo " layout="fill" />
          </div>
          <Link href="/explore/exams/hotel-management">
            <a>Hotel Management</a>
          </Link>
        </div>
        <div className={styles.nav_ham_menu_link}>
          <div className={styles.nav_ham_menu_image}>
            <Image src="/hamDes.svg" alt="exam logo " layout="fill" />
          </div>
          <Link href="/explore/exams/design">
            <a>Design</a>
          </Link>
        </div>
        <div className={styles.nav_ham_menu_link}>
          <div className={styles.nav_ham_menu_image}>
            <Image src="/hamAgr.svg" alt="exam logo " layout="fill" />
          </div>
          <Link href="/explore/exams/agriculture">
            <a>Agriculture</a>
          </Link>
        </div>
        <div className={styles.nav_ham_menu_link}>
          <div className={styles.nav_ham_menu_image}>
            <Image src="/hamCom.svg" alt="exam logo " layout="fill" />
          </div>
          <Link href="/explore/exams/commerce">
            <a>Commerce</a>
          </Link>
        </div>
        <div className={styles.nav_ham_menu_link}>
          <div className={styles.nav_ham_menu_image}>
            <Image src="/hamAvi.svg" alt="exam logo " layout="fill" />
          </div>
          <Link href="/explore/exams/aviation">
            <a>Aviation</a>
          </Link>
        </div>
        <div className={styles.nav_ham_menu_link}>
          <div className={styles.nav_ham_menu_image}>
            <Image src="/hamDef.svg" alt="exam logo " layout="fill" />
          </div>
          <Link href="/explore/exams/defence">
            <a>Defence Services</a>
          </Link>
        </div>
        <div className={styles.nav_ham_menu_link}>
          <div className={styles.nav_ham_menu_image}>
            <Image src="/hamLaw.svg" alt="exam logo " layout="fill" />
          </div>
          <Link href="/explore/exams/law">
            <a>Law</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
