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

app.post("/users", async (req, res) => {
    // We get the data from an http request through postman.
    const user = new User(req.body);

    try {
        await user.save();
        res.status(201).send(user);

    } catch (error) {
        res.status(400).send(error);
    }
});

app.get("/users", async (req, res) => {

    try {
        const users = await User.find({});
        res.send(users);
        
    } catch (error) {
        res.status(500).send();
    }
});

// We use route parameter
// req.params returns an object with key the param and value the value we pass at the url.
app.get("/users/:id", async (req, res) => {
    const _id = req.params.id;

    try {
        const user = await User.findById(_id);

        if (!user) {
            return res.status(404).send();
        }

        res.send(user);
    } catch (error) {
        res.status(500).send();  
    }
});

app.post("/tasks", async (req, res) => {
    const task = new Task(req.body);

    try {
        await task.save();
        res.status(201).send(task);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get("/tasks", async (req, res) => {

    try {
        const tasks = await Task.find({});
        res.send(tasks);  
    } catch (error) {
        res.status(500).send();   
    }
});

app.get("/tasks/:id", async (req, res) => {
    const _id = req.params.id;

    try {
        const task = await Task.findById(_id);
        if(!task) {
            return res.status(404).send();
        }
        res.send(task);
    } catch (error) {
        res.send(500).send();
    }
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});