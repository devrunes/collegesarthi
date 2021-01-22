import React from "react";
import styles from "./HomeColleges.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import HomeCard from "../HomeCard/HomeCard";

export default function HomeColleges() {
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
    <section className={styles.homeCollegesSection}>
      <div className={styles.homeCollegesHeading}>
        <h2>Top Featured Colleges</h2>
        <p>Detailed information on every college in one place, just for you!</p>
      </div>
      {window.innerWidth > 600 ? (
        <div>
          <div className={styles.homeCollegesCardsWrapper}>
            {arr.map((exam) => {
              return (
                <div className={styles.homeCardWrapper} key={exam}>
                  <HomeCard title="Jaypee" />
                </div>
              );
            })}
          </div>
          <div className={styles.homeCollegesBtnWrapper}>
            <button>See all</button>
          </div>
        </div>
      ) : (
        <Slider {...settings}>
          <div className={styles.homeCardWrapper}>
            <HomeCard title="Jaypee" />
          </div>
          <div className={styles.homeCardWrapper}>
            <HomeCard title="Jaypee" />
          </div>
          <div className={styles.homeCardWrapper}>
            <HomeCard title="Jaypee" />
          </div>
        </Slider>
      )}
    </section>
  );
}
