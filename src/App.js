const express = require("express");
const app = express();

app.use("/hello", (req, res) => {
  res.send("Hello World !!");
});

app.use("/test", (req, res) => {
  res.send("This is Test Route");
});

app.listen(7777, () => {
  console.log("Server is Successfully listening on Port 7777...");
});
