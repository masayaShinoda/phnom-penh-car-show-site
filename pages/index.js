import Head from 'next/head'
import Frontpage from "../components/frontpage"
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
      <Frontpage></Frontpage>



    </div>
  )
}
