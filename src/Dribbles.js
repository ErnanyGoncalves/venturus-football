import React from 'react'

const Dribbles = ({players}) => {

    React.useEffect(()=>{
        console.log(players);
    },[players]);

    return (
        <div className={"panel"}>
            <h1 className="title">Most successful dribbler x Less successful dribbler</h1>


        </div>
    )
}

export default Dribbles
