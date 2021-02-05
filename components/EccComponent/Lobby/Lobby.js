import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Lobby.module.css";
import HomeCard from "../../HomeCard/HomeCard";

const FilterItem = () => {
  return (
    <Link
      href={{
        pathname: "/exams",
        query: {
          stream: "engineering",
        },
      }}
    >
      <a>
        <div className={styles.lobbyFilItem}>
          <span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="7.5" fill="white" stroke="#4F4F4F" />
            </svg>
          </span>
          Engineering
        </div>
      </a>
    </Link>
  );
};

const Lobby = ({ type }) => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className={styles.lobbyWrapper}>
      <div className={styles.lobbyFilterWrapper}>
        <div className={styles.lobbyFilTop}>
          <div>Filters</div>
          <div>Clear All</div>
        </div>
        <div className={styles.lobbyDropdownWrapper}>
          <div className={styles.lobbyDropdownType}>
            Stream
            <div className={styles.lobbyFilArr}>
              <Image src="/filterArrow.svg" alt=">" layout="fill" />
            </div>
          </div>
          <div>
            {data.map((filItem) => (
              <FilterItem />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.lobbyCardComp}>
        {data.map((card) => (
          <div className={styles.lobbyCard}>
            <HomeCard title="Jee Mains" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Lobby;
