import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./Header.module.css"
import { ReactComponent as VenturusLogo } from "./Icons/logo.svg";

const Header = () => {
    return (
        <header className={`${styles.header} container`}>
            <Link className={styles.nav} to="/">
                <VenturusLogo className={styles.logo} />
                <p className={styles.project}>Squad Management Tool</p>
            </Link>
            <div className={styles.nav}>
                <p className={styles.user}>John Doe</p>
                <div className={styles.userAbv}>JD</div>
            </div>
        </header>
    )
}

export default Header
