import React from "react";
import ArticleComponent from "../../../../components/ArticleComponent/ArticleComponent";
import { db } from "../../../../lib/firebase-admin";
export default function index(props) {
  const { doc } = props;
  // console.log(props,"jajskjdh")
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
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const cityRef = db.collection(params.type).doc(params.article);
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
