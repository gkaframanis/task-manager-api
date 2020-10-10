// CRUD OPERATIONS (create, read, updata, delete)

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-app";

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {

    if (error) {
        return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);

    // Find an indivindual document (not finding one returns null | if there are multiple documents returns the first one back)

    db.collection("users").findOne({ _id: new ObjectID("5f817f5864bffe47d824febf") }, (error, user) => {
        if (error) {
            return console.log("Unable to fetch the user...");
        }

        console.log(user);
    });
    
    // We get back a cursor, not a callback function
    db.collection("users").find({ age: 32 }).toArray((error, users) => {
        console.log(users);
    });

    // We get back a cursor, not a callback function
    db.collection("users").find({ age: 32 }).count((error, count) => {
        console.log(count);
    });

    db.collection("tasks").findOne({ _id: new ObjectID("5f817be442764f3ab41a83ad") }, (error, task) => {
        if (error) {
            return console.log("Unable to fetch the task...");
        }
        console.log(task);
    });

    db.collection("tasks").find({ completed: false }).toArray((error, tasks) => {
        console.log(tasks);
    });
});

