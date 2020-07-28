const mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment")

var data=[
	{
		name:"Desert Campground",
		image:"https://rawadventuresolutions.com/wp-content/uploads/2019/07/CampgroundsAndAdventureParkProjects-1-300x300.jpg",
		description:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem "
		
		
	},
	{
		name:"night Campground",
		image:"https://q-xx.bstatic.com/xdata/images/hotel/max300/190276746.jpg?k=3f3fdf409a8af253bbc3e1b3b4ef6ef9f3c9e6f88cfffe84c6194eaea8695b03&o=",
		description:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem "
		
	},
	{
		name:"Hill Top Campground",
		image:"https://billypenn.com/wp-content/uploads/2018/06/campsite-worthingtonstateforest-300x300.jpg",
		description:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem "
		
	}
	
]
function SeedDb(){
	Campground.remove({},function(err){
		// if(err){
		// 	console.log(err);
		// }else{
		// 	console.log("removed succesfully");
		// 	data.forEach(function(seed){
		// 			Campground.create(seed,function(err,campground){
		// 				if(err){
		// 					console.log(err);
		// 				}else{
		// 					console.log("added succsefully");
		// 					//create a comment
		// 					/*Comment.create(
		// 						{
		// 							text:"this place is great",
		// 							author:"aman"
		// 						},function(err,comment){
		// 							if(err){
		// 								console.log(err);
		// 							}else{
		// 								campground.comments.push(comment);
		// 								campground.save();
		// 								console.log("comment added succesfully");
		// 							}
		// 						});*/
		// 				}
		// 			});
		// 	});
		//}
});
}
module.exports = SeedDb;