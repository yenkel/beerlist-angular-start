var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var beerSchema = new Schema ({
	name: String,
	style: String,
	image_url: String,
	abv: Number,
	rating: Number,
	averageRating: Number
})

var Beer = mongoose.model("beer", beerSchema);
module.exports = Beer;