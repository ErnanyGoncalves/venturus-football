const express = require("express");

const teamController = require('./team-controllers');

const app = express();

app.route("/").get(teamController.getTeams); //Listagem

app.route("/team/:id")
    .get(teamController.getTeam) // Visalização
    .put(teamController.editTeam) // Edição
    .delete(teamController.deleteTeam); // Exclusão

app.route("/team/new").post(teamController.createTeam); // Cadastra time



module.exports = app;