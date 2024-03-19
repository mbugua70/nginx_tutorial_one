const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Let's learn nginx for beginners");
});

app.listen(4000, () => {
  console.log(`Listening to port ${4000}`);
});
