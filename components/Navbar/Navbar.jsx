import React, { useState, useRef, useEffect, useContext } from "react";
import {useRouter} from 'next/router'
import { AuthOpenContext } from "../../lib/authContext";
import { useAuth } from "../../lib/auth";
import styles from "./Navbar.module.css";
import dynamic from "next/dynamic";
import Link from "next/link";

// import HamburgerMenu from "./hamBurgerMenu/hamburgerMenu.jsx";

const Auth = dynamic(() => import("../Auth/Auth"));
const HamburgerMenu = dynamic(() =>
  import("./hamBurgerMenu/hamburgerMenu.jsx")
);

const Hamburger = dynamic(() =>
  import("hamburger-react").then((mod) => mod.Squash)
);

export default function Navbar() {
  const { user, auth, signOut } = useAuth();
  const [isOpen, setOpen] = useState(false);
  const [authOpen, setAuthOpen] = useContext(AuthOpenContext);

  let hamMenuRef = useRef(null);
  let inputRef = useRef(null);
  let logoRef = useRef(null);
  let authButRef = useRef(null);
  let userNameRef = useRef(null);
  // let testRef = useRef(null);

  const {asPath} =useRouter();
  const writeAReviewPath= asPath==='/write-a-review';
  useEffect(()=>{
    if(writeAReviewPath && !auth?.isLogin){
      setAuthOpen(true)
    }
  },[asPath,auth?.isLogin])
  
  useEffect(()=>{
    setTimeout(()=>{
       if(auth===Object || auth==={} || auth===null){
         setAuthOpen(true)
       }
       else if(auth?.isLogin===true){
        setAuthOpen(false)
      }
    },5000)
  },[auth]);

 useEffect(()=>{
     if(auth &&!auth.isLogin &&!writeAReviewPath){
   const timeoutId=setTimeout(()=>{
      setAuthOpen(true);
    },5000)
    return ()=>{
      clearTimeout(timeoutId);
    }
  }
 },[asPath]);

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
      userNameRef.current.style.display = "block";
    } else {
      inputRef.current.style.display = "block";
      logoRef.current.style.display = "block";
      authButRef.current.style.display = "none";
      hamMenuRef.current.style.display = "none";
      document.body.style.overflow = "scroll";
      userNameRef.current.style.display = "none";
    }
    if (window.innerWidth >= 769) {
      authButRef.current.style.display = "block";
      userNameRef.current.style.display = "block";
    }
    // console.log(window.innerWidth);
  }, [isOpen]);

  return (
    <div className={styles.nav_cont}>
      <div ref={logoRef} className={styles.nav_logo}>
        <Link href="/">
          <a>
            <div className={styles.nav_logoImage}>
              <img
                src="/logoMain.svg"
                alt="college logo "
                className={styles.nav_logo_image}
              />
            </div>
          </a>
        </Link>
      </div>
      <div ref={inputRef} className={styles.nav_input}>
        {/* <input
          type="text"
          name="search"
          id="nav_search"
          placeholder="Search Anything"
        /> */}
      </div>
      <div className={styles.nav_links}>
        <div>
          <Link href="/explore/exams">
            <a>Exam</a>
          </Link>
        </div>
        <div>
          <Link href="/explore/colleges">
            <a>College</a>
          </Link>
        </div>
        <div>
          <Link href="/write-a-review">
            <a>Write a review</a>
          </Link>
        </div>
      </div>
      {auth && auth.isLogin ? (
        <div ref={userNameRef} className={styles.nav_userName}>
          <Link href="/user">
            <a>{user && user.name ? user.name.split(" ")[0] : ""}</a>
          </Link>
        </div>
      ) : (
        <div ref={userNameRef} className={styles.nav_userName}></div>
      )}
      <div ref={authButRef} className={styles.nav_authButon}>
        {auth && auth.isLogin ? (
          <div>
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
        <HamburgerMenu setOpen={setOpen} />
      </div>
      {authOpen ? <Auth handleCross={handleAuthClick} /> : ""}
    </div>
  );
}
