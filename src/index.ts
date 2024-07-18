import express from "express";
import http from "http";
import dotenv from "dotenv";
import cors from "cors";

import { Server } from "socket.io";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());

const server = http.createServer(app);

// WebSocket Server - wss
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log("New User connected.");

    socket.on("disconnect", () => {
        console.log("User disconnected.");
    })
});

server.listen(PORT, () => {
    console.log(`Server is listening at PORT: ${PORT} ...`);
});
