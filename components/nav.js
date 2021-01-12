import styles from "../styles/Nav.module.css"

export default function Nav() {
    return (
        <>
            <nav className={styles.Nav}>
                <a href="/">Project</a>
                <a href="/">Timeline</a>
                <a href="/">Location</a>
                <a href="/">Contact</a>
            </nav>
            <a href="/" className={styles.ForSponsorBtn}>For Interested Sponsors &#x2747;</a>
        </>
        
    )
}