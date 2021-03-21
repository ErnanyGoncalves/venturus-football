const Team = require("./team");

exports.getTeams = (req, res, next) => {
    Team.getTeams().then(result => {
        res.send(result[0]);
    }).catch(err => console.log(err));
};

exports.getTeam = (req, res, next) => {
    const paramId = req.params.id;

    Team.getTeam(paramId).then(result => {
        res.send(result[0]);
    }).catch(err => console.log(err));
};

exports.createTeam = (req, res, next) => {
    const name = req.body.name;
    const description = req.body.description;
    const website = req.body.website;
    const type = req.body.type;
    const tags = req.body.tags;

    const team = new Team(null, name, description, website, type, tags);
    team.createTeam()
        .then(() => {
            console.log("New team created!");
            res.send("New team created!");
        })
        .catch(err => console.log(err));
};

exports.editTeam = (req, res, next) => {
    const paramId = req.params.id;

    const newName = req.body.name;
    const newDescription = req.body.description;
    const newWebsite = req.body.website;
    const newType = req.body.type;
    const newTags = req.body.tags;

    const team = new Team(null, newName, newDescription, newWebsite, newType, newTags);
    team.editTeam(paramId)
        .then(() => {
            console.log(`Team ${paramId} modified!`);
            res.send(`Team ${paramId} modified!`);
        })
        .catch(err => console.log(err));
};


exports.deleteTeam = (req, res, next) => {
    const paramId = req.params.id;

    Team.deleteTeam(paramId)
        .then(() => {
            console.log(`Team ${paramId} deleted!`);
            res.send(`Team ${paramId} deleted!`);
        })
        .catch(err => console.log(err));
};