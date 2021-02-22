import React from "react";
import EccComponent from "../../../components/EccComponent/EccComponent";
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

const TypeWrapper = () => {
  // console.log(data, "b");
  return (
    <div>
      <EccComponent />
    </div>
  );
};
export default TypeWrapper;
