const { response } = require("express");
const express = require("express");

// We ensure that the file runs and mongoose connects to the database. 
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;


app.use((req, res, next) => {
    res.status(503).send("The site is under maintenance, try again soon...");
});

// // Register a new middleware function to run (the do something part)
// app.use((req, res, next) => {
//     if (req.method === "GET"){
//         res.send("GET requests are disabled");
//     }
//     else {
//         next();
//     }
// });


// Automatically parses any incoming json to on object to access it to our request handler.
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

/**
 * 
 * Without express middleware: new request --> run route handler
 * 
 * With express middleware: new request --> do something --> run route handler
 * 
 */

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});