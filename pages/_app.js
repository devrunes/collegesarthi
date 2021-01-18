import { AuthProvider } from '../lib/auth';
import Navbar from '../components/Navbar/Navbar';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <AuthProvider>
      <Navbar />
      <Component {...pageProps} />
    </AuthProvider>
}

export default MyApp
