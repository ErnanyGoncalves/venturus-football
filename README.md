
# Venturus test - Football API

  

In this test, I was requested to build an application that allows the user to create, edit and delete football teams. Through an external API, I should retrieve the data of football teams and players.

  

## Installing, starting and building the project

After cloning or downloading this repository, it's necessary to install the required dependencies using `npm i` in the project terminal. In order to make use of the API, go to **src/Main.js** and change the **"x-rapidapi-key"** value to your own API key. To start the project, just use `npm start` in the project terminal. And in case your wish is to put the project at the internet, just use the command `npm run build` in the project terminal.

  

## Patchnotes (venturus-1.0.0)

 - The test didn't specify which league and season I should explore, so the whole focus was according to UEFA's data from 2020;
 - The user is allowed to create, edit and delete its team data from a form with only the team information (configure squad part wasn't implemented);
 - The tag creation feature wasn't implemented as well;
 - The form validates if the required inputs are valid or not;
 - The whole project aimed for resposiveness. The My Teams table, in the mobile version ended up hidding the other buttons such as "deletion" and "share";
 - The My Teams table headers allows you to sort the created teams by name and description;
- Due to the time available, it wasn't possible to create tests. And in order to show my skills at making API requests, I ended exploring the data in a different way, the Top 5 panel will show the age of the youngest and oldest topscore players and the panel below will show the best and the worst dribller according to a score "developed" by me: **(player dribble attempts / total of all players attempts) + (player dribble success / total of all players success)**. 