import React from "react";
import { useAuth } from "../../lib/auth";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { auth, signOut, signInWithGoogle } = useAuth();

  return (
    <div className={styles.nav_cont}>
      <div className={styles.nav_logo}>LOGO</div>
      <div className={styles.nav_input}>
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
            className={styles.nav_authButon}
            // onClick={() => signInWithGoogle()}
          >
            Login/Signup
          </button>
        )}
      </div>
    </div>
  );
}
