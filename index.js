const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.listen(8080, function () {
  console.log("listening on 8080");
});

app.post("/user", (req, res) => {
  console.log(req.body.number);
  console.log(req.body.text);
});
