const { response } = require("express");
const express = require("express");

// We ensure that the file runs and mongoose connects to the database. 
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

// Automatically parses any incoming json to on object to access it to our request handler.
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);


app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

const bcrypt = require("bcryptjs");

const myFunction = async () => {
    const password = "Red12345!";
    const hashedPassword = await bcrypt.hash(password, 8); // 8 rounds to be executed
    console.log(password);
    console.log(hashedPassword);

    const isMatch = await bcrypt.compare("red12345!", hashedPassword);
    console.log(isMatch);
};

myFunction();