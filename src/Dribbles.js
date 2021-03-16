import React from 'react'

const Dribbles = () => {


    React.useEffect(() => {
        fetch("https://v3.football.api-sports.io/players/topscorers?league=2&season=2020", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "214d48e4312d7a6247b873b3448d4590"
            }
        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className={"panel"}>
            <h1 className="title">Most successful dribbler x Less successful dribbler</h1>


        </div>
    )
}

export default Dribbles
