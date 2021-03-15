import React from 'react'
import { Link, Navigate } from 'react-router-dom';
import styles from "./MyTeams.module.css"
import { TeamContext } from './TeamContext';
import { ReactComponent as Pencil } from "./Icons/edit.svg"
import { ReactComponent as Trash } from "./Icons/delete.svg"
import { ReactComponent as Share } from "./Icons/share.svg"

const MyTeams = () => {
    const { team, setTeam } = React.useContext(TeamContext);
    const deleteTeam = (id) => {
        const confirmation = window.confirm(`Are you sure you want to delete ${team[id].name} team?`);
        if (confirmation) {
            setTeam(team.splice(id, 1));
        }
    }

    return (
        <div className={`panel ${styles.myTeamsPanel}`}>
            <div className={styles.myTeams}>
                <h1 className="title">My teams</h1>
                <div className={styles.buttonSm}>
                    <Link to={`/new`}>+</Link>
                </div>
            </div>
            <div className="hr"></div>

            {team.length === 0 ?
                (<div className={styles.noTeams}>
                    <p>You have no teams. Would you like to create your first one?</p>
                </div>)
                :
                (<div className={styles.table}>
                    <div className={styles.tableHeader}>
                        <p className={styles.teamNameHeader}>Name</p>
                        <p className={styles.descHeader}>Description</p>
                    </div>

                    {team.map((team, id) => (
                        <div className={styles.tableBody} key={id}>
                            <p className={styles.teamName}>{team.name}</p>
                            <p className={styles.desc}>{team.description}</p>
                            <div className={styles.controllers}>
                                <Trash onClick={() => deleteTeam(id)} className={styles.icon} />
                                <Share className={styles.icon} />
                                <Link to={`/edit/${id}`}>
                                    <Pencil className={styles.icon} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>)
            }
        </div>
    )
}

export default MyTeams
