import React from 'react'
import styles from "./Top5.module.css"

const Top5 = ({ players }) => {

    const youngest = (players) => {
        let yPlayers = [];
        for (let i = 0; i < 5; i++) {
            yPlayers.push(
            <div key={`y${i}`}>
                <p>{players[i].name}</p>
                <p>{players[i].age}</p>
            </div>);
        }

        return yPlayers;
    }

    const oldest = (players) => {
        let oPlayers = [];
        for (let i = players.length-1; i > players.length - 6; i--) {
            oPlayers.push(<div key={`o${i}`}>
                <p>{players[i].name}</p>
                <p>{players[i].age}</p>
            </div>);
        }
        return oPlayers;
    }

    if (players.length !== 0) {
        return (
            <div className={"panel"}>
                <h1 className="title">Top 5</h1>
                <div className="hr"></div>
                <div>
                    <div>
                        <p>Youngest players</p>

                        {youngest(players)}

                    </div>
                    <div>
                        <p>Oldest players</p>
                        {oldest(players)}
                    </div>
                </div>
            </div>
        )
    }else return null
}

export default Top5
