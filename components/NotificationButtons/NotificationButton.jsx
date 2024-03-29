import React, { useContext } from "react";
import styles from "./NotificationButton.module.css";
import { useAuth } from "../../lib/auth";
import { AuthOpenContext, ModelOpenContext } from "../../lib/authContext";

export default function NotificationButton(props) {
  const { auth } = useAuth();
  const [authOpen, setAuthOpen] = useContext(AuthOpenContext);
  const [model, setModel] = useContext(ModelOpenContext);
  
  const handleAuthClick = () => {
    setAuthOpen(!authOpen);
  };
  const handleAskAQuestionClick = () => {
  
    if((Object.entries(auth).length <= 0 && auth.constructor === Object) || auth===undefined){
      setAuthOpen(!authOpen)
    }
    else{
    setModel({ open: true, modelNo: 1, modelData: {} });
    }
  };
  return (
    <div className={styles.ButtonContainer}>
      <button
        className={styles.notify_buttons}
        onClick={handleAskAQuestionClick}
        className={styles.ButtonG}
      >
        <div className={styles.SVG}>
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
      {auth && auth.isLogin ? (
        <button className={styles.ButtonB} style={{ display: "none" }}>
          <div className={styles.SVG}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.9425 16.5L11.75 12.3075V5.25H13.25V11.685L17 15.4425L15.9425 16.5Z"
                fill="white"
              />
              <path
                d="M12.5 1.5C11.1012 1.5002 9.71669 1.78108 8.42842 2.32602C7.14015 2.87096 5.97433 3.66887 5 4.6725V1.5H3.5V7.5H9.5V6H5.81C7.21702 4.43647 9.12724 3.41515 11.2089 3.1134C13.2905 2.81166 15.4121 3.24856 17.2052 4.34823C18.9983 5.4479 20.3495 7.14086 21.0243 9.1331C21.6991 11.1253 21.6547 13.291 20.899 15.2539C20.1433 17.2169 18.7239 18.8531 16.8873 19.8785C15.0507 20.9039 12.9131 21.2536 10.8455 20.8669C8.77793 20.4803 6.91111 19.3816 5.56925 17.7618C4.22739 16.142 3.49525 14.1034 3.5 12H2C2 14.0767 2.61581 16.1068 3.76957 17.8335C4.92332 19.5602 6.5632 20.906 8.48182 21.7007C10.4004 22.4955 12.5116 22.7034 14.5484 22.2982C16.5852 21.8931 18.4562 20.8931 19.9246 19.4246C21.3931 17.9562 22.3931 16.0852 22.7982 14.0484C23.2034 12.0116 22.9955 9.90045 22.2007 7.98182C21.406 6.0632 20.0602 4.42332 18.3335 3.26957C16.6068 2.11581 14.5767 1.5 12.5 1.5Z"
                fill="white"
              />
            </svg>
          </div>
          Get Updates
        </button>
      ) : (
        <button className={styles.ButtonB} onClick={handleAuthClick}>
          <div className={styles.SVG}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.9425 16.5L11.75 12.3075V5.25H13.25V11.685L17 15.4425L15.9425 16.5Z"
                fill="white"
              />
              <path
                d="M12.5 1.5C11.1012 1.5002 9.71669 1.78108 8.42842 2.32602C7.14015 2.87096 5.97433 3.66887 5 4.6725V1.5H3.5V7.5H9.5V6H5.81C7.21702 4.43647 9.12724 3.41515 11.2089 3.1134C13.2905 2.81166 15.4121 3.24856 17.2052 4.34823C18.9983 5.4479 20.3495 7.14086 21.0243 9.1331C21.6991 11.1253 21.6547 13.291 20.899 15.2539C20.1433 17.2169 18.7239 18.8531 16.8873 19.8785C15.0507 20.9039 12.9131 21.2536 10.8455 20.8669C8.77793 20.4803 6.91111 19.3816 5.56925 17.7618C4.22739 16.142 3.49525 14.1034 3.5 12H2C2 14.0767 2.61581 16.1068 3.76957 17.8335C4.92332 19.5602 6.5632 20.906 8.48182 21.7007C10.4004 22.4955 12.5116 22.7034 14.5484 22.2982C16.5852 21.8931 18.4562 20.8931 19.9246 19.4246C21.3931 17.9562 22.3931 16.0852 22.7982 14.0484C23.2034 12.0116 22.9955 9.90045 22.2007 7.98182C21.406 6.0632 20.0602 4.42332 18.3335 3.26957C16.6068 2.11581 14.5767 1.5 12.5 1.5Z"
                fill="white"
              />
            </svg>
          </div>
          Get Updates
        </button>
      )}
      <a href={props.samplePapers}>
      <button className={styles.ButtonG}>
        <div className={styles.SVG}>
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
        Sample Papers
      </button>
      </a>
    </div>
  );
}
