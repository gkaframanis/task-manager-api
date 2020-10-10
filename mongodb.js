// CRUD OPERATIONS (create, read, updata, delete)

// importing the module we installed
const mongodb = require("mongodb");
// to initialize the connection. The MongoClient
const MongoClient = mongodb.MongoClient;

// The connection url (localhost) and the database we are trying to connect to. 
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-app";

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log("Unable to connect to database!");
    }
    // The database is created automatically and we get a reference.
    const db = client.db(databaseName);

    // // insertOne is asynchronous, we insert just one document
    // db.collection("users").insertOne({
    //     name: "Gregory",
    //     age: 32
    // }, (error, result) => {
    //     if (error) {
    //         return console.log("Unable to insert user.");
    //     }
    //     // ops --> array of documents
    //     console.log(result.ops);
    // });

    // db.collection("users").insertMany([
    //     {
    //         name: "Jen",
    //         age: 28
    //     },
    //     {
    //         name: "Gunter",
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log("Unable to insert documents!");
    //     }
    //     console.log(result.ops);
    // });

    db.collection("tasks").insertMany([
        {
            description: "Clean the house",
            completed: true
        },
        {
            description: "Grocery shopping",
            completed: false,
        },
        {
            description: "Laundry",
            completed: false
        }
    ], (error, result) => {
        if (error) {
            return ("Tasks were not inserted successfully...");
        }
        console.log(result.ops);
    });
});

