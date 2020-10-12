require("../src/db/mongoose");
const User = require("../src/models/user");

// 5f82c725e230b6512b5f18f5
// findByIdAndUpdate()
User.findByIdAndUpdate("5f82c725e230b6512b5f18f5", {age: 33},).then((user) => {
    console.log(user);
    return User.countDocuments({age: 33});
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});