require("dotenv").config();

const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

function onConnection(socket) {
  socket.on("drawing", (data) => socket.broadcast.emit("drawing", data));

  setInterval(() => {
    io.emit("clearScreen", { clear: true });
  }, 30000);
}

io.on("connection", onConnection);

http.listen(port);
