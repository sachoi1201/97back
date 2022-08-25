const express = require("express");
const app = express();
const cors = require("cors");
const models = require("./models");
const { response } = require("express");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8080;

app.listen(port, () => {
  models.sequelize
    .sync()
    .then(() => {
      console.log("DB 연결 성공!");
    })
    .catch((err) => {
      console.error(err);
      console.log("DB 연결 에러ㅠ");
      process.exit();
    });
});
app.post("/user", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const number = req.body.number;
  const text = req.body.text;

  models.Product.create({
    number,
    text,
  })
    .then((result) => {
      console.log(result, "성공");
      res.send({
        result,
      });
    })
    .catch((error) => {
      res.send("에러발생");
    });
  console.log(req.body.number);
  console.log(req.body.text);
});

app.get("/question", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  models.Product.findAll().then((result) => {
    res.send({
      products: result,
    });
  });
});
