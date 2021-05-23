import React, { useContext } from "react";
import styles from "./Notifications.module.css";
import { ModelOpenContext } from "../../lib/authContext";

export default function Notifications({notis, papers}) {
  const [model, setModel] = useContext(ModelOpenContext);
  const handleAskAQuestionClick = () => {
    setModel({ open: true, modelNo: 1, modelData: {} });
  };
  return (
    <div>
      <button
        className={styles.notify_buttons}
        onClick={handleAskAQuestionClick}
      >
        <div style={{ paddingRight: "10px" }}>
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0C5.46923 0 0 4.68923 0 10.6154C0 13.4123 1.25446 15.9212 3.23077 17.7978C2.98999 18.4256 2.64894 19.0101 2.22092 19.5286C1.65311 20.2175 1.02577 20.855 0.346154 21.4338C0.197092 21.5534 0.0888218 21.7163 0.0362852 21.9001C-0.0162513 22.0838 -0.0104643 22.2793 0.0528478 22.4597C0.11616 22.64 0.233876 22.7962 0.38975 22.9068C0.545624 23.0173 0.731972 23.0768 0.923077 23.0769C2.96769 23.0769 4.43815 23.0538 5.76923 22.7022C6.96 22.3865 7.98369 21.7255 9.02862 20.7978C9.97938 21.0258 10.9606 21.2308 12 21.2308C18.5308 21.2308 24 16.5415 24 10.6154C24 4.68923 18.5308 0 12 0ZM12 1.84615C17.6538 1.84615 22.1538 5.83385 22.1538 10.6154C22.1538 15.3969 17.6538 19.3846 12 19.3846C10.9948 19.3846 9.95077 19.2111 9 18.9517C8.84796 18.9135 8.68868 18.9146 8.5372 18.955C8.38571 18.9953 8.247 19.0736 8.13415 19.1825C7.09569 20.1785 6.33046 20.6428 5.30769 20.9132C4.83692 21.0378 3.92862 21.0083 3.288 21.0582C3.41723 20.9123 3.53815 20.8348 3.66369 20.6825C4.38923 19.7963 5.05108 18.8594 5.25046 17.7978C5.27793 17.6385 5.26305 17.4747 5.20732 17.3229C5.1516 17.1711 5.05697 17.0366 4.93292 16.9329C2.99908 15.336 1.84615 13.0975 1.84615 10.6154C1.84615 5.83385 6.34615 1.84615 12 1.84615ZM10.2406 5.45169C10.0781 5.48816 9.92854 5.5679 9.80769 5.68246L8.42308 6.98123L9.66369 8.33631L10.7594 7.29785H12.9803L13.8462 8.28V9.636L11.4803 11.2218C11.3538 11.308 11.2508 11.4242 11.1804 11.56C11.11 11.6958 11.0744 11.847 11.0769 12V13.8462H12.9231V12.5188L15.2889 10.9329C15.4155 10.8467 15.5187 10.7304 15.5891 10.5944C15.6595 10.4584 15.695 10.307 15.6923 10.1538V7.93292C15.6911 7.70982 15.6091 7.49471 15.4615 7.32738L14.0769 5.76923C13.9908 5.67009 13.8844 5.59049 13.765 5.53573C13.6457 5.48097 13.516 5.45232 13.3846 5.45169H10.4418C10.375 5.44436 10.3075 5.44436 10.2406 5.45169ZM11.0769 14.7692V16.6154H12.9231V14.7692H11.0769Z"
              fill="white"
            />
          </svg>
        </div>
        Ask a Question
      </button>
      <button className={styles.notify_buttons}>
      <a href={papers}>
        <div style={{ paddingRight: "10px", float: "left" }}>
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.275 6.975L14.025 1.725C13.875 1.575 13.725 1.5 13.5 1.5H6C5.175 1.5 4.5 2.175 4.5 3V21C4.5 21.825 5.175 22.5 6 22.5H18C18.825 22.5 19.5 21.825 19.5 21V7.5C19.5 7.275 19.425 7.125 19.275 6.975ZM13.5 3.3L17.7 7.5H13.5V3.3ZM18 21H6V3H12V7.5C12 8.325 12.675 9 13.5 9H18V21Z"
              fill="white"
            />
            <path d="M7.5 16.5H16.5V18H7.5V16.5Z" fill="white" />
            <path d="M7.5 12H16.5V13.5H7.5V12Z" fill="white" />
          </svg>
        </div>
       Sample Papers</a>
      </button>
      <div>
        <div className={styles.NotificationListHeading}>
          Notifications
          <div style={{ float: "right", paddingRight: "10px" }}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.108 5.43967L8.20134 3.53301C5.00134 5.97301 2.89467 9.73301 2.70801 13.9997H5.37468C5.46912 12.3088 5.94378 10.6609 6.7633 9.17886C7.58282 7.69679 8.7261 6.41868 10.108 5.43967ZM26.628 13.9997H29.2947C29.0947 9.73301 26.988 5.97301 23.8013 3.53301L21.908 5.43967C23.284 6.4235 24.4222 7.70302 25.239 9.18429C26.0557 10.6656 26.5304 12.311 26.628 13.9997ZM24.0013 14.6663C24.0013 10.573 21.8147 7.14634 18.0013 6.23967V5.33301C18.0013 4.22634 17.108 3.33301 16.0013 3.33301C14.8947 3.33301 14.0013 4.22634 14.0013 5.33301V6.23967C10.1747 7.14634 8.00134 10.5597 8.00134 14.6663V21.333L5.33467 23.9997V25.333H26.668V23.9997L24.0013 21.333V14.6663ZM16.0013 29.333C16.188 29.333 16.3613 29.3197 16.5347 29.2797C17.4013 29.093 18.108 28.5063 18.4547 27.7063C18.588 27.3863 18.6547 27.0397 18.6547 26.6663H13.3213C13.3347 28.133 14.5213 29.333 16.0013 29.333Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className={styles.NotificationListData}>
          <ul>
            {
              notis.map(note => (
              <li>{note}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
}
