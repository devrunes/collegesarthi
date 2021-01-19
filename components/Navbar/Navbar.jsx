import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "../../lib/auth";
import styles from "./Navbar.module.css";
import { Squash as Hamburger } from "hamburger-react";
import Image from "next/image";

export default function Navbar() {
  const { auth, signOut, signInWithGoogle } = useAuth();
  const [isOpen, setOpen] = useState(false);
  let hamMenuRef = useRef(null);
  let inputRef = useRef(null);
  let logoRef = useRef(null);
  let authButRef = useRef(null);

  // const handleHamClick = () => {

  // };
  useEffect(() => {
    console.log(hamMenuRef);
    if (isOpen) {
      hamMenuRef.current.style.display = "block";
      inputRef.current.style.display = "none";
      logoRef.current.style.display = "none";
      authButRef.current.style.display = "block";
    } else {
      inputRef.current.style.display = "block";
      logoRef.current.style.display = "block";
      authButRef.current.style.display = "none";
      hamMenuRef.current.style.display = "none";
    }
    if (window.innerWidth >= 769) {
      authButRef.current.style.display = "block";
    }
    console.log(window.innerWidth);
  }, [isOpen]);
  return (
    <div className={styles.nav_cont}>
      <div ref={logoRef} className={styles.nav_logo}>
        LOGO
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
        <div>Exam</div>
        <div>College</div>
        <div>Write a review</div>
      </div>
      <div>
        {auth ? (
          <div>
            {/* <Link href="/">
            <a>Dashboard link.</a>
          </Link>
           */}
            <div>
              <button onClick={() => signOut()}>Sign Out</button>
            </div>
          </div>
        ) : (
          <button
            ref={authButRef}
            className={styles.nav_authButon}
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
            Exams
          </div>
          <div className={styles.nav_ham_menu_link}>
            <div className={styles.nav_ham_menu_image}>
              <Image src="/hamCol.svg" alt="exam logo " layout="fill" />
            </div>
            Colleges
          </div>
          <div className={styles.nav_ham_menu_link}>
            <div className={styles.nav_ham_menu_image}>
              <Image src="/hamWar.svg" alt="exam logo " layout="fill" />
            </div>
            Write A review
          </div>
        </div>
        <hr />
        <div>
          <div className={styles.nav_ham_menu_link}>
            <div className={styles.nav_ham_menu_image}>
              <Image src="/hamEng.svg" alt="exam logo " layout="fill" />
            </div>
            Engineering
          </div>
          <div className={styles.nav_ham_menu_link}>
            <div className={styles.nav_ham_menu_image}>
              <Image src="/hamMed.svg" alt="exam logo " layout="fill" />
            </div>
            Medical
          </div>
          <div className={styles.nav_ham_menu_link}>
            <div className={styles.nav_ham_menu_image}>
              <Image src="/hamHM.svg" alt="exam logo " layout="fill" />
            </div>
            Hotel Management
          </div>
          <div className={styles.nav_ham_menu_link}>
            <div className={styles.nav_ham_menu_image}>
              <Image src="/hamDes.svg" alt="exam logo " layout="fill" />
            </div>
            Design
          </div>
          <div className={styles.nav_ham_menu_link}>
            <div className={styles.nav_ham_menu_image}>
              <Image src="/hamAgr.svg" alt="exam logo " layout="fill" />
            </div>
            Agriculture
          </div>
          <div className={styles.nav_ham_menu_link}>
            <div className={styles.nav_ham_menu_image}>
              <Image src="/hamCom.svg" alt="exam logo " layout="fill" />
            </div>
            Commerce
          </div>
          <div className={styles.nav_ham_menu_link}>
            <div className={styles.nav_ham_menu_image}>
              <Image src="/hamAvi.svg" alt="exam logo " layout="fill" />
            </div>
            Aviation
          </div>
          <div className={styles.nav_ham_menu_link}>
            <div className={styles.nav_ham_menu_image}>
              <Image src="/hamDef.svg" alt="exam logo " layout="fill" />
            </div>
            Defence Services
          </div>
          <div className={styles.nav_ham_menu_link}>
            <div className={styles.nav_ham_menu_image}>
              <Image src="/hamLaw.svg" alt="exam logo " layout="fill" />
            </div>
            Law
          </div>
        </div>
      </div>
    </div>
  );
}
