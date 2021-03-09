import React, { useState } from "react";
import { AuthProvider } from "../lib/auth";
import Navbar from "../components/Navbar/Navbar";
import Model from "../components/model/model";
import { AuthOpenContext, ModelOpenContext } from "../lib/authContext";
import "../styles/globals.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const authOpen = useState(false);
  const model = useState({
    open: false,
    modelNo: 0,
  });

  return (
    <AuthOpenContext.Provider value={authOpen}>
      <ModelOpenContext.Provider value={model}>
        <AuthProvider>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, minimum-scale=1"
            />
          </Head>
          <Navbar />
          <Model />
          <Component {...pageProps} />
        </AuthProvider>
      </ModelOpenContext.Provider>
    </AuthOpenContext.Provider>
  );
}

export default MyApp;
