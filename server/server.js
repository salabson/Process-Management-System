 const express = require("express");
const app = express();

// import model creator
const db  = require( "./models");
 


// Set server port
const PORT = process.env.PORT | 3000;

// Create tables in the mysql database
db.sequelize.sync().then(() =>{
    //If db tables created successfully start the server on specified port
    app.listen(PORT, ()=> console.log("Server successfully started on port", PORT));
});

