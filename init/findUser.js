const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);
require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");
const User = require("../models/user.js");

mongoose.connect(process.env.ATLASDB_URL).then(async () => {
  const users = await User.find({});
  users.forEach(u => console.log(u.username, "->", u._id.toString()));
  process.exit();
});