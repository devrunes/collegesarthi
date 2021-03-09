import React, { useState, useRef, useEffect, useContext } from "react";
import { AuthOpenContext } from "../../lib/authContext";
import { useAuth } from "../../lib/auth";
import styles from "./Navbar.module.css";
// import { Squash as Hamburger } from "hamburger-react";
import Image from "next/image";
// import Login from "../Auth/Login/Login";
// import Auth from "../Auth/Auth";
import dynamic from "next/dynamic";
import Link from "next/link";
const Auth = dynamic(() => import("../Auth/Auth"));
// const useAuth = dynamic(() =>
//   import("../../lib/auth").then((mod) => mod.useAuth)
// );
const Hamburger = dynamic(() =>
  import("hamburger-react").then((mod) => mod.Squash)
);

export default function Navbar() {
  const { auth, signOut } = useAuth();
  const [isOpen, setOpen] = useState(false);
  const [authOpen, setAuthOpen] = useContext(AuthOpenContext);

  let hamMenuRef = useRef(null);
  let inputRef = useRef(null);
  let logoRef = useRef(null);
  let authButRef = useRef(null);
  // let testRef = useRef(null);

  const handleAuthClick = () => {
    setAuthOpen(!authOpen);
  };

  useEffect(() => {
    // console.log(hamMenuRef);
    // console.log(testRef);
    if (isOpen) {
      hamMenuRef.current.style.display = "block";
      inputRef.current.style.display = "none";
      logoRef.current.style.display = "none";
      authButRef.current.style.display = "block";
      document.body.style.overflow = "hidden";
    } else {
      inputRef.current.style.display = "block";
      logoRef.current.style.display = "block";
      authButRef.current.style.display = "none";
      hamMenuRef.current.style.display = "none";
      document.body.style.overflow = "scroll";
    }
    if (window.innerWidth >= 769) {
      authButRef.current.style.display = "block";
    }
    console.log(window.innerWidth);
  }, [isOpen]);
  return (
    <div className={styles.nav_cont}>
      <div ref={logoRef} className={styles.nav_logo}>
        <Link href="/" >
        <a>LOGO</a>
        </Link>
      </div>
      <div ref={inputRef} className={styles.nav_input}>
        <input
          type="text"
          name="search"
          id="nav_search"
          placeholder="Search Anything"
        />
      </div>
      <div className={styles.nav_links}>
        <div>
          <Link href="/explore/exams">
          <a>Exam</a>
          </Link>
          </div>
        <div> <Link href="/explore/colleges">
          <a>College</a>
          </Link></div>
        <Link href="/write-a-review">
          <a>Write a review</a>
        </Link>
      </div>
      <div ref={authButRef} className={styles.nav_authButon}>
        {auth && auth.isLogin ? (
          <div>
            {/* <Link href="/">
            <a>Dashboard link.</a>
          </Link>
           */}
            <div>
              <button
                className={styles.nav_authButton_button}
                onClick={() => signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <button
            className={styles.nav_authButton_button}
            onClick={handleAuthClick}

            // onClick={() => signInWithGoogle()}
          >
            Login/Signup
          </button>
        )}
      </div>
      <div className={styles.nav_ham_cont}>
        <Hamburger
          className={styles.nav_ham}
          duration={0.5}
          toggled={isOpen}
          toggle={setOpen}
          size={24}
        />
      </div>
      <div className={styles.nav_ham_menu} ref={hamMenuRef}>
        <div>
          <div className={styles.nav_ham_menu_link}>
            <div className={styles.nav_ham_menu_image}>
              <Image
                src="/hamExam.svg"
                alt="exam logo "
                layout="fill"
                quality={100}
                // unoptimized={true}
              />
            </div>
            <a href="/explore/exams">Exams</a>
          </div>
          <div className={styles.nav_ham_menu_link}>
            <div className={styles.nav_ham_menu_image}>
              <Image src="/hamCol.svg" alt="exam logo " layout="fill" />
            </div>
            <a href="/explore/colleges">Colleges</a>
          </div>
          <div className={styles.nav_ham_menu_link}>
            <div className={styles.nav_ham_menu_image}>
              <Image src="/hamWar.svg" alt="exam logo " layout="fill" />
            </div>
            <a href="write-a-review">Write A review</a>
          </div>
        </div>
        <hr />
        <div>
          <div className={styles.nav_ham_menu_link}>
            <div className={styles.nav_ham_menu_image}>
              <Image src="/hamEng.svg" alt="exam logo " layout="fill" />
            </div>
            <a href="/explore/exams/engineering">Engineering</a>
          </div>
          <div className={styles.nav_ham_menu_link}>
            <div className={styles.nav_ham_menu_image}>
              <Image src="/hamMed.svg" alt="exam logo " layout="fill" />
            </div>
            <a href="/explore/exams/medical">Medical</a>
            
          </div>
          <div className={styles.nav_ham_menu_link}>
            <div className={styles.nav_ham_menu_image}>
              <Image src="/hamHM.svg" alt="exam logo " layout="fill" />
            </div>
            <a href="/explore/exams/hotel-management">Hotel Management</a>
            
          </div>
          <div className={styles.nav_ham_menu_link}>
            <div className={styles.nav_ham_menu_image}>
              <Image src="/hamDes.svg" alt="exam logo " layout="fill" />
            </div>
            <a href="/explore/exams/design">Design</a>
            
          </div>
          <div className={styles.nav_ham_menu_link}>
            <div className={styles.nav_ham_menu_image}>
              <Image src="/hamAgr.svg" alt="exam logo " layout="fill" />
            </div>
            <a href="/explore/exams/agriculture">Agriculture</a>
            
          </div>
          <div className={styles.nav_ham_menu_link}>
            <div className={styles.nav_ham_menu_image}>
              <Image src="/hamCom.svg" alt="exam logo " layout="fill" />
            </div>
            <a href="/explore/exams/commerce">Commerce</a>
            
          </div>
          <div className={styles.nav_ham_menu_link}>
            <div className={styles.nav_ham_menu_image}>
              <Image src="/hamAvi.svg" alt="exam logo " layout="fill" />
            </div>
            <a href="/explore/exams/aviation">Aviation</a>
          </div>
          <div className={styles.nav_ham_menu_link}>
            <div className={styles.nav_ham_menu_image}>
              <Image src="/hamDef.svg" alt="exam logo " layout="fill" />
            </div>
            <a href="/explore/exams/defence">Defence Services</a>
          </div>
          <div className={styles.nav_ham_menu_link}>
            <div className={styles.nav_ham_menu_image}>
              <Image src="/hamLaw.svg" alt="exam logo " layout="fill" />
            </div>
            Law
          </div>
        </div>
      </div>
      {authOpen ? <Auth handleCross={handleAuthClick} /> : ""}
      {/* <Auth/> */}
    </div>
  );
}
