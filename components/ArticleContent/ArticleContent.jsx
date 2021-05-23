import React, { useEffect } from "react";
import styles from "./ArticleContent.module.css";
import JsxParser from "react-jsx-parser";
import Link from "next/link";
import NotificationButton from "../NotificationButtons/NotificationButton";
import Photo from "../Photo/Photo";

export default function ArticleContent(props) {
  const { data, papers } = props;
  // console.log(data);
  useEffect(() => {
    if (data && location.hash) {
      //remove # from the string
      let elId = location.hash.replace("#", "");
      //locate the anchored element on the page by its ID property
      let scrollToEl = document.getElementById(elId);
      // console.debug(location.hash, elId, scrollToEl, "scroll");
      //scroll to the anchored element
      if (scrollToEl) {
        scrollToEl.scrollIntoView(true);
      }
    }
  });
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
          ContentListLink: styles.ContentListLink,
          TableContainer: styles.TableContainer,
          paperUrl: papers,
        }}
        components={{ Link, NotificationButton, Photo }}
        jsx={data}
      />
    </div>
  );
}
{
  /*       */
}
