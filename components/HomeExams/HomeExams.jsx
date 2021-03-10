import React from "react";
import styles from "./HomeExams.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import HomeCard from "../HomeCard/HomeCard";

export default function HomeExams({ data }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className={styles.homeExamsSection}>
      <div className={styles.homeExamsHeading}>
        <h2>Top Featured Exams</h2>
        <p>Detailed information on every exam in one place, just for you!</p>
      </div>
      {window.innerWidth > 600 ? (
        <div>
          <div className={styles.homeExamsCardsWrapper}>
            {data.map((exam) => {
              console.log(exam);
              return (
                <div className={styles.homeCardWrapper} key={exam}>
                  <HomeCard card={exam} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <Slider {...settings}>
          {data.map((exam) => {
            console.log(exam);
            return (
              <div className={styles.homeCardWrapper} key={exam}>
                <HomeCard card={exam} />
              </div>
            );
          })}
        </Slider>
      )}
    </section>
  );
}
