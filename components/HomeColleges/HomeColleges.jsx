import React from "react";
import styles from "./HomeColleges.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CollegeCard from "../collegeCard/CollegeCard";

export default function HomeColleges({ data }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const arr = [1, 2, 3, 4, 5, 6];
  // console.log(window.innerWidth);
  return (
    <section className={styles.homeCollegesSection}>
      <div className={styles.homeCollegesHeading}>
        <h2>Top Featured Colleges</h2>
        <p>Detailed information on every college in one place, just for you!</p>
      </div>
      {window.innerWidth > 600 ? (
        <div>
          <div className={styles.homeCollegesCardsWrapper}>
            {data.map((card, idx) => (
              <div key={idx} className={styles.homeCardWrapper}>
                <CollegeCard card={card} />
              </div>
            ))}
          </div>
          <div className={styles.homeCollegesBtnWrapper}></div>
        </div>
      ) : (
        <Slider {...settings}>
          {data.map((card, idx) => (
            <div key={idx} className={styles.homeCardWrapper}>
              <CollegeCard card={card} />
            </div>
          ))}
        </Slider>
      )}
    </section>
  );
}
