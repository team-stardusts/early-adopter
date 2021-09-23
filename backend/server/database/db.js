import "../../config/env-config";
import mongoose from "mongoose";
import News from "./models/NewsSchema";

const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    /*useCreateIndex: true,
    useFindAndModify: false,*/
});

const db = mongoose.connection;

const handleOpen = () => console.log("Connect to DB");
const handleError = (error) => console.log(`Error on DB Connection: ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
