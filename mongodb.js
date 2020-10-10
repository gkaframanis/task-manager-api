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

    db.collection("users").insertOne({
        name: "Gregory",
        age: 32
    });
});

