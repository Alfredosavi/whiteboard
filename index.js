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

io.on("connection", (socket) => {
  socket.on("drawing", (data) => {
    socket.broadcast.emit("drawing", data);
    drawings.push(data);
  });

  socket.on("user", (data) => {
    users.push(data);
    console.log("jisof");
    socket.broadcast.emit("user", data);
  });

  socket.emit("history_drawings", drawings);
  socket.emit("history_users", users);

  setInterval(() => {
    drawings = [];
    users = [];

    io.emit("clearScreen", { clear: true });
  }, process.env.TIME);
});

server.listen(process.env.PORT || 3000);
