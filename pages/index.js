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
      <main className={styles.main} style={{ marginTop: `12.5vh` }}>
        <h1 className={styles.title}>
          Cambodia's First Auto Event
        </h1>

        <p className={styles.description}>
          At the heart of Phnom Penh, Diamond Island.
          <br></br>
          <span style={{ fontWeight: `800`}}>
            1/1/2021
          </span>
        </p>
        <div style={{display: `flex`}}>
          <a href="/" className={styles.card} style={{display: `flex`, justifyContent: `center`, alignItems: `center`,  textAlign: `center`, padding: `0.8rem`, margin: `0.5rem`}}>
            <h3 style={{ margin: `0`, fontSize: `1.1rem` }}>Learn More</h3>
          </a>
          <a href="/" className={styles.card} style={{display: `flex`, justifyContent: `center`, alignItems: `center`,  textAlign: `center`, padding: `0.8rem`, margin: `0.5rem`}}>
            <h3 style={{ margin: `0`, fontSize: `1.1rem` }}>Pricing</h3>
          </a>

        </div>

      </main>


    </div>
  )
}
