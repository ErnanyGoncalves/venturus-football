import React from 'react'
import styles from "./Top5.module.css"

const Top5 = ({ players }) => {

    const youngest = (players) => {
        let yPlayers = [];
        for (let i = 0; i < 5; i++) {
            yPlayers.push(
                <div className={styles.slot} key={`y${i}`}>
                    <p className={styles.pName}>{players[i].name}</p>
                    <p className={styles.pAge}>{players[i].age} yrs</p>
                </div>);
        }

        return yPlayers;
    }

    const oldest = (players) => {
        let oPlayers = [];
        for (let i = players.length - 1; i > players.length - 6; i--) {
            oPlayers.push(
                <div className={styles.slot} key={`o${i}`}>
                    <p className={styles.pName}>{players[i].name}</p>
                    <p className={styles.pAge}>{players[i].age} yrs</p>
                </div>);
        }
        return oPlayers;
    }

    if (players.length !== 0) {
        return (
            <div className={"panel"}>
                <h1 className="title">Top 5</h1>
                <div className="hr"></div>
                <div className={styles.topColumn}>
                    <div className={styles.ageColumn}>
                        <p className={styles.paragraphTop}>Youngest players</p>
                        <div>
                            {youngest(players)}
                        </div>
                    </div>
                    <div className={styles.ageColumn}>
                        <p className={styles.paragraphTop}>Oldest players</p>
                        <div>
                            {oldest(players)}
                        </div>
                    </div>
                </div>
            </div>
        )
    } else return null
}

export default Top5
