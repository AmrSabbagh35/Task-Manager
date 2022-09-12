const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const connectDB = require("./config/db");
const tasks = require("./routes/tasks");
const notfound = require('./middleware/not-found')
// load config file

dotenv.config({ path: "./config/config.env" });

// DB Config

connectDB();

// middleware
app.use(express.static('./public'));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("task manager app");
});

app.use(notfound)

app.use("/api/v1/tasks", tasks);

const PORT = 3000;

app.listen(PORT, console.log(`Server is listening on ${PORT} ...`));
