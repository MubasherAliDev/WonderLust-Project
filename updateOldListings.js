if(process.env.NODE_ENV != "production"){
  require('dotenv').config();
}

const mongoose = require("mongoose");
const axios = require("axios");
const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wonderlust";
const geoApiKey = process.env.GEOAPIFY_KEY;

console.log("API KEY:", geoApiKey);

main()
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);

  const listings = await Listing.find({ geometry: { $exists: false } });
  console.log(`${listings.length} listings mile jinme coordinates missing hain`);

  for (let listing of listings) {
    try {
      const response = await axios.get("https://api.geoapify.com/v1/geocode/search", {
        params: {
          text: `${listing.location}, ${listing.country}`,
          apiKey: geoApiKey,
        },
      });

      const feature = response.data.features[0];
      if (feature) {
        listing.geometry = feature.geometry;
        await listing.save();
        console.log(`Updated: ${listing.title}`);
      } else {
        console.log(`Coordinates nahi mile: ${listing.title}`);
      }
    } catch (err) {
      console.log(`Error for ${listing.title}:`, err.message);
    }
  }

  mongoose.connection.close();
  console.log("Sab update ho gaya!");
}