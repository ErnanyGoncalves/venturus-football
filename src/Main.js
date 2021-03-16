import React from 'react'
import MyTeams from './MyTeams'
import Top5 from './Top5'
import styles from "./Main.module.css"
import Dribbles from './Dribbles'

// Componente com duas partes: a primeira com a lista de times cadastrados e a 2a com dados de times jogadores
const Main = () => {

    const [players, setPlayers] = React.useState([]);
    const [dribbleAttempts, setDribbleAttempts] = React.useState(0);
    const [dribbleSuccess, setDribbleSuccess] = React.useState(0);

    // Requisição na API dos "Topscore players" da UEFA de 2020
    React.useEffect(() => {
        setPlayers([]);

        fetch("https://v3.football.api-sports.io/players/topscorers?league=2&season=2020", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "214d48e4312d7a6247b873b3448d4590"
            }
        })
            .then(response => response.json())
            .then(json => {
                const { response } = json;
                
                // Preparação dos dados a serem usados
                let totalDribbleAttempts = 0;
                let totalDribbleSuccess = 0;
                
                const playersData = response.map(p => {
                    totalDribbleAttempts += p.statistics[0].dribbles.attempts == null ? 0 : p.statistics[0].dribbles.attempts;
                    totalDribbleSuccess += p.statistics[0].dribbles.success == null ? 0 : p.statistics[0].dribbles.success;
                    return( {
                        name: p.player.name,
                        age: p.player.age,
                        photo: p.player.photo,
                        dribbles: {
                            attempts: p.statistics[0].dribbles.attempts == null ? 0 : p.statistics[0].dribbles.attempts,
                            success: p.statistics[0].dribbles.success == null ? 0 : p.statistics[0].dribbles.success,
                        }
                    })
                });
                // Sort by age
                playersData.sort((a, b) => (a.age > b.age) ? 1 : ((b.age > a.age) ? -1 : 0));
                setPlayers([...playersData]);
                setDribbleAttempts(totalDribbleAttempts);
                setDribbleSuccess(totalDribbleSuccess);

            })
            .catch(err => {
                console.log(err);
            });

    }, []);


    return (
        <div className={styles.main}>
            <div className={styles.column2}>
                <MyTeams />
            </div>

            <div className={styles.column2}>
                <Top5 players={players} />
                <Dribbles players={players} dribbleAttempts={dribbleAttempts} dribbleSuccess={dribbleSuccess} />
            </div>
        </div>
    )
}

export default Main