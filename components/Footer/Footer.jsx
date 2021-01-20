import React from "react";
import MissUpdate from "../MissUpdate/MissUpdate";
import styles from './Footer.module.css'
export default function Footer() {
  return (
    <div>
      <section>
        <MissUpdate themeColor="#333333"  heading="Never miss an Update!" headingSup="You focus on your studies , we take care of rest" />
        <div className={styles.mu_subsec}>
        <input placeholder="Search anything...." type="text" name="search" id="search" className={styles.mu_search} />
        
        </div>
      </section>
    </div>
  );
}
