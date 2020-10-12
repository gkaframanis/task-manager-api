require("../src/db/mongoose");
const Task = require("../src/models/task");


// 5f82cc75a3837c65969651b1
// Model.findByIdAndDelete()

Task.findByIdAndDelete("5f82cc75a3837c65969651b1").then((task) => {
    console.log(task);
    return Task.countDocuments({completed: false});
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});