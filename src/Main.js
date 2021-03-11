import React from 'react'
import MyTeams from './MyTeams'
import Top5 from './Top5'
import styles from "./Main.module.css"

const Main = () => {
    return (
        <div className={styles.main}>
            <MyTeams />
            <div>
            <Top5 />
            <Top5 />
            </div>
            
        </div>
    )
}

export default Main