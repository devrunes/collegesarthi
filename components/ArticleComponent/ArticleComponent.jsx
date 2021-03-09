import React, { useEffect, useState, useRef, useContext } from "react";
// import { AuthOpenContext } from "../../lib/authContext";
import { useRouter } from "next/router";
import { useAuth } from "../../lib/auth";
import NavStream from "../NavStream/NavStream";
import styles from "./ArticleComponent.module.css";
import SubHeadingsExam from "../SubHeadingsExam/SubHeadingsExam";
import ArticleContent from "../ArticleContent/ArticleContent";
import Notifications from "../Notifications/Notifications";
import Head from "next/head";

const ArticleComponent = (props) => {
  const { doc} = props;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  // const Ref = useRef(null);
  const router = useRouter();
  const query = router.query;
  const { auth } = useAuth();

  useEffect(() => {
    if (doc) {
      setLoading(false);
      setData(doc);
    }
  }, [props.doc]);
  // console.log(router)
  const handleAuthClick = () => {
    setAuthOpen(!authOpen);
  };
  // console.log(props, "hadiaslkjm");
  return (
    <div>
      <Head>
        <title>{data.title}</title>
        {/* {data.ldscripts} */}
        {/* {map} */}
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: data.ldscripts }}
        /> */}
        <meta name="desc" content={data.metaDesc} />
        <meta name="title" content={data.title} />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <link rel="canonical" href={`www.collegesarthi.com${query}`} />
      </Head>
      <div>
        {loading ? (
          <div> Loading.....</div>
        ) : (
          <div>
            {/* <JsxParser jsx={data.ldscripts} /> */}

            <div className={styles.NavDisplay}>
              <NavStream />
            </div>
            <div className={styles.ExamHeadingContainer}>
              {/* <div ref={Ref}></div>  */}
              <div className={styles.ExamHeading}>{data.title}</div>
              {auth && auth.isLogin ? (
          <button className={styles.ExamGetUpdateButton} style={{display:"none"}}>
          <span style={{ paddingRight: "10px", marginTop: "2%" }}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.59 22L15 16.41V7H17V15.58L22 20.59L20.59 22Z"
                fill="#4A788D"
              />
              <path
                d="M16 2C14.135 2.00026 12.2889 2.37478 10.5712 3.10136C8.85354 3.82795 7.29911 4.89183 6 6.23V2H4V10H12V8H7.08C8.95603 5.91529 11.503 4.55353 14.2785 4.1512C17.0541 3.74888 19.8828 4.33142 22.2736 5.79764C24.6643 7.26386 26.466 9.52115 27.3657 12.1775C28.2654 14.8338 28.2063 17.7213 27.1987 20.3386C26.191 22.9559 24.2985 25.1375 21.8497 26.5047C19.401 27.8719 16.5507 28.3381 13.794 27.8226C11.0372 27.307 8.54814 25.8422 6.759 23.6824C4.96985 21.5227 3.99367 18.8045 4 16H2C2 18.7689 2.82109 21.4757 4.35943 23.778C5.89777 26.0803 8.08427 27.8747 10.6424 28.9343C13.2006 29.9939 16.0155 30.2712 18.7313 29.731C21.447 29.1908 23.9416 27.8574 25.8995 25.8995C27.8574 23.9416 29.1908 21.447 29.731 18.7313C30.2712 16.0155 29.9939 13.2006 28.9343 10.6424C27.8747 8.08427 26.0803 5.89777 23.778 4.35943C21.4757 2.82109 18.7689 2 16 2Z"
                fill="#4A788D"
              />
            </svg>
          </span>
          Get Updates
        </button>
        ) : (
          <button className={styles.ExamGetUpdateButton} onClick={handleAuthClick}>
                <span style={{ paddingRight: "10px", marginTop: "2%" }}>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.59 22L15 16.41V7H17V15.58L22 20.59L20.59 22Z"
                      fill="#4A788D"
                    />
                    <path
                      d="M16 2C14.135 2.00026 12.2889 2.37478 10.5712 3.10136C8.85354 3.82795 7.29911 4.89183 6 6.23V2H4V10H12V8H7.08C8.95603 5.91529 11.503 4.55353 14.2785 4.1512C17.0541 3.74888 19.8828 4.33142 22.2736 5.79764C24.6643 7.26386 26.466 9.52115 27.3657 12.1775C28.2654 14.8338 28.2063 17.7213 27.1987 20.3386C26.191 22.9559 24.2985 25.1375 21.8497 26.5047C19.401 27.8719 16.5507 28.3381 13.794 27.8226C11.0372 27.307 8.54814 25.8422 6.759 23.6824C4.96985 21.5227 3.99367 18.8045 4 16H2C2 18.7689 2.82109 21.4757 4.35943 23.778C5.89777 26.0803 8.08427 27.8747 10.6424 28.9343C13.2006 29.9939 16.0155 30.2712 18.7313 29.731C21.447 29.1908 23.9416 27.8574 25.8995 25.8995C27.8574 23.9416 29.1908 21.447 29.731 18.7313C30.2712 16.0155 29.9939 13.2006 28.9343 10.6424C27.8747 8.08427 26.0803 5.89777 23.778 4.35943C21.4757 2.82109 18.7689 2 16 2Z"
                      fill="#4A788D"
                    />
                  </svg>
                </span>
                Get Updates
              </button>
        )}
            </div>
            <div className={styles.ExamContentContainer}>
              <div className={styles.ExamSubHeadings}>
                <SubHeadingsExam data={data.subheadings} query={query} />
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
    </div>
  );
};

export default ArticleComponent;
