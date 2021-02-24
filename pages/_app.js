import React, { useState } from "react";
import { AuthProvider } from "../lib/auth";
import Navbar from "../components/Navbar/Navbar";
import { AuthOpenContext } from "../lib/authContext";
import "../styles/globals.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const authOpen = useState(false);

  return (
    <AuthOpenContext.Provider value={authOpen}>
      <AuthProvider>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1"
          />
        </Head>
        <Navbar />
        <Component {...pageProps} />
      </AuthProvider>
    </AuthOpenContext.Provider>
  );
}

export default MyApp;
