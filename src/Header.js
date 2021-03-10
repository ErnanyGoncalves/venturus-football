import React from 'react'
import styles from "./Header.module.css"
import { ReactComponent as VenturusLogo } from "./logo.svg";

const Header = () => {
    return (
        <header className={`${styles.header} container`}>
            <div className={styles.nav}>
                <VenturusLogo className={styles.logo} />
                <p className={styles.project}>Squad Management Tool</p>
            </div>
            <div className={styles.nav}>
                <p className={styles.user}>John Doe</p>
                <div className={styles.userAbv}>JD</div>
            </div>
        </header>
    )
}

export default Header
