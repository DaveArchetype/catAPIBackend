var express = require("express");
const getRandomCat = require("./../models/getRandomCat");
const getCatByName = require("../models/getCatByName");
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

router.get("/", async function (req, res, next) {
  res.json({
    success: true,
    message: `Here is your random cat!`,
    payload: await getCatByName(),
  });
});

module.exports = router;
