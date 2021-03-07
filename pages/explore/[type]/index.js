import React from "react";
import EccComponent from "../../../components/EccComponent/EccComponent";
import { db } from "../../../lib/firebase-admin";

// import { useRouter } from "next/router";

// export async function getStaticPaths() {
//   // const router = useRouter();
//   // const query = router.query;
//   // console.log(query, "piyush");
//   return {
//     paths: [
//       // { params: { type: "exams?stream=engineering" } },
//       // { params: { type: "exams?stream=law" } },
//       { params: { type: "exams" } }, // See the "paths" section below
//     ],
//     fallback: true, // See the "fallback" section below
//   };
// }

// export async function getStaticProps({ params }) {
//   let data = {
//     some: "thing",
//     params,
//   };
//   console.log(params, "a");
//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }

export async function getServerSideProps(context) {
  const { query, params } = context;

  // console.log(filters, "here");
  // console.log(params.type, "awdaw");

  let ECCRef = db.collection(params.type);

  // const queryList = Object.keys(filters);
  // queryList.forEach((item) => {
  //   // console.log(filters[item])
  //   if (filters[item] !== "")
  //     ECCRef = ECCRef.where(
  //       `filters.${filters[item].toLowerCase()}`,
  //       "==",
  //       true
  //     );
  //   // console.log(ECCRef)
  // });

  var snapshot = await ECCRef.get();
  var data = [];
  console.log(snapshot, "askjbdakjssbdkajsbdakjsbdakjsbd");
  if (snapshot.empty) {
    return {
      props: { data },
      // data: [],
    };
  }

  // console.log(data, "asd");

  snapshot.forEach((doc) => {
    // console.log(doc.data(),"whdbawbd")
    data.push(doc.data());
  });
  // console.log(data, "piyush");
  return {
    props: { data, query: context.params }, // will be passed to the page component as props
  };
}

const TypeWrapper = ({ data, query }) => {
  console.log(data, "b");
  return (
    <div>
      <EccComponent data={data} query={query} />
    </div>
  );
};
export default TypeWrapper;
