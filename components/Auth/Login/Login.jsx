import React, { useEffect, useState, useContext } from "react";
import styles from "./Login.module.css";
import Image from "next/image";
import { useAuth } from "../../../lib/auth";
import { AuthOpenContext } from "../../../lib/authContext";

const Login = ({ screenSwitchHandler, handleCrossClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signInWithEmailAndPassword } = useAuth();
  const [error, setError] = useState({});

  const [authOpen, setAuthOpen] = useContext(AuthOpenContext);

  const handleLogin = async () => {
    setError({});

    let errors = {};

    if (email === "") {
      errors.email = "Required field";
    }

    if (password === "") {
      errors.password = "Required field";
    }

    if (Object.keys(errors).length > 0) {
      setError(errors);
    } else {
      try {
        await signInWithEmailAndPassword(email, password);
        setAuthOpen(!authOpen);
      } catch (err) {
        setError({
          ...error,
          auth: err.message,
        });
        // console.log(err);
      }
    }
  };

  return (
    <div className={styles.login_cont}>
      <div className={styles.login_head}>
        <h2>Login</h2>
        <p>Welcome back!</p>
      </div>
      <div className={styles.login_form}>
        <div className={styles.login_form_sec}>
          <div className={styles.login_imgsec}>
            <div className={styles.login_img}>
              <Image src="/mail.svg" alt="em" layout="fill" />
            </div>
            <p>Email</p>
          </div>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          {error.email && error.email !== "" ? (
            <p className={styles.authError}>{error.email}</p>
          ) : (
            <></>
          )}
        </div>
        <div className={styles.login_form_sec}>
          <div className={styles.login_imgsec}>
            <div className={styles.login_img}>
              <Image src="/user.svg" alt="em" layout="fill" />
            </div>
            <p>Password</p>
          </div>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          {error.password && error.password !== "" ? (
            <p className={styles.authError}>{error.password}</p>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className={styles.login_button_cont}>
        <button className={styles.login_button} onClick={handleLogin}>
          Login
        </button>
        <p onClick={screenSwitchHandler} className={styles.linkSup}>
          New User? Click Here to Register!
        </p>
      </div>
      {error.auth && error.auth !== "" ? (
        <p className={styles.authError}>{error.auth}</p>
      ) : (
        <></>
      )}
      <div className={styles.auth_crossButton} onClick={handleCrossClick}>
        <svg
          id="auth_crossButton"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.60005 1.19274L20 15.5927L34.4001 1.23637C34.6836 0.947889 35.0239 0.721375 35.3994 0.571154C35.775 0.420934 36.1776 0.350274 36.5819 0.363644C37.3751 0.414979 38.1226 0.753278 38.6847 1.31537C39.2468 1.87747 39.5851 2.62493 39.6364 3.41819C39.6404 3.80822 39.565 4.19499 39.415 4.55503C39.265 4.91508 39.0434 5.2409 38.7637 5.51274L24.32 20L38.7637 34.4873C39.331 35.0371 39.6451 35.7964 39.6364 36.5818C39.5851 37.3751 39.2468 38.1226 38.6847 38.6846C38.1226 39.2467 37.3751 39.585 36.5819 39.6364C36.1776 39.6497 35.775 39.5791 35.3994 39.4289C35.0239 39.2786 34.6836 39.0521 34.4001 38.7636L20 24.4073L5.64369 38.7636C5.36017 39.0521 5.01987 39.2786 4.64432 39.4289C4.26877 39.5791 3.86613 39.6497 3.46187 39.6364C2.65381 39.5943 1.88998 39.2544 1.31782 38.6822C0.745664 38.1101 0.405747 37.3462 0.363686 36.5382C0.359738 36.1482 0.435058 35.7614 0.585077 35.4013C0.735097 35.0413 0.956689 34.7155 1.23641 34.4436L15.6801 20L1.19278 5.51274C0.920929 5.23723 0.707401 4.90976 0.56495 4.54989C0.422499 4.19001 0.354048 3.80511 0.363686 3.41819C0.415022 2.62493 0.75332 1.87747 1.31541 1.31537C1.87751 0.753278 2.62497 0.414979 3.41823 0.363644C3.81935 0.344592 4.22009 0.408377 4.59546 0.551021C4.97084 0.693664 5.31281 0.912109 5.60005 1.19274Z"
            fill="#BDBDBD"
          />
        </svg>
      </div>
    </div>
  );
};
export default Login;
