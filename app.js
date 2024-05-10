const express =require(  "express");
const dotenv =require ("dotenv");
const bodyParser =require("body-parser");
const morgan = require('morgan');

const userRoute = require('./routes/userRoute')

dotenv.config();

const app = express();
// Middleware 
app.use(express.json());
app.use(bodyParser.json());
app.use(morgan('combine'));



// ROUTES

app.use('/api/user', userRoute);






app.all("*", (req, res) => {
  res.status(404).send("OOPS! 404 page not found");
});

module.exports =  app;