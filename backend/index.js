import express from "express";
import connectdb from "./db/connectdb.js";
import auth from "./routes/auth.js";
import chats from "./routes/chat.js";
import cors from "cors";
import http from 'http';
import { Server as SocketIoServer } from 'socket.io';

const app = express();
// const server = http.createServer(app);
const port = process.env.port || 3001;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1/27017"
connectdb(DATABASE_URL);

app.use(express.json());
app.use(cors());
app.use("/user", auth);
app.use("/chat", chats);

let server;

try {
    server = app.listen(port, () => {
        console.log(`server listening at http://localhost:${port}`);
    })
} catch (error) {
    console.log("port problem : ", error)
}
const io = new SocketIoServer(server,{
    cors : {
        origin : "*",
        methods : ["GET, POST"],
    }
});
try {
    let userArr = [];
    io.on('connection', (socket) => {
        console.log('A user connected', socket.id);

        socket.on("setup", user => {
            if(!userArr.some(item => item.user == user) && user.length > 0){
                userArr = [...userArr, {user, socketId : socket.id}]
                socket.join(user);
                console.log(user, socket.id);
            }
            socket.emit("connected", userArr);
        })

        socket.on('chat message', (msg) => {
            io.emit('chat message', msg);
        });

        socket.on('disconnect', () => {
            
        });
    });
} catch (error) {
    console.log(error)
}


