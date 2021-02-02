import React from "react";
import styles from "./Lobby.module.css";
import HomeCard from "../../HomeCard/HomeCard";

const Lobby = ({ type }) => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className={styles.lobbyWrapper}>
      <div>this is lobby of type {type}</div>
      <div className={styles.lobbyCardComp}>
        {data.map((card) => (
          <div className={styles.lobby}>
            <HomeCard title="Jee Mains" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Lobby;
