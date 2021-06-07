import React from "react";
import EccComponent from "../../../../components/EccComponent/EccComponent";
import { db } from "../../../../lib/firebase-admin";

export async function getServerSideProps(context) {
  const { query } = context;

  if (query.type !== "exams" && query.type !== "colleges") {
    return {
      notFound: true,
    };
  }

  let filters = {
    stream: query.filters
      ? query.filters[0]
        ? query.filters[0]
        : "all-stream"
      : "all-stream",
    course: query.filters
      ? query.filters[1]
        ? query.filters[1]
        : "all-courses"
      : "all-courses",
    state: query.filters
      ? query.filters[2]
        ? query.filters[2]
        : "all-India"
      : "all-India",
    city: query.filters ? (query.filters[3] ? query.filters[3] : "") : "",
  };

  let ECCRef = db.collection(query.type);

  const queryList = Object.keys(filters);

  queryList.forEach((item) => {
    // console.log(item, filters[item]);
    if (filters[item] !== "")
      ECCRef = ECCRef.where(
        `filters.${filters[item].toLowerCase()}`,
        "==",
        true
      );
  });

  var snapshot = await ECCRef.where("development", "==", false).get();

  var data = [];
  if (snapshot.empty) {
    return {
      props: { data },
    };
  }

  snapshot.forEach((doc) => {
    if (query.type === "exams") {
      const { links, prelog, examName, url } = doc.data();
      data.push({ links, prelog, examName, url });
    }
    if (query.type === "colleges") {
      data.push(doc.data());
    }
  });

  // if (query.type === "colleges") {
  //   data.sort(
  //     (a, b) =>
  //       a.ranks[filters.stream.toLowerCase()] -
  //       b.ranks[filters.stream.toLowerCase()]
  //   );
  // }

  return {
    props: { data, query: context.query },
  };
}

const TypeWrapper = (props) => {
  return (
    <>
      <EccComponent data={props.data} />
    </>
  );
};
export default TypeWrapper;
