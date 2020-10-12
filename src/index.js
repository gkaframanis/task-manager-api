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

app.get("/users", (req, res) => {
    User.find({}).then((users) => {
        res.send(users);
    }).catch((error) => {
        res.status(500).send();
    });
});

// We use route parameter
// req.params returns an object with key the param and value the value we pass at the url.
app.get("/users/:id", (req, res) => {
    User.findById({_id: req.params.id }).then((user) => {
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    }).catch((error) => {
        res.status(500).send();
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

app.get("/tasks", (req, res) => {
    Task.find({}).then((tasks) => {
        res.send(tasks);
    }).catch((error) => {
        res.status(500).send();
    });
});

app.get("/tasks/:id", (req, res) => {
    const _id = req.params.id;
    // mongoose converts strings automatically to ObjectIDs.
    Task.findById(_id).then((task) => {
        if (!task) {
            return res.status(404).send();
        }
        res.send(task);
    }).catch((error) => {
        res.status(500).send();
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});