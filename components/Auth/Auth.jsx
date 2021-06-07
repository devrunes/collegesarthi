import React, { useState, useRef, useEffect } from "react";
import styles from "./Auth.module.css";
import Image from "next/image";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import { useRouter } from "next/router";
const Auth = ({ handleCross }) => {
  const [current, setCurrent] = useState(1);
  const p1Ref = useRef(null);
  const parentRef = useRef(null);

  const handleCurChange = () => {
    if (current === 1) {
      setCurrent(0);
    } else {
      setCurrent(1);
    }
  };
  const handleBackDropClick = (e) => {
    // console.log(parentRef.current, e.target);
    if (parentRef.current === e.target) {
      handleCross();
    }
  };
  useEffect(() => {
    if (current === 0) {
      p1Ref.current.style.backgroundColor = "white";
      p1Ref.current.style.color = "#4F4F4F";
    } else {
      p1Ref.current.style.backgroundColor = "#333366";
      p1Ref.current.style.color = "white";
    }
  }, [current]);

  //geting current url
  const { asPath } = useRouter();
  const writeAReviewPath = asPath === "/write-a-review"; //checking current url is equals to '/write-review'

  return (
    <div
      ref={parentRef}
      className={styles.auth_wrapper}
      onClick={!writeAReviewPath ? handleBackDropClick : () => {}}
    >
      <div className={styles.auth_cont}>
        <div className={styles.auth_cont_p2}>
          {current === 0 ? (
            <Login
              screenSwitchHandler={handleCurChange}
              hideCross={!!writeAReviewPath}
              handleCrossClick={!writeAReviewPath ? handleCross : () => {}}
            />
          ) : (
            <Signup
              screenSwitchHandler={handleCurChange}
              hideCross={!!writeAReviewPath}
              handleCrossClick={!writeAReviewPath ? handleCross : () => {}}
            />
          )}
        </div>
        <div ref={p1Ref} className={styles.auth_cont_p1}>
          <h2>why Join Us?</h2>
          <div className={styles.auth_cont_items}>
            <div className={styles.auth_tick_image}>
              <Image src="/tick.svg" alt="tick" layout="fill" />
            </div>
            <p>Never Miss an Update</p>
          </div>
          <div className={styles.auth_cont_items}>
            <div className={styles.auth_tick_image}>
              <Image src="/tick.svg" alt="tick" layout="fill" />
            </div>
            <p>Get All the Details regarding:</p>
          </div>
          <ul>
            <li>Exams</li>
            <li>Colleges</li>
            <li>Courses</li>
          </ul>
          <div className={styles.auth_cont_items}>
            <div className={styles.auth_tick_image}>
              <Image src="/tick.svg" alt="tick" layout="fill" />
            </div>
            <p>Stay Care Free</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auth;
