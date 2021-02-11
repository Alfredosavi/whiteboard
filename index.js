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

let user = {
  id: "",
  nick: "",
};

app.use("/", (req, res) => {
  res.render("index.html");
});

io.on("connection", (socket) => {
  socket.on("drawing", (data) => {
    socket.broadcast.emit("drawing", data);
    drawings.push(data);
  });

  socket.on("user", (data) => {
    console.log(data);
    user = data;
    users.push(user);
    socket.broadcast.emit("user", data);
  });

  socket.on("disconnect", (reason) => {
    users.slice(
      users.findIndex((elem) => elem.id === socket.id),
      1
    );
    socket.broadcast.emit("history_users", users);
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
