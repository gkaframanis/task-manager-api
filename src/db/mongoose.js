const mongoose = require("mongoose");


// We connect to the database
mongoose.connect("mongodb://127.0.0.1:27017/task-app-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});