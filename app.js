const mongoose = require("mongoose");
var express = require("express"),
 	app = express(),
 	bodyParser = require("body-parser"),
	methodOverride = require("method-override"),
	User = require("./models/user"),
	flash = require("connect-flash"),
	moment = require("moment"),
	passport = require("passport"),
	localStrategy = require("passport-local"),
	passportLocalMongoose = require("passport-local-mongoose"),
	Campground = require("./models/campground"),
	Comment    = require("./models/comment"),
	SeedDb 	   = require("./seeds"),
	campgroundRoutes = require("./routes/campgrounds"),
	commentRoutes = require("./routes/comments"),
	indexRoutes = require("./routes/index");



	
mongoose.connect('mongodb://localhost:27017/yelp_campp',{
	useNewUrlParser:true,
	useUnifiedTopology:true
})
.then(() => console.log('connected to db!!'))
.catch(error => console.log(error.message));


// SeedDb();


//Passport Configuartion
app.use(require("express-session")({
	secret:"rusty is the best dog in the world",
	resave:false,
	saveUninitialized:false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.locals.moment = require("moment");
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//it is used on every route
app.use(function(req,res,next){
	res.locals.currentuser = req.user;
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	next();
});
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine","ejs")
app.use(express.static(__dirname +"/public"));
app.use(methodOverride("_method"));

app.use(indexRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);
app.use("/campgrounds",campgroundRoutes);

// this list is used when we don't have database  
// var campgrounds = [
// 		{name:"salman greek",image:"https://billypenn.com/wp-content/uploads/2018/06/campsite-worthingtonstateforest-300x300.jpg"},
// 		{name:"grantie hill",image:"https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/narkanda-himachal-pradesh-201801-1517379877-300x300.jpg"},
// 		{name:"Mountain got rest",image:"https://blog-assets.thedyrt.com/uploads/2019/04/shutterstock_632816162-300x300.jpg"},
// 	{name:"salman greek",image:"https://billypenn.com/wp-content/uploads/2018/06/campsite-worthingtonstateforest-300x300.jpg"},
// 		{name:"grantie hill",image:"https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/narkanda-himachal-pradesh-201801-1517379877-300x300.jpg"},
// 		{name:"Mountain got rest",image:"https://blog-assets.thedyrt.com/uploads/2019/04/shutterstock_632816162-300x300.jpg"},
// 	{name:"salman greek",image:"https://billypenn.com/wp-content/uploads/2018/06/campsite-worthingtonstateforest-300x300.jpg"},
// 		{name:"grantie hill",image:"https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/narkanda-himachal-pradesh-201801-1517379877-300x300.jpg"},
// 		{name:"Mountain got rest",image:"https://blog-assets.thedyrt.com/uploads/2019/04/shutterstock_632816162-300x300.jpg"}
		
// ]




// Campground.create({
// 	name:"grantie hill",
// 	image:"https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/narkanda-himachal-pradesh-	  201801-1517379877-300x300.jpg",
// 	description:"Grantie hill campground is the bestest where no batthroom , no water only nature is there"
// 	},function(err,campground){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log("Newly Created campground");
// 		console.log(campground);
// 	}
	
//  });





app.listen(process.env.PORT || 3000, process.env.IP,function(){
	console.log("yelcamp server has started");
});