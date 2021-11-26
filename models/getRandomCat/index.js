// const puppeteer = require("puppeteer");
const axios = require("axios");
const cheerio = require("cheerio");
const url = "https://dinosaurpictures.org/random";

// this gets the info about a random cat
async function getRandomCat() {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  let title = $("h1").text();
  console.log(title);
  return title;
}

module.exports = getRandomCat;
