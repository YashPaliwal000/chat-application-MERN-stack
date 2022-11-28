const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

const PORT = process.env.PORT || 5005;
app.listen(PORT, console.log(`Server started at  ${PORT}`));
