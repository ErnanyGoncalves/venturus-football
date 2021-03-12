import React from 'react'
import { useNavigate } from 'react-router';

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

    const handleSubmit = (ev) =>{
        ev.preventDefault();

        navigate("/");
    }

    return (
        <div>
            <h1 className="title">{mode === "new" ? "Create your team" : `Edit ${teamName} team`}</h1>
            <form onSubmit={handleSubmit}>
                <h2 className="subtitle">Team Information</h2>
                <label htmlFor="name">Team name</label>
                <input name="name" placeholder="Insert team name" onChange={({ target }) => setName(target.name)} value={name} type="text" />

                <label htmlFor="description">Description</label>
                <textarea id="description" value={description} rows="5" onChange={({ target }) => setDescription(target.description)} />

                <label htmlFor="name">Team website</label>
                <input name="website" placeholder="Insert team website" onChange={({ target }) => setWebsite(target.website)} value={website} type="text" />


                <label>Team type</label>
                <label>
                    <input type="radio" value="real" checked={teamType === 'real'} onChange={({ target }) => setTeamType(target.teamType)} />
                    Real
                </label>
                <label>
                    <input type="radio" value="fantasy" checked={teamType === 'fantasy'} onChange={({ target }) => setTeamType(target.teamType)} />
                    Fantasy
                </label>

                <label htmlFor="tags">Tags</label>
                <textarea id="tags" value={tags} rows="5" onChange={({ target }) => setTags(target.tags)} />

                <button>Save</button>
            </form>
        </div>
    )
}

export default ManageTeam
