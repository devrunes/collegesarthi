import React from "react";
import styles from "./ArticleContent.module.css";
import JsxParser from "react-jsx-parser";
import Link from "next/link";
import NotificationButton from "../NotificationButtons/NotificationButton"

export default function ArticleContent(props) {
  const { data } = props;
  console.log(data);
  let doc =
    '<ul><li><Link href="#who-conducts-the-jee-main-exam"><a>hello</a></Link></li><li><Link href="#who-conducts-the-jee-main-exam"><a>hello</a></Link></li></ul><div>yoyooy</div>';
  return (
    <div>
      <JsxParser
        bindings={{
          ContentHeadings: styles.ContentHeadings,
          ContentPara: styles.ContentPara,
          ContentH2B: styles.ContentH2B,
          ContentTableHeading: styles.ContentTableHeading,
          ContentTableData: styles.ContentTableData,
          ContentListContainer: styles.ContentListContainer,
          ContentListLink: styles.ContentListLink
        }}
        components={{ Link, NotificationButton }}
        jsx={data}
      />
      {/* <div className={styles.OverViewCont}>
        <div className={styles.OverView}>Overview</div>
        <div className={styles.Share}>share</div>
      </div>
      <div className={styles.ContentPara}>{data}</div>
      <div className={styles.ContentH2B}>
        The table below highlights some of the important JEE Main Dates of 2021:{" "}
      </div>
      <table>
        <tr>
          <th className={styles.ContentTableHeading}>Basis</th>
          <th className={styles.ContentTableHeading}>
            JEE Main Eligibility Criterai 2021
          </th>
        </tr>
        <tr>
          <td className={styles.ContentTableData}>
            JEE Main Age Limit And Qualification
          </td>
          <td className={styles.ContentTableData}>
            <ul>
              <li>NOt more than 20</li>
              <li>
                {" "}
                Must have cleared class 12th or equivalent in 2019/2020/2021
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td className={styles.ContentTableData}>
            JEE Main Age Limit And Qualification
          </td>
          <td className={styles.ContentTableData}>
            <ul>
              <li>NOt more than 20</li>
              <li>
                {" "}
                Must have cleared class 12th or equivalent in 2019/2020/2021
              </li>
            </ul>
          </td>
        </tr>
      </table>
      <div className={styles.ContentListContainer}>
        <ul>
          <li>Visit the official site of JEE Main</li>
          <li>Click on ‘JEE Main 2021 Application Form’</li>
          <li>Register for the exam with the right credentials</li>
          <li>
            Fill in all the essential details asked in the JEE Main Application
            Form
          </li>
          <li>Upload the necessary documents as stated there </li>
          <li>
            Pay the Application fee via Credit Card/ Debit Card/ Net
            Banking/Paytm/UPI
          </li>
        </ul>
      </div>
      <div className={styles.ContentPara}> oyoyoy</div> */}
    </div>
  );
}
{
  /*       */
}
