import express from "express";
import connectdb from "./db/connectdb.js";
import auth from "./routes/auth.js";
import chats from "./routes/chat.js";
import cors from "cors";
import http from 'http';
import { Server as SocketIoServer } from 'socket.io';

const app = express();
const server = http.createServer(app);
const port = process.env.port || 3001;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1/27017"
connectdb(DATABASE_URL);

app.use(express.json());
app.use(cors());
app.use("/user", auth);
app.use("/chat", chats);

const io = new SocketIoServer(server,{
    cors : {
        origin : "http://localhost:5173",
        methods : ["GET, POST"],
    }
});
io.on('connection', (socket) => {

    console.log('A user connected');

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});


try {
    app.listen(port, () => {
        console.log(`server listening at http://localhost:${port}`);
    })
} catch (error) {
    console.log("port problem : ", error)
}