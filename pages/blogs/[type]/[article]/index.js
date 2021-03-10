import React from "react";
import ArticleComponent from "../../../../components/ArticleComponent/ArticleComponent";
import { db } from "../../../../lib/firebase-admin";
export default function index(props) {
  const { doc } = props;
  return (
    <div>
      <ArticleComponent doc={doc} />
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { type: "exams", article: "jee-main" } },
      { params: { type: "exams", article: "nda" } },
      // { params: {type: "exams", article: "nift" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  // const { query, params } = context;

  // console.log(query.type === "exams");

  if (params.type !== "exams" && params.type !== "colleges") {
    return {
      notFound: true,
    };
  }

  const cityRef = db.collection(params.type).doc(params.article);
  const doc = await cityRef.get();
  // console.log(doc);
  if (!doc.exists) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      doc: doc.data(),
    },
  };
}
