const Listing=require("../models/listing");
const axios = require("axios");



module.exports.index = async (req, res) => {
  const { category } = req.query;
  let allList;
  if (category) {
    allList = await Listing.find({ category: category });
  } else {
    allList = await Listing.find({});
  }
  res.render("listings/index.ejs", { allList });
};
module.exports.renderNewForm=(req, res) => {
  res.render("listings/new.ejs");
};
module.exports.showListing=async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
      .populate({path:"reviews",
        populate : {
        path:"author",
        },
      })
      .populate("owner");
    if (!listing) {
      req.flash("error", " Listing you request is not exit!");
      return res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
  };
// module.exports.createListing=async (req, res) => {
//  let response = await axios.get(
//   "https://api.geoapify.com/v1/geocode/search",
//   {
//     params: {
//       text: "Sialkot, Pakistan",
//       apiKey: process.env.GEOAPIFY_KEY,
//     },
//   }
// );

// console.log(response.data);


//   let url=req.file.path;
//   let filename= req.file.filename;
//     // let result = ListingSchema.validate(req.body);
//     // if (result.error) {
//     //   let errMsg = result.error.details.map((el) => el.message).join(", ");
//     //   throw new ExpressError(400, errMsg);
//     // }
//     const newlist = new Listing(req.body.listing);
//     newlist.owner=req.user._id;
//     newlist.image={url,filename};
//     await newlist.save();
//     req.flash("success", "New Listing Creted!");
//     res.redirect("/listings");
//   };
module.exports.createListing = async (req, res, next) => {
  try {
    let response = await axios.get(
      "https://api.geoapify.com/v1/geocode/search",
      {
        params: {
          text: `${req.body.listing.location}, ${req.body.listing.country}`,
          apiKey: process.env.GEOAPIFY_KEY,
        },
      }
    );

    if (!response.data.features || !response.data.features.length) {
      req.flash("error", "Location not found, please enter a valid location.");
      return res.redirect("/listings/new");
    }

    let url = req.file.path;
    let filename = req.file.filename;

    const newlist = new Listing(req.body.listing);
    newlist.owner = req.user._id;
    newlist.image = { url, filename };
    newlist.geometry = response.data.features[0].geometry;

    let save=await newlist.save();
    console.log(save)
    req.flash("success", "New Listing Creted!");
    res.redirect("/listings");

  } catch (err) {
    console.log("GEOAPIFY ERROR:", err.response ? err.response.data : err.message); // ✅ asli error yahan milegi
    req.flash("error", "Something went wrong while creating listing.");
    res.redirect("/listings/new");
  }
};
module.exports.editListing=async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", " Listing you request is not exit!");
      return res.redirect("/listings");
    }
    let orginalImageUrl=listing.image.url;
      orginalImageUrl = orginalImageUrl.replace("/upload", "/upload/,w_250");
    res.render("listings/edit.ejs", { listing,orginalImageUrl });
  };
module.exports.updateRoute=async (req, res) => {

    // if (result.error) {
    //   let errMsg = result.error.details.map((el) => el.message).join(", ");
    //   throw new ExpressError(400, errMsg);
    // }
    let { id } = req.params;
    let listing=await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    if(typeof req.file !== "undefined"){  
    let url=req.file.path;
  let filename= req.file.filename;
    listing.image={url,filename}
    await listing.save();
    }
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
  };

  module.exports.deleteRoute=async (req, res) => {
    let { id } = req.params;
    let deleteList = await Listing.findByIdAndDelete(id);
    console.log(deleteList);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
  };