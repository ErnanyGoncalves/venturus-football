import React from 'react'
import { useNavigate } from 'react-router';
import styles from "./ManageTeam.module.css"
import { useParams } from 'react-router'
import { TeamContext } from './TeamContext'
import Error from './Error';

const ManageTeam = () => {
    const { id } = useParams();
    const { team, setTeam } = React.useContext(TeamContext);
    const currentTeam = team[id];

    const navigate = useNavigate();

    // Inicialização do componente e de seus estados. É verificado se a o componente é tratado como cadastro ou edição.
    // Se for para cadastro: o componente é adaptado para ser preenchido
    // Se for para edição: o componente é adaptado para ser editado

    const pathName = window.location.pathname;
    const mode = pathName === "/new" ? "new" : "edit";
    const teamName = pathName !== "/new" ? currentTeam.name : "";

    const [name, setName] = React.useState(pathName === "/new" ? "" : currentTeam.name);
    const [description, setDescription] = React.useState(pathName === "/new" ? "" : currentTeam.description);
    const [website, setWebsite] = React.useState(pathName === "/new" ? "" : currentTeam.website);
    const [teamType, setTeamType] = React.useState(pathName === "/new" ? "" : currentTeam.teamType);
    const [tags, setTags] = React.useState(pathName === "/new" ? [] : currentTeam.tags);

    const [error1, setError1] = React.useState(false);
    const [error2, setError2] = React.useState(false);
    const [error3, setError3] = React.useState(false);

    // Função ao salvar as informações (é verificado se os campos obrigatórios estão válidos)
    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (name !== "" && website !== "" && teamType !== "") {
            if (mode === "new") setTeam([...team, { name, description, website, teamType, tags }]);
            else {
                let teamCopy = [...team];
                teamCopy[id] = { name, description, website, teamType, tags };
                setTeam(teamCopy);
            }
            navigate("/");
        } else {
            name === "" ? setError1(true) : setError1(false);
            validateWebsite(website) ? setError2(true) : setError2(false);
            teamType === "" ? setError3(true) : setError3(false);
        }
    }


    // Função validora do link do website
    const validateWebsite = (value) => {
        if (/(https?:\/\/)?(www\.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)|(https?:\/\/)?(www\.)?(?!ww)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(value)) return false;
        else return true;
    }

    return (
        <div className="panel">
            <h1 className="title">{mode === "new" ? "Create your team" : `Edit ${teamName} team`}</h1>

            <div className="hr"></div>

            <form className={styles.form} onSubmit={handleSubmit}>
                <h2 className="subtitle">Team Information</h2>
                <div className={styles.form1}>
                    <div className={styles.pt1}>
                        <div className={styles.entry}>
                            <label className={styles.label} htmlFor="name">Team name</label>
                            <input className={styles.input} id="name" name="name" placeholder="Insert team name" onChange={({ target }) => setName(target.value)} value={name} type="text" />
                            {error1 ? <Error msg="You must write a name for your team!" /> : null}
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
                            {error2 ? <Error msg="Your team must have a valid website!" /> : null}

                        </div>
                        <div className={styles.entry}>
                            <label className={styles.label}>Team type</label>
                            <label className={styles.rlabel}>
                                <input className={styles.radio} type="radio" value="real" checked={teamType === 'real'} onChange={({ target }) => setTeamType(target.value)} />
                                <label className={styles.realLabel}>Real</label>
                            </label>
                            <label className={styles.rlabel}>
                                <input className={styles.radio} type="radio" value="fantasy" checked={teamType === 'fantasy'} onChange={({ target }) => setTeamType(target.value)} />
                                <label className={styles.fantasyLabel}>Fantasy</label>
                            </label>
                            {error3 ? <Error msg="Select a type for your team!" /> : null}
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
