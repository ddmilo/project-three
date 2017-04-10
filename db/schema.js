
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


mongoose.Promise = global.Promise;

var UserSchema = {
	email: { type: String, required: true, unique: true},
	password_digest: { type: String, required: true },
	username: { type: String, required: true, unique: true}
};


var ReviewSchema = {
	username: String,
	content: String,
	rating: Number,
	dateCreated: Date,
	beerId: String,
	pairing: String

};


var BeerSchema = {
	name: String,
	type: String,
	brewery: String,
	alcoholPer: Number,
	imageUrl: String,
	reviews: [ReviewSchema]
};



var UserModel = mongoose.model('User', UserSchema);
var ReviewModel = mongoose.model('Review', ReviewSchema);
var BeerModel =mongoose.model('Beer', BeerSchema);



module.exports = {
	User: UserModel,
	Review: ReviewModel,
	Beer: BeerModel
};
