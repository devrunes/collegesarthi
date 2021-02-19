import React from "react";
import ArticleComponent from "../../../components/ArticleComponent/ArticleComponent";
import { db } from "../../../lib/firebase-admin";
export default function index(props) {
  const { doc } = props;
  // console.log(doc,"yoyso");
  return (
    <div>
      <ArticleComponent doc={doc} />
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { type: "exams", article: "jee-main" } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  // console.log(params, "hello")
  const cityRef =  db.collection("exams").doc("jee-main");
  const doc = await cityRef.get();
  console.log(doc.data(),"hehehe")
  if (!doc.exists) {
    return {
      notFound:true
    }
  }
  return {
    props: {
      doc: doc.data(),
    },
  };
    // console.log('Document data:', doc.data());
}
