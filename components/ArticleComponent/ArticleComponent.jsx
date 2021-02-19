import React, { useEffect, useState, useRef } from "react";
import NavStream from "../NavStream/NavStream";
import styles from "./ArticleComponent.module.css";
import SubHeadingsExam from "../SubHeadingsExam/SubHeadingsExam";
import ArticleContent from "../ArticleContent/ArticleContent";
import Notifications from "../Notifications/Notifications";
import ReactHtmlParser from "react-html-parser";

const ArticleComponent = (props) => {
  const { doc } = props;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const Ref = useRef(null)
  useEffect(() => {
    if (doc) {
      setLoading(false);
      setData(doc);
      console.log(data);
    }
  }, [props.doc]);

  useEffect(() => {
    if(Ref.current !==null){
    Ref.current.innerHTML = "<div className={styles.ExamHeading}> Chintu Chutiya</div>"
  }},[Ref.current])
  console.log(Ref.current)
  return (
    <div>
      {loading ? (
        <div> Loading</div>
      ) : (
        <div>
          <NavStream />
          <div className={styles.ExamHeadingContainer}>
            <div ref={Ref}></div> 
            <div className={styles.ExamHeading}>{data.title}</div>
            <button className={styles.ExamGetUpdateButton}>Get Updates</button>
          </div>
          <div className={styles.ExamContentContainer}>
            <div className={styles.ExamSubHeadings}>
              <SubHeadingsExam data={data.subheadings} />
            </div>
            <div className={styles.ArticleContent}>
              <ArticleContent data={data.content} />
            </div>
            <div className={styles.Notifications}>
              <Notifications />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleComponent;
