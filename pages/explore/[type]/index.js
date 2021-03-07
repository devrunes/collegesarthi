import React from "react";
import EccComponent from "../../../components/EccComponent/EccComponent";
import { db } from "../../../lib/firebase-admin";

export async function getServerSideProps(context) {
  const { query, params } = context;

  let ECCRef = db.collection(params.type);

  var snapshot = await ECCRef.get();
  var data = [];
  if (snapshot.empty) {
    return {
      props: { data },
    };
  }

  snapshot.forEach((doc) => {
    const { links, prelog, examName, url } = doc.data();
    data.push({ links, prelog, examName, url });
  });
  return {
    props: { data, query: context.params },
  };
}

const TypeWrapper = ({ data, query }) => {
  return (
    <div>
      <EccComponent data={data} query={query} />
    </div>
  );
};
export default TypeWrapper;
