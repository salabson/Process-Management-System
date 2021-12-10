const express = require("express");
const app = express();
const cors = require("cors");
// import model creator
const db  = require( "./models");
// routes
const guarantorRouter = require("./routes/Guarantor.js");
const guaranteeRouter = require("./routes/Guarantee.js");

// Allow passing the request body
app.use(express.json());

app.use(cors());

 


app.use("/guarantor", guarantorRouter);
app.use("/guarantee", guaranteeRouter);

// Set server port
const PORT = process.env.PORT | 5000;

// Create tables in the mysql database
db.sequelize.sync().then(() =>{
    //If db tables created successfully start the server on specified port
    app.listen(PORT, ()=> console.log("Server successfully started on port", PORT));
});

