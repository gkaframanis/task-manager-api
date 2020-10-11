const { response } = require("express");
const express = require("express");
// We ensure that the file runs and mongoose connects to the database. 
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();
const port = process.env.PORT || 3000;

// Automatically parses any incoming json to on object to access it to our request handler.
app.use(express.json());

app.post("/users", (req, res) => {
    // We get the data from an http request through postman.
    const user = new User(req.body);

    user.save().then(() => {
        res.status(201).send(user);
    }).catch((error)=> {
        // To change the status when we encounter an error.
        res.status(400).send(error);
    });
});

app.post("/tasks", (req, res) => {
    const task = new Task(req.body);

    task.save().then(() => {
        res.status(201).send(task);
    }).catch((error) => {
        res.status(400).send(error);
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});