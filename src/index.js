const { response } = require("express");
const express = require("express");

// We ensure that the file runs and mongoose connects to the database. 
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

// Automatically parses any incoming json to on object to access it to our request handler.
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

