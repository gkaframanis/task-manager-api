const express = require("express");
const router = new express.Router();
const User = require("../models/user");

router.post("/users", async (req, res) => {
    // We get the data from an http request through postman.
    const user = new User(req.body);

    try {
        await user.save();
        res.status(201).send(user);

    } catch (error) {
        res.status(400).send(error);
    }
});

router.get("/users", async (req, res) => {

    try {
        const users = await User.find({});
        res.send(users);
        
    } catch (error) {
        res.status(500).send();
    }
});

// We use route parameter
// req.params returns an object with key the param and value the value we pass at the url.
router.get("/users/:id", async (req, res) => {
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
router.patch("/users/:id", async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["name", "email", "password", "age"];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({error: "Invalid updates!"});
    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if(!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        // Handling the validation errors
        res.status(400).send(error);
    }
});

module.exports = router;