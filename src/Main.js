import React from 'react'
import MyTeams from './MyTeams'
import Top5 from './Top5'
import styles from "./Main.module.css"
import Dribbles from './Dribbles'

// Componente com duas partes: a primeira com a lista de times cadastrados e a 2a com dados de times jogadores

const Main = () => {

    const [players, setPlayers] = React.useState([]);

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
                const playersData = response.map(p => {
                    return {
                        name: p.player.name,
                        age: p.player.age,
                        photo: p.player.photo,
                        dribbles: p.statistics[0].dribbles
                    }
                });
                // Sort by age
                playersData.sort((a, b) => (a.age > b.age) ? 1 : ((b.age > a.age) ? -1 : 0));
                setPlayers(playersData);
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
                <Dribbles players={players} />
            </div>
        </div>
    )
}

export default Main