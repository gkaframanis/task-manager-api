const { response } = require("express");
const express = require("express");

// We ensure that the file runs and mongoose connects to the database. 
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

const multer = require("multer");
const upload = multer({
    dest: "images",
    limits: {
        fileSize: 1000000 // Max size restriction
    },
    fileFilter(req, file, cb) {
        // if (!file.originalname.endsWith(".pdf")) {
        //     return cb(new Error("Please upload a PDF"));
        // }
        // cb(undefined, true);
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error("Please upload a doc or docx file"));
        }
        cb(undefined, true);
    }
});
app.post("/upload", upload.single("upload"), (req, res) => {
    res.send();
});

// Automatically parses any incoming json to on object to access it to our request handler.
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

