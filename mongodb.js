// CRUD OPERATIONS (create, read, updata, delete)

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-app";

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {

    if (error) {
        return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);

    // db.collection("users").deleteMany(
    // {
    //     age: 26
    // }).
    // then((result) => {
    //     console.log(result.deletedCount);
    // }).catch((error)=> {
    //     console.log(error);
    // });

    db.collection("tasks").deleteOne(
        {
            description: "Clean the house"
        }
    ).then((result) => {
        console.log(result.deletedCount);
    }).catch((error) => {
        console.log(error);
    });
});

