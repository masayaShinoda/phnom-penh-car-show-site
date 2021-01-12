import Head from 'next/head'
import Nav from "../components/nav.js"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Phnom Penh Car Show</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav></Nav>
      <main className={styles.main} style={{ marginTop: `7.5vh` }}>
        <h1 className={styles.title}>
          Cambodia's First Auto Event
        </h1>

        <p className={styles.description}>
          At the heart of Phnom Penh, Diamond City.
          <br></br>
          1/1/2021
        </p>

        <a href="/" className={styles.card}>
          <h3 style={{ margin: `0` }}>Learn More</h3>
        </a>

      </main>


    </div>
  )
}
