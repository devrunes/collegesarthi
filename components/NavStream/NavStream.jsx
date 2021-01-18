import React from "react";
import styles from "./NavStream.module.css";

const NavStream = () => {
  return (
    <div className={styles.navSt_cont}>
      <div>Engineering</div>
      <div>Medical</div>
      <div>Management</div>
      <div>Law</div>
      <div>Design</div>
      <div>See More</div>
    </div>
  );
};
export default NavStream;
