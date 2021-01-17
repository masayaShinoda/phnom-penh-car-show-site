import styles from "../styles/Nav.module.css"

export default function Nav() {
    function openNav() {
        document.getElementById("nav").style.display = "flex"
        document.getElementById("openNavBtn").style.display = "none"
        document.getElementById("closeNavBtn").style.display = "block"        
    }
    function closeNav() {
        document.getElementById("nav").style.display = "none"
        document.getElementById("closeNavBtn").style.display = "none"
        document.getElementById("openNavBtn").style.display = "block"
    }
    
    return (
        <>
            <button id="openNavBtn" onClick={openNav} className={styles.openNavBtn}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <button id="closeNavBtn" onClick={closeNav} className={styles.closeNavBtn} style={{display: `none`}}>
                <div>
                    <span></span>
                    <span></span>
                </div>
            </button>
            <nav id="nav" className={styles.Nav}>
                <a href="/">Project</a>
                <a href="/">Location</a>
                <a href="/">Contact</a>
                <a href="/" className={styles.ForSponsorBtn}>For Interested Sponsors &#x2747;</a>
            </nav>
        </>
        
    )
}