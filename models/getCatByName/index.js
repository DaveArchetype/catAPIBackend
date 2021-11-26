const axios = require("axios");
const cheerio = require("cheerio");
const url = "https://dinosaurpictures.org/";

// this gets the info about a random cat
async function getCatByName(name) {
  const { data } = await axios
    .get(`${url}${name}-pictures`)
    .then()
    .catch(function (error) {
      console.log("Show error notification!");
      return "Error";
    });
  try {
    const $ = cheerio.load(data);
    let title = $("h1").text();
    let babyImage = $(`img[title=${title.split(" ")[0]}]`)[0].attribs.src;
    let babyDescription = $(".intro").text();
    let adultImage =
      "https://upload.wikimedia.org/wikipedia/commons/6/6c/Assorted_stacked_automotive_tires.jpg";
    let adultDescription =
      "A tire (American English) or tyre (British English) is a ring-shaped component that surrounds a wheel's rim to transfer a vehicle's load from the axle through the wheel to the ground and to provide traction on the surface over which the wheel travels. Most tires, such as those for automobiles and bicycles, are pneumatically inflated structures, which also provide a flexible cushion that absorbs shock as the tire rolls over rough features on the surface. Tires provide a footprint, called a contact patch, that is designed to match the weight of the vehicle with the bearing strength of the surface that it rolls over by providing a bearing pressure that will not deform the surface excessively. ";
    return {
      name: title.split(" ")[0],
      babyImage:
        babyImage != "https://i.imgur.com/Vmxsx1H.gif"
          ? babyImage
          : "https://cardfool.s3.amazonaws.com/cards/assets/low_Uplifting_cover.jpg",
      babyDescription: babyDescription,
      adultImage: adultImage,
      adultDescription,
    };
  } catch (e) {
    return "Error";
  }
}

module.exports = getCatByName;
