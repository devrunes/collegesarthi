import { AuthProvider } from "../lib/auth";
import Navbar from "../components/Navbar/Navbar";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Navbar />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
