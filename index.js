require("dotenv").config();

const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

let drawings = [];

function onConnection(socket) {
  socket.on("drawing", (data) => {
    socket.broadcast.emit("drawing", data);
    drawings.push(data);
  });

  socket.emit("history_drawings", drawings);

  setInterval(() => {
    drawings = [];
    io.emit("clearScreen", { clear: true });
  }, 40000);
}

io.on("connection", onConnection);

http.listen(port);
