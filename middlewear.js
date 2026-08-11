const Listing = require("./models/listing");
const ExpressError = require("./utils/ExpressError.js");
const Review = require("./models/review.js");
const { ListingSchema,reviewSchema } = require("./Schema.js");
module.exports.isLoggedIn=(req,res,next)=>{
  console.log(req.user)

      if (!req.isAuthenticated()){
        //redrect user in login proocess 
req.session.redirectUrl=req.originalUrl;
req.flash("error","You must be logged in first")
return res.redirect("/login")
  }
  next();
}

module.exports.saveRedirect=(req,res,next)=>{
if(req.session.redirectUrl){
  res.locals.redirectUrl=req.session.redirectUrl;
}
next();
}

module.exports.isOwner=async(req,res,next)=>{
  let {id}=req.params;
  let listing=await Listing.findById(id);
  if(!listing.owner.equals(res.locals.currUser._id)){
    req.flash("error","You are not Publisher of this Listing")
    return res.redirect(`/listings/${id}`);
  }
  next();
}
module.exports.isReviewAuthor=async(req,res,next)=>{
  let {id,reviewId}=req.params;
  let review=await Review.findById(reviewId);
  if(!review.author.equals(res.locals.currUser._id)){
    req.flash("error","You are not Author of this Review")
    return res.redirect(`/listings/${id}`);
  }
  next();
}

// server side valadition
module.exports.validateListing = (req, res, next) => {
  let { error } = ListingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};
// review Valdation
module.exports.validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};