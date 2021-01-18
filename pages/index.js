import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Explore from '../components/Explore/Explore'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CollegeSarthi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Explore />
      </main>

    </div>
  )
}
