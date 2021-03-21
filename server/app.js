const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const teamRoutes = require('./team-routes');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(teamRoutes);

app.listen(8000, () => {
    console.log("Connected to localhost:8000");
});