const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const multer = require("multer");
const{storage}=require("../claudeConfig.js")
const upload = multer({storage});
const {
  isLoggedIn,
  isOwner,
  validateListing,
  validateReview,
} = require("../middlewear.js");
const listingController = require("../controllers/listings.js");
// index route
router.get("", wrapAsync(listingController.index));
//  new route
router.get("/new", isLoggedIn, listingController.renderNewForm);
// search Route
router.get("/search", wrapAsync(async (req, res) => {
  let { query } = req.query;

  if (!query || query.trim() === "") {
    req.flash("error", "Please enter something to search!");
    return res.redirect("/listings");
  }

  let allList = await Listing.find({
    $or: [
      { title: { $regex: query, $options: "i" } },
      { location: { $regex: query, $options: "i" } },
      { country: { $regex: query, $options: "i" } },
    ]
  });

  if (allList.length === 0) {
    req.flash("error", `No listings found for "${query}"`);
    return res.redirect("/listings");
  }

  res.render("listings/index.ejs", { allList });
}));
// Suggestions API route
router.get("/suggestions", wrapAsync(async (req, res) => {
  let { query } = req.query;

  if (!query || query.trim() === "") {
    return res.json([]);
  }

  let matches = await Listing.find({
    $or: [
      { title: { $regex: query, $options: "i" } },
      { location: { $regex: query, $options: "i" } },
      { country: { $regex: query, $options: "i" } },
    ]
  }).limit(5).select("title location country");

  res.json(matches);
}));
// show route
router.get("/:id", wrapAsync(listingController.showListing));
// create route
router.post(
  "/",
  isLoggedIn,
  upload.single("listing[image]"),
  validateListing,
  wrapAsync(listingController.createListing)
);
// edit route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.editListing),
);
// update route
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  upload.single("listing[image]"),
  validateListing,
  wrapAsync(listingController.updateRoute),
);
// Delete route
router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
   upload.single("listing[image]"),
     validateListing,
  wrapAsync(listingController.deleteRoute),
);


module.exports = router;
