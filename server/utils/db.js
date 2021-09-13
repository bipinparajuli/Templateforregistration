const mongoose = require("mongoose");

let mongoDB;
if (process.env.DATABASE_URL) {
    mongoDB = process.env.DATABASE_URL;
} else {
    const { MDB_URL } = require("./secrets");
    mongoDB = MDB_URL;
}

mongoose
    .connect("mongodb://localhost:27017/emailverification", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => console.log("-----> mongoDB connected..."))
    .catch((err) =>
        console.log("-----> Error trying to connect to mongoDB: ", err)
    );

mongoose.connection.on(
    "error",
    console.error.bind(console, "-----> mongoDB connection error")
);
