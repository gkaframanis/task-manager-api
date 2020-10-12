require("../src/db/mongoose");
const Task = require("../src/models/task");


// 5f82cc75a3837c65969651b1
// Model.findByIdAndDelete()

// Task.findByIdAndDelete("5f82cc75a3837c65969651b1").then((task) => {
//     console.log(task);
//     return Task.countDocuments({completed: false});
// }).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed: false});
    return count;
};

deleteTaskAndCount("5f82c239163b203deb76518c").then((count) => {
    console.log(count);
}).catch((error) => {
    console.log(error);
});