import React from 'react'
import { useNavigate } from 'react-router';
import styles from "./ManageTeam.module.css"

const ManageTeam = () => {

    const navigate = useNavigate();

    /** @TODO receber por props ou alguma outra forma pra determinar o modo do uso do componente e pegar o nome do time */
    const teamName = "props.team.name";
    const mode = "new";

    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [website, setWebsite] = React.useState("");
    const [teamType, setTeamType] = React.useState("");
    const [tags, setTags] = React.useState("");

    const handleSubmit = (ev) => {
        ev.preventDefault();

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
                            <label className={styles.label} className={styles.label}>Team type</label>
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
