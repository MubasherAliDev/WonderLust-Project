const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

require("dotenv").config({ path: "../.env" });

const mongoose = require("mongoose");
const axios = require("axios");
const initData = require("./data.js");
const listing = require("../models/listing.js");

const url = process.env.ATLASDB_URL;
const geoApiKey = process.env.GEOAPIFY_KEY;

main()
  .then((result) => {
    console.log("Mongodb is connected successful");
    initDb();
  })
  .catch((error) => {
    console.log(error);
  });

async function main() {
  await mongoose.connect(url);
}

const getGeometry = async (location, country) => {
  const response = await axios.get("https://api.geoapify.com/v1/geocode/search", {
    params: {
      text: `${location}, ${country}`,
      apiKey: geoApiKey,
    },
  });

  const feature = response.data.features[0];
  if (feature) {
    return feature.geometry;
  }
  // agar Geoapify se kuch na mile to fallback
  return { type: "Point", coordinates: [0, 0] };
};

const initDb = async () => {
  const updatedData = [];

  for (let obj of initData) {
    const geometry = await getGeometry(obj.location, obj.country);
    console.log(`Geocoded: ${obj.title} -> ${JSON.stringify(geometry.coordinates)}`);

    updatedData.push({
      ...obj,
      owner: "6a7be057c05cf53b0cc7429a",
      geometry,
    });
  }

  const result = await listing.insertMany(updatedData);
  console.log(`${result.length} listings inserted into Atlas`);
  mongoose.connection.close();
};