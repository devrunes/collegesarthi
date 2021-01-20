import React from "react";
import styles from "./MissUpdate.module.css";

export default function MissUpdate() {
  return (
    <section className={styles.missUpdateSection}>
      <div className={styles.MissUpdateHeading}>
        <svg
          width="94"
          height="92"
          viewBox="0 0 94 92"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.MissUpdateSVG}
        >
          <path
            d="M26.3741 8.03984L19.7008 1.3665C8.50079 9.90651 1.12745 23.0665 0.474121 37.9998H9.80746C10.138 32.0816 11.7993 26.3142 14.6676 21.127C17.536 15.9398 21.5374 11.4664 26.3741 8.03984ZM84.1941 37.9998H93.5275C92.8275 23.0665 85.4541 9.90651 74.3008 1.3665L67.6741 8.03984C72.4901 11.4832 76.4737 15.9616 79.3325 21.146C82.1912 26.3304 83.8524 32.0894 84.1941 37.9998ZM75.0008 40.3332C75.0008 26.0065 67.3475 14.0132 54.0008 10.8398V7.6665C54.0008 3.79317 50.8741 0.666504 47.0008 0.666504C43.1275 0.666504 40.0008 3.79317 40.0008 7.6665V10.8398C26.6075 14.0132 19.0008 25.9598 19.0008 40.3332V63.6665L9.66746 72.9998V77.6665H84.3341V72.9998L75.0008 63.6665V40.3332ZM47.0008 91.6665C47.6541 91.6665 48.2608 91.6199 48.8675 91.4799C51.9008 90.8265 54.3741 88.7732 55.5875 85.9732C56.0541 84.8532 56.2875 83.6399 56.2875 82.3332H37.6208C37.6675 87.4665 41.8208 91.6665 47.0008 91.6665Z"
            fill="white"
          />
        </svg>
        <div className={styles.MissUpdateHeadingText}>
          <h2 className={styles.missHeading}>Never miss an Update!</h2>
          <h3> You focus on your studies , we take care of rest</h3>
        </div>
      </div>
      <div className={styles.MissUpdateForm}>
        <div>
          <p>Name</p>
          <input type="text" name="Name" id="Name" />
        </div>
        <div>
          <p>Mobile</p>
          <input type="text" name="Mobile" id="Mobile" />
        </div>
        <div>
          <p>Email</p>
          <input type="text" name="Email" id="Email" />
        </div>
        <div>
          <p>Course</p>
          <input type="text" name="Course" id="Course" />
        </div>
      </div>
      <button className={styles.MissUpdateButton}>Yes, I'm in</button>
    </section>
  );
}
