const express = require("express");
const bodyParser = require("body-parser");
const Sequelize = require('sequelize');
const op = Sequelize.Op;
const passport = require("passport");
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');
const cors = require("cors");
const app = express();
app.use(passport.initialize());
app.use(passport.session());
var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/products', productRouter);
app.use('/api/user', userRouter);

app.get("*", async (req, res) => {
  res.send(':)');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});