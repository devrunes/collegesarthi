import React, { useState, useEffect } from "react";
import styles from "./HomeExams.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import HomeCard from "../HomeCard/HomeCard";

export default function HomeExams() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const arr = [1, 2, 3, 4, 5, 6];
  console.log(window.innerWidth);
  return (
    <section className={styles.homeExamsSection}>
      <div className={styles.homeExamsHeading}>
        <h2>Top Featured Exams</h2>
        <p>Detailed information on every exam in one place, just for you!</p>
      </div>
      {window.innerWidth > 600 ? (
        <div className={styles.homeExamsCardsWrapper}>
          {arr.map((exam) => {
            return (
              <div className={styles.homeCardWrapper} key={exam}>
                <HomeCard />
              </div>
            );
          })}
        </div>
      ) : (
        <Slider {...settings}>
          <div className={styles.homeCardWrapper}>
            <HomeCard />
          </div>
          <div className={styles.homeCardWrapper}>
            <HomeCard />
          </div>
          <div className={styles.homeCardWrapper}>
            <HomeCard />
          </div>
        </Slider>
      )}
    </section>
  );
}
