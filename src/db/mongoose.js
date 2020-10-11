const mongoose = require("mongoose");
const validator = require("validator");


// We connect to the database
mongoose.connect("mongodb://127.0.0.1:27017/task-app-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});


// We define a model
const User = mongoose.model("User", {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid...");
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (validator.contains(value, "password", {ignoreCase: true})) {
                throw new Error("The password cannot contain the word 'password'!");
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error("Age must me a positive number...");
            }
        }
    }
});

// // We create an instance of the model
// const me = new User({
//     name: "  Gregory  ",
//     email: " MyEmail@gmail.com  ",
//     password: "phone098!"
// });

// // We save the instance in the database
// me.save().then(() => {
//     console.log(me);
// }).catch((error) => {
//     console.log("Error!", error);
// });

const Task = mongoose.model("Task", {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const task = new Task({
    description: "Go to the gym.",
});

task.save().then(() => {
    console.log(task);
}).catch((error) => {
    console.log("Error!", error);
});