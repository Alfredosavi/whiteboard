require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

let drawings = [];
let users = [];

app.use("/", (req, res) => {
  res.render("index.html");
});

function onConnection(socket) {
  socket.on("drawing", (data) => {
    socket.broadcast.emit("drawing", data);
    drawings.push(data);
  });

  socket.on("user", (user) => {
    users.push(user);
    socket.broadcast.emit("new_user", users);
  });

  socket.emit("history_drawings", drawings);

  setInterval(() => {
    drawings = [];
    users = [];

    io.emit("clearScreen", { clear: true });
  }, process.env.TIME);
}

io.on("connection", onConnection);

server.listen(process.env.PORT || 3000);
