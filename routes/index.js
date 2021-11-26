var getRandomCat = require("./../models/getRandomCat");
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  // get random cat
  res.json({
    success: true,
    message: `Here is your random cat!`,
    payload: await getRandomCat(),
  });
});

module.exports = router;
