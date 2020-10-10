// CRUD OPERATIONS (create, read, updata, delete)

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-app";

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {

    if (error) {
        return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);

    // db.collection("users").updateOne({
    //     _id: new ObjectID("5f817a6ea7c97f3430624352")
    // },
    // {
    //     // $set: {
    //     //     name: "Maria"
    //     // }
    //     $inc: {
    //         age: 1
    //     }
    // }
    // ).then((result) => {
    //     console.log(result.modifiedCount);
    // }).catch((error) => {
    //     console.log(error);
    // });

    db.collection("tasks").updateMany(
        {
            completed: false
        },
        { 
            $set: 
                { 
                    completed: true
                } 
        }
    ).then((result) => {
        console.log(result.modifiedCount);
    }).catch((error) => {
        console.log(error);
    });
});

