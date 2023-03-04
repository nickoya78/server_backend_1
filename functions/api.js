const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    users: [
      "userOne: James Bond",
      "userTwo: Will Smith",
      "userThree: Sara Pain",
      "userFour: Mike Tyson",
    ],
  });
});

app.use(cors());
app.use(`/.netlify/functions/api`, router);
module.exports.handler = serverless(app);
