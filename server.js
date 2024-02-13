require("dotenv").config();
const http = require("http");
const express = require("express");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

//Socket.io
io.on("connection", (socket) => {
  socket.on("user-message", (message) => {
    io.emit("chat-message", message);
  });
});

app.use(express.static("public"));

const PORT = process.env.SERVER_PORT;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
