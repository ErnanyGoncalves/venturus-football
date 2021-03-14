import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./MyTeams.module.css"
import { TeamContext } from './TeamContext';

const MyTeams = () => {
    const { team, setTeam } = React.useContext(TeamContext);
    return (
        <div className={"panel"}>
            <h1 className="title">My teams</h1>
            <Link to={`/new`}>Novo</Link>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th colSpan="2">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {team.map((team, id) => (
                        <tr key={id}>
                            <td>{team.name}</td>
                            <td>{team.description}</td>
                            <td><Link to={`/edit/${id}`}>Editar</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default MyTeams
