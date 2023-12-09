import express from "express";
import connectdb from "./db/connectdb.js";
import auth from "./routes/auth.js";
import chats from "./routes/chat.js";
import cors from "cors";

const app = express();
const port = process.env.port || 3001;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1/27017"
connectdb(DATABASE_URL);


app.use(express.json());
app.use(cors());
app.use("/user", auth);
app.use("/chats", chats);

try {
    app.listen(port, () => {
        console.log(`server listening at http://localhost:${port}`);
    })
} catch (error) {
    console.log("port problem : ", error)
}