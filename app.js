const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

if(process.env.NODE_ENV !="production"){
require('dotenv').config();
}
if(process.env.NODE_ENV !="production"){
require('dotenv').config();
}

console.log(process.env.SECRET)

const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Listing=require("./models/listing.js")
const path=require("path");
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate");
const wrapAsync=require("./utils/wrapAsync.js")
const ExpressError=require("./utils/ExpressError.js")
const {ListingSchema,reviewSchema}=require("./Schema.js")
const Review=require("./models/review.js")


const session=require("express-session")
const MongoStore = require("connect-mongo").default;
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/user.js");

const listingsRouter=require("./routes/listings.js")
const reviewsRouter=require("./routes/review.js")
const userRouter=require("./routes/user.js")

const dbUrl=process.env.ATLASDB_URL;

main().then((result)=>{
  console.log("Mongodb is connected successful")
}).catch((error) => {
  console.log(error);
  
});
async function main() {
  await mongoose.connect(dbUrl,{
    serverSelectionTimeoutMS: 30000,
    socketTimeoutMS: 45000,
    maxPoolSize: 10,
    family: 4,
  })
};

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"))
app.engine("ejs",ejsMate)
app.use(express.static(path.join(__dirname,"/Public")))

const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});

store.on("error", (err) => {
  console.log("Error in Mongo Session:", err);
});

const sessionOptions={
  store,
  secret:process.env.SECRET,
  resave:false,
  saveUninitialized: true,
  cookie:{
    expires:Date.now()+7*24*60*60*1000,
    maxAge:7*24*60*60*1000,
    httpOnly:true,
  },
};



// this is cookies code to use cookie in project
app.use(session(sessionOptions));
app.use(flash())
// passport use for login and signup in website 
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser())
  passport.deserializeUser(User.deserializeUser())

app.use((req,res,next)=>{
  res.locals.currUser = req.user; 
  res.locals.messages=req.flash("success")
   res.locals.error=req.flash("error")
  next()
})

app.use("/listings",listingsRouter);
app.use("/listings/:id/reviews",reviewsRouter)
app.use("/",userRouter);

// (app.get("/testlisting",(req ,res)=>{
//   let samplelisting=new listing({
//     title:"My Home",
//     description:"Bybthe beach",
//     price:3000,
//     location:"Punjab",
//     country:"Pakistan"
//   });
//   samplelisting.save().then((result) => {
//     console.log(result)
//   })
//   res.send("successful saved in db")
// }))
app.get("/", (req, res) => {
  res.redirect("/listings");
});

app.all('/{*path}',(req,res,next)=>{
  next(new ExpressError(404,"Page Not Found"))
});

app.use((err, req, res, next) => {
  if (err.name === "CastError") {
    err = new ExpressError(404, "Listing not found!")
  }
  let { status = 500, message = "Something went Wrong" } = err;
  res.status(status).render("Error.ejs", { message });
});

app.listen(3000,()=>{
  console.log("port is listening on 3000")
})