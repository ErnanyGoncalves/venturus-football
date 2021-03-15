import React from 'react'
import styles from "./Error.module.css"

const Error = ({ msg }) => {
    
    return (
        <p className={styles.error}>{msg}</p>
    )
}

export default Error
