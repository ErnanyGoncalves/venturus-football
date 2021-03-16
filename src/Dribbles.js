import React from 'react'

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
            console.log(bestDribbler,worstDribbler);
        }
    }, [players, dribbleAttempts, dribbleSuccess]);

    if (players.length !== 0) {
        return (
            <div className={"panel"}>
                <div>
                    <h1 className="title">Most successful dribbler</h1>
                    <img src={bestDribbler.photo} alt={bestDribbler.score} />
                    <p>{bestDribbler.name}</p>
                    <p>Score: {bestDribbler.score}</p>
                </div>
                <div>
                    <h1 className="title">Less successful dribbler</h1>
                    <img src={worstDribbler.photo} alt={worstDribbler.score} />
                    <p>{worstDribbler.name}</p>
                    <p>Score: {worstDribbler.score}</p>
                </div>

            </div>
        )
    } else return null
}

export default Dribbles
