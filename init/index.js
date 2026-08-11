const mongoose = require("mongoose");
const initData = require("./data.js");
const listing = require("../models/listing.js");
const url = "mongodb://127.0.0.1:27017/wonderlust";

main()
  .then((result) => {
    console.log("Mongodb is connected successful");
  })
  .catch((error) => {
    console.log(error);
  });
async function main() {
  await mongoose.connect(url);
}
const initDb = async () => {
  await listing.deleteMany({});
  const updatedData = initData.map((obj) => ({
    ...obj,
    owner: "6a6f201ebcbd947c84703bdb",
  }));
  const result = await listing.insertMany(updatedData);
  console.log(result);
};
initDb();

