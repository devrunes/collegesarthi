import React from "react";
import DefaultErrorPage from "next/error";
import EccComponent from "../../../components/EccComponent/EccComponent";
const TypeWrapper = () => {
  return (
    <div>
      <DefaultErrorPage />
    </div>
  );
};

export async function getServerSideProps(context) {

  return {
    notFound: true,
  };
}
export default TypeWrapper;
