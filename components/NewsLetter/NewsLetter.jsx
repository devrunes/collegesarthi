import React, { useState } from "react";
import styles from "./NewsLetter.module.scss";
import axios from "axios";

export default function NewsLetter() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [number, setNumber] = useState(0);
  const [numberError, setNumberError] = useState("");
  const [message, setMessage] = useState("");
  const [course, setCourse] = useState("Btech");

  const handleSaveBtn = async () => {
    let isValid = true;
    if (name.length < 4) {
      setNameError("Name should be of atleast 4 characters");
      isValid = false;
    } else {
      setNameError("");
    }
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
      setEmailError("Enter a valid email address");
      isValid = false;
    } else {
      setEmailError("");
    }
    if (number.length !== 10) {
      setNumberError("Enter a valid mobile number of 10 numbers");
      isValid = false;
    } else {
      setNumberError("");
    }
    if (!isValid) {
      return;
    } else {
      const subscribeUser = await axios.post("/api/subscribeUser", {
        email,
        name,
        course,
        number,
      });

      setMessage(subscribeUser.data.message);
    }
  };
  return (
    <div className={styles.newsletter}>
      <div className={styles.topbar}>
        <img src="/newsletter.svg" alt="subscribe to newsletter" />
        <div className={styles.headingWrapper}>
          <div className={styles.heading}>Subscribe to our newsletter</div>
          <div className={styles.benefitsWrapper}>
            <div className={styles.benefit}>College Notifications</div>
            <div className={styles.benefit}>Exam Notifications</div>
            <div className={styles.benefit}>Important Dates</div>
            <div className={styles.benefit}>News Update</div>
          </div>
        </div>
      </div>
      <div className={styles.formWrapper}>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={styles.input}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <p className={styles.error}>{nameError}</p>
        </div>
        <div className={styles.inputWrapper}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.input}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <p className={styles.error}>{emailError}</p>
        </div>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            name="number"
            placeholder="Mobile Number"
            className={styles.input}
            value={number.toString()==='0' ||  number.toString()==='NaN' ?"":number.toString()}
            onChange={(e) => {
              setNumber(parseInt(e.target.value));
            }}
          />
          <p className={styles.error}>{numberError}</p>
        </div>
        <div className={styles.inputWrapper}>
          <select
            className={styles.input}
            value={course}
            onChange={(e) => {
              setCourse(e.target.value);
            }}
          >
            <option value="Btech">Btech</option>
            <option value="MBA">MBA</option>
          </select>
        </div>
        <button className={styles.submitBtn} onClick={handleSaveBtn}>
          Submit
        </button>
      </div>
      <p>{message}</p>
    </div>
  );
}
