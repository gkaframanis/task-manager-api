const mongoose = require("mongoose");


// We connect to the database
mongoose.connect("mongodb://127.0.0.1:27017/task-app-api", {
    useNewUrlParser: true,
    useCreateIndex: true
});


// We define a model
const User = mongoose.model("User", {
    name: {
        type: String,
    },
    age: {
        type: Number
    }
});

// We create an instance of the model
const me = new User({
    name: "Gregory",
    age: 33
});

// // We save the instance in the database
// me.save().then(() => {
//     console.log(me);
// }).catch(() => {
//     console.log("Error!", error);
// });

const Task = mongoose.model("Task", {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
});

const task = new Task({
    description: "Learn the Mongoose Library",
    completed: false
});

task.save().then(() => {
    console.log(task);
}).catch(() => {
    console.log("Error!", error);
});