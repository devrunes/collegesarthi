import React from "react";
import MissUpdate from "../MissUpdate/MissUpdate";
import styles from "./Footer.module.css";
export default function Footer() {
  const explore = [1, 2, 3, 4, 5];
  const exams = [1, 2, 3, 4, 5];
  const college = [1, 2, 3, 4, 5];
  return (
    <div>
      <section>
        <MissUpdate
          themeColor="#333333"
          heading="Never miss an Update!"
          headingSup="You focus on your studies , we take care of rest"
        />
        <div className={styles.mu_subsec}>
          <input
            placeholder="Search anything...."
            type="text"
            name="search"
            id="search"
            className={styles.mu_search}
          />
          <div className={styles.Footer_row}>
            <div className="col-1">
              <h3>Explore All</h3>
              {explore.map((i) => (
                <p key={i}>Engineering</p>
              ))}
            </div>
            <div className="col-2">
              <h3>Top Exams</h3>
              {explore.map((i) => (
                <p key={i}>Engineering</p>
              ))}
            </div>
            <div className="col-3">
              <h3>Top Featured Colleges</h3>
              {explore.map((i) => (
                <p key={i}>Engineering</p>
              ))}
            </div>
            <div className={styles.Footer_col_emo}>
              <ul>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0ZM20 2.89767C24.3573 2.89767 28.3339 4.52713 31.3538 7.20997C29.1351 10.137 25.7631 12.0855 22.386 13.4055C20.5445 10.0374 18.2777 6.48633 15.9701 3.37513C17.2623 3.06303 18.6119 2.89767 20 2.89767ZM12.7242 4.51873C14.954 7.85287 17.1127 10.9463 19.0881 14.4478C14.0965 15.7409 8.4583 16.5165 3.24973 16.5299C4.34793 11.2006 7.92623 6.77773 12.7242 4.51873ZM33.251 9.18693C35.6363 12.1066 37.0749 15.8292 37.1011 19.8873C33.1456 19.1081 29.2115 18.9026 25.2052 19.306C24.7539 18.183 24.2094 17.1165 23.6867 15.9663C27.1403 14.5734 30.8314 12.1893 33.251 9.18693ZM20.4762 17.0935C20.9048 18.0047 21.4006 18.9699 21.8655 19.9569C16.2955 22.4131 10.3717 25.696 7.29483 31.4488C4.56153 28.4175 2.89767 24.403 2.89767 20C2.89767 19.8328 2.9005 19.6658 2.90527 19.4997C8.87147 19.4708 14.726 18.7241 20.4762 17.0935ZM29.5137 21.7566C32.0005 21.7488 34.5678 22.0962 36.8896 22.7064C36.1302 27.4834 33.3924 31.6012 29.5428 34.1945C28.6244 30.0193 27.7494 26.0245 26.2032 21.9959C27.2696 21.8369 28.3833 21.7601 29.5137 21.7566ZM36.9782 22.0669C36.9666 22.1637 36.9548 22.2606 36.9415 22.3569C36.9548 22.2604 36.9665 22.1639 36.9782 22.0669ZM23.037 22.7773C24.6143 26.8494 25.8522 31.3593 26.6806 35.7485C24.6281 36.6203 22.3706 37.1023 20 37.1023C16.0445 37.1023 12.4033 35.7589 9.5061 33.5043C12.6033 28.4782 17.4004 24.6766 23.037 22.7773Z"
                    fill="white"
                  />
                </svg>
              </ul>
              <ul>
                <svg
                  width="20"
                  height="42"
                  viewBox="0 0 20 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.10554 42V22.2924H0V15.1967H5.10554V9.13605C5.10554 4.37354 8.1214 0 15.0706 0C17.8842 0 19.9647 0.27531 19.9647 0.27531L19.8008 6.90148C19.8008 6.90148 17.679 6.8804 15.3636 6.8804C12.8576 6.8804 12.4561 8.05913 12.4561 10.0155V15.1967H20L19.6718 22.2924H12.4561V42H5.10554Z"
                    fill="white"
                  />
                </svg>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
