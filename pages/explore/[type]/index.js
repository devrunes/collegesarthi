import React from "react";
import EccComponent from "../../../components/EccComponent/EccComponent";
import { db } from "../../../lib/firebase-admin";

export async function getServerSideProps(context) {
  const { query, params } = context;

  // console.log(query.type === "exams");

  if (query.type !== "exams" && query.type !== "colleges") {
    return {
      notFound: true,
    };
  }

  let ECCRef = db.collection(params.type);

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
      // console.log(doc.data());
      // const { links, prelog, examName, url } = doc.data();
      data.push(doc.data());
    }
  });

  return {
    props: { data, query: context.params },
  };
}

const TypeWrapper = ({ data, query }) => {
  return (
    <>
      <EccComponent data={data} query={query} />
    </>
  );
};
export default TypeWrapper;
