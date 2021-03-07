import React from "react";
import EccComponent from "../../../../components/EccComponent/EccComponent";
import { db } from "../../../../lib/firebase-admin";

export async function getServerSideProps(context) {
  const { query } = context;
  // console.log(context,"ashdb");
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
  // console.log(filters, "here");
  // console.log(query);
  let ECCRef = db.collection(query.type);

  const queryList = Object.keys(filters);
  queryList.forEach((item) => {
    // console.log(filters[item])
    if (filters[item] !== "")
      ECCRef = ECCRef.where(
        `filters.${filters[item].toLowerCase()}`,
        "==",
        true
      );
    // console.log(ECCRef)
  });
  var snapshot = await ECCRef.get();
  var data = [];
  // console.log(snapshot)
  if (snapshot.empty) {
    return {
      props: { data },
      // data: [],
    };
  }
  // console.log(data, "asd");
  snapshot.forEach((doc) => {
    const { links, prelog, examName, url } = doc.data();
    data.push({ links, prelog, examName, url });
  });
  // console.log(data, "piyush");
  return {
    props: { data, query: context.query }, // will be passed to the page component as props
  };
}

const TypeWrapper = (props) => {
  return (
    <div>
      <EccComponent data={props.data} />
    </div>
  );
};
export default TypeWrapper;
