import React from "react";
import styles from "./HomeSearch.module.css";

const HomeSearch = () => {
  return (
    <div className={styles.hs_cont}>
      <p className={styles.hs_text}>
        We help you find <br /> EVERYTHING!
      </p>
      <input
        type="text"
        name="HSearch"
        id="homesearch"
        placeholder="Search Anything"
      />
    </div>
  );
};
export default HomeSearch;
