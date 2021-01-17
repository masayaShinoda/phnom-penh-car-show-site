import styles from '../styles/Frontpage.module.css'

export default function Frontpage() {
    return (
        <main className={styles.main}>
          <div  className={styles.leftDiv}>
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
            <div style={{display: `flex`, flexDirection: `row`}}>
              <a href="/" id={styles.ticketBtn} className={styles.card} style={{display: `flex`, justifyContent: `center`, alignItems: `center`,  textAlign: `center`, padding: `0.8rem`, margin: `0.45rem`, flexBasis: `auto`}}>
                <h3 style={{ margin: `0`, fontSize: `1.1rem` }}>Get Tickets</h3>
              </a>
              <a href="/" id="learnMoreBtn" className={styles.card} style={{display: `flex`, justifyContent: `center`, alignItems: `center`,  textAlign: `center`, padding: `0.8rem`, margin: `0.45rem 0`, flexBasis: `auto`, border: 0}}>
                <h3 style={{ margin: `0`, fontSize: `1.1rem` }}>Learn More</h3>
              </a>
            </div>
          </div>
          <div className={styles.rightDiv}>
            
          </div>


      </main>
    )
}