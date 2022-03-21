require("dotenv").config();
require("express-async-errors");
const sendEmail = require("./controllers/sendEmail");
const express = require("express");
const main = require("./controllers/main");
const app = express();

// error handler
const notFoundMiddleware = require("./middleware/notfound");
const errorHandlerMiddleware = require("./middleware/errorhandler");
const { send } = require("process");

app.use(express.json());

// routes

app.get("/send", sendEmail);
app.get("/", main);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = 5500;

const start = async () => {
  try {
    app.listen(port, () => console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
