const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log("listening on 8080");
});

app.post("/user", (req, res) => {
  console.log(req.body.number);
  console.log(req.body.text);
});
