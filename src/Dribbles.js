import React from 'react'
import styles from "./Dribbles.module.css"

const Dribbles = ({ players, dribbleAttempts, dribbleSuccess }) => {

    const [bestDribbler, setBestDribbler] = React.useState(null);
    const [worstDribbler, setWorstDribbler] = React.useState(null);

    React.useEffect(() => {
        if (dribbleAttempts > 0) {
            let bDribbler = null;
            let wDribbler = null;
            players.map((p, i) => {
                const attempts = dribbleAttempts === 0 ? 0 : (p.dribbles.attempts / dribbleAttempts);
                const success = dribbleSuccess === 0 ? 0 : (p.dribbles.success / dribbleSuccess);
                const dScore = success + attempts;
                console.log(p);
                console.log(dScore);
                if (bDribbler == null) bDribbler={
                    id: i,
                    name: p.name,
                    photo: p.photo,
                    score: dScore
                };
                if (wDribbler == null) wDribbler={
                    id: i,
                    name: p.name,
                    photo: p.photo,
                    score: dScore
                };
                if (dScore > bDribbler.score && bDribbler != null) 
                bDribbler= {
                    id: i,
                    name: p.name,
                    photo: p.photo,
                    score: dScore
                };

                if (dScore < wDribbler.score && wDribbler != null) wDribbler ={
                    id: i,
                    name: p.name,
                    photo: p.photo,
                    score: dScore
                };
                return 1;
            });
            setBestDribbler(bDribbler);
            setWorstDribbler(wDribbler);
            console.log("A",bestDribbler,worstDribbler);
        }
    }, [players, dribbleAttempts, dribbleSuccess]);

    if (players.length !== 0 && bestDribbler != null && worstDribbler != null) {
        return (
            <div className={styles.dribblePanel}>
                <div className={styles.dribbleColumn}>
                    <h1 className={styles.dribbleTitle}>Most successful dribbler</h1>
                    <img className={styles.playerImg} src={bestDribbler.photo} alt={bestDribbler.score} />
                    <p className={styles.playerName}>{bestDribbler.name}</p>
                    <p className={styles.dribbleScore}>Score: {(Math.round(bestDribbler.score * 100) / 100).toFixed(2)}</p>
                </div>
                <div className={styles.dribbleColumn}>
                    <h1 className={styles.dribbleTitle}>Less successful dribbler</h1>
                    <img className={styles.playerImg} src={worstDribbler.photo} alt={worstDribbler.score} />
                    <p className={styles.playerName}>{worstDribbler.name}</p>
                    <p className={styles.dribbleScore}>Score: {(Math.round(worstDribbler.score * 100) / 100).toFixed(2)}</p>
                </div>

            </div>
        )
    } else return null
}

export default Dribbles
