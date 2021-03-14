import React from 'react'
import { useNavigate } from 'react-router';
import styles from "./ManageTeam.module.css"
import { useParams } from 'react-router'
import { TeamContext } from './TeamContext'

const ManageTeam = () => {
    const { id } = useParams();
    const { team,setTeam } = React.useContext(TeamContext);
    const currentTeam = team[id];

    const navigate = useNavigate();

    const pathName = window.location.pathname;
    const mode = pathName === "/new" ? "new" : "edit";
    const teamName = pathName !== "/new" ? currentTeam.name : "";

    const [name, setName] = React.useState(pathName === "/new" ? "" : currentTeam.name);
    const [description, setDescription] = React.useState(pathName === "/new" ? "" : currentTeam.description);
    const [website, setWebsite] = React.useState(pathName === "/new" ? "" : currentTeam.website);
    const [teamType, setTeamType] = React.useState(pathName === "/new" ? [] : currentTeam.teamType);
    const [tags, setTags] = React.useState(pathName === "/new" ? "" : currentTeam.tags);

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if(mode === "new") setTeam([...team,{name,description,website,teamType,tags}]);
        else{
            let teamCopy = [...team];
            teamCopy[id] = {name,description,website,teamType,tags};
            setTeam(teamCopy);
        }
        navigate("/");
    }

    return (
        <div className="panel">
            <h1 className="title">{mode === "new" ? "Create your team" : `Edit ${teamName} team`}</h1>

            <div className={styles.hr}></div>

            <form className={styles.form} onSubmit={handleSubmit}>
                <h2 className="subtitle">Team Information</h2>
                <div className={styles.form1}>
                    <div className={styles.pt1}>
                        <div className={styles.entry}>
                            <label className={styles.label} htmlFor="name">Team name</label>
                            <input className={styles.input} id="name" name="name" placeholder="Insert team name" onChange={({ target }) => setName(target.value)} value={name} type="text" />
                        </div>
                        <div className={styles.entry}>
                            <label className={styles.label} htmlFor="description">Description</label>
                            <textarea className={styles.tarea} id="description" value={description} rows="7" onChange={({ target }) => setDescription(target.value)} />
                        </div>
                    </div>
                    <div className={styles.pt1}>
                        <div className={styles.entry}>
                            <label className={styles.label} htmlFor="website">Team website</label>
                            <input className={styles.input} id="website" name="website" placeholder="Insert team website" onChange={({ target }) => setWebsite(target.value)} value={website} type="text" />
                        </div>
                        <div className={styles.entry}>
                            <label className={styles.label}>Team type</label>
                            <label className={styles.rlabel}>
                                <input className={styles.radio} type="radio" value="real" checked={teamType === 'real'} onChange={({ target }) => setTeamType(target.value)} />
                                Real
                            </label>
                            <label className={styles.rlabel}>
                                <input className={styles.radio} type="radio" value="fantasy" checked={teamType === 'fantasy'} onChange={({ target }) => setTeamType(target.value)} />
                                Fantasy
                            </label>
                        </div>
                        <div className={styles.entry}>
                            <label className={styles.label} htmlFor="tags">Tags</label>
                            <textarea className={styles.tarea} id="tags" value={tags} rows="3" onChange={({ target }) => setTags(target.value)} />
                        </div>
                    </div>
                </div>
                <button className={styles.saveBtn}>Save</button>
            </form>
        </div>
    )
}

export default ManageTeam
