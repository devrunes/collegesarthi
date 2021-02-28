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
      { params: {type: "exams", article: "jee-main" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const cityRef = db.collection("exams").doc("jee-main");
  const doc = await cityRef.get();
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
