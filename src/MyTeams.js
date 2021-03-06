import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./MyTeams.module.css"
import { TeamContext } from './TeamContext';
import { ReactComponent as Pencil } from "./Icons/edit.svg"
import { ReactComponent as Trash } from "./Icons/delete.svg"
import { ReactComponent as Share } from "./Icons/share.svg"
import { ReactComponent as UpDown } from "./Icons/up-down.svg"

const MyTeams = () => {
    const { team, setTeam } = React.useContext(TeamContext);

    const getTeams = () => {
        fetch("http://localhost:8000/", {
            method: "GET",
            cache: "no-store"
        }).then(response => response.json())
            .then(json => {
                setTeam([...json])
            })
    }


    // Função para excluir time por sua posição na lista
    const deleteTeam = (id, name) => {
        const confirmation = window.confirm(`Are you sure you want to delete ${name} team?`);
        if (confirmation) {
            fetch(`http://localhost:8000/team/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: "Bearer " + id
                }
            }).then(() => getTeams());
        }
    }

    // Ordenar times por nome
    const sortByName = () => {
        const sortedTeams = [...team].sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });
        setTeam(sortedTeams);
    }

    // Ordenar times por descrição
    const sortByDesc = () => {
        const sortedTeams = [...team].sort((a, b) => {
            if (a.description < b.description) return -1;
            if (a.description > b.description) return 1;
            return 0;
        });
        setTeam(sortedTeams);
    }

    React.useEffect(() => {
        getTeams();
    }, []);

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
                    <p>You have no teams. Would you like to create the first one?</p>
                </div>)
                :
                (<div className={styles.table}>
                    <div className={styles.tableHeader}>
                        <div className={styles.column1} onClick={sortByName}>
                            <p className={styles.teamNameHeader}>Name</p>
                            <UpDown className={styles.iconH} />
                        </div>
                        <div className={styles.column2} onClick={sortByDesc}>
                            <p className={styles.descHeader}>Description</p>
                            <UpDown className={styles.iconH} />
                        </div>
                    </div>


                    {team.map((team, id) => (
                        <div className={styles.tableBody} key={id}>
                            <p className={styles.teamName}>{team.name}</p>
                            <p className={styles.desc}>{team.description}</p>
                            <div className={styles.controllers}>
                                <Trash onClick={() => deleteTeam(team.id, team.name)} className={styles.icon} />
                                <Share className={styles.icon} />
                                <Link to={`/edit/${team.id}`}>
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
