var express = require("express");
const getRandomCat = require("./../models/getRandomCat");
const getCatByName = require("../models/getCatByName");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  const { name } = req.query;
  // get random cat
  if (name) {
    res.json({
      success: true,
      message: `Here is your random cat!`,
      payload: await getCatByName(name),
    });
  } else {
    res.json({
      success: true,
      message: `Here is your random cat!`,
      payload: await getRandomCat(),
    });
  }
});

module.exports = router;
