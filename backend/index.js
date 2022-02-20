import express from "express";
import cors from "cors";

// const express = require("express");
const app = express();
const port = 5000;
app.use(cors());
app.use("/images/", express.static("images"));
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.get("/", (req, res) => {
  //   let objektas = {
  //     failas: "javascript.mjs",
  //   };
  //   res.send(objektas);
  const status = ["Broken Clouds", "Mostly Sunny"];
  const oras = {
    status: status[random(0, 1)],
    degrees: random(10, 25),
    feeling: random(13, 27),
    humidity: random(50, 90),
  };

  res.json(oras);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port} BACKEND`);
});
