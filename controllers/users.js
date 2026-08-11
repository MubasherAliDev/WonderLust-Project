const User = require("../models/user.js");
module.exports.renderSignupForm=(req, res) => {
  res.render("users/signup.ejs");
}
module.exports.signup=async (req, res) => {
    try {
      let { username, email, password } = req.body;
      const newUser = new User({ username, email });
      const registerUser = await User.register(newUser, password);
      console.log(registerUser);
      req.login(registerUser,(err)=>{
        if(err){
          return(err)
        }
        req.flash("success", "Welcome in  WonderLust");
      res.redirect("/listings");
      })
      
    } catch (error) {
      req.flash("error", error.message);
      res.redirect("/signup");
    }
  }
  module.exports.renderLoginForm=(req, res) => {
  res.render("users/login.ejs");
}

module.exports.login=  async (req, res) => {
    console.log("redirectUrl value:", res.locals.redirectUrl);   // debug line
    req.flash("success", "Welcome in WonderLust");
    res.redirect(res.locals.redirectUrl || "/listings");
  };
  module.exports.logout=(req,res)=>{
  req.logout((err)=>{
    if(err){
     return next(err)
    }
    req.flash("success","You are Logout")
    res.redirect("/listings")
  })
}