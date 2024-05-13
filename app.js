const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");

dotenv.config();

const app = express();
// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan());

// Session Middleware
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

// ROUTES
// User routes
const userRoute = require("./routes/userRoute");
app.use("/api/user", userRoute);


// doctor routes
const doctorRoute = require("./routes/doctorRoute");
app.use("/api/doctor", doctorRoute);

app.all("*", (req, res) => {
  res.status(404).send("OOPS! 404 page not found");
});

module.exports = app;

