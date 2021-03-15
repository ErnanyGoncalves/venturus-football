import React from 'react'
import MyTeams from './MyTeams'
import Top5 from './Top5'
import styles from "./Main.module.css"
import Popularity from './Popularity'

// Componente com duas partes: a primeira com a lista de times cadastrados e a 2a com dados de times jogadores

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.column2}>
                <MyTeams />
            </div>

            <div className={styles.column2}>
                <Top5 />
                <Popularity />
            </div>
        </div>
    )
}

export default Main