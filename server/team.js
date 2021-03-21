const db = require("./database");

module.exports = class Team {
    constructor(id, name, description, website, type, tags) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.website = website;
        this.type = type;
        this.tags = tags;
    }

    createTeam() {
        return db.execute(`INSERT INTO teams (name,description,website,type,tags) VALUES ('${this.name}', '${this.description}', '${this.website}', '${this.type}', '${this.tags}')`);
    }

    editTeam(id) {
        return db.execute(`UPDATE teams SET name = '${this.name}', description = '${this.description}', website = '${this.website}', type = '${this.type}', tags = '${this.tags}' WHERE id = ${id}`);
    }

    static getTeams() {
        return db.execute(`SELECT * FROM teams`);
    }

    static getTeam(id) {
        return db.execute(`SELECT * from teams WHERE id = ${id}`);
    }


    static deleteTeam(id) {
        return db.execute(`DELETE from teams WHERE id = ${id}`);
    }
}