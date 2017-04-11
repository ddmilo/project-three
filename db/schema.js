
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

//USER
var UserSchema = {
	email: { type: String, required: true, unique: true},
	password_digest: { type: String, required: true },
	username: { type: String, required: true, unique: true}
};

//REVIEW
var ReviewSchema = {
	username: String,
	content: String,
	rating: String,
	dateCreated: Date,
	beerId: String,
	pairing: String

};

//BEER
var BeerSchema = {
	name: String,
	type: String,
	brewery: String,
	alcoholPer: Number,
	imageUrl: String,
	reviews: [ReviewSchema]
};

//MAKE MODELS
var UserModel = mongoose.model('User', UserSchema);
var ReviewModel = mongoose.model('Review', ReviewSchema);
var BeerModel =mongoose.model('Beer', BeerSchema);

//EXPORT MODELS
module.exports = {
	User: UserModel,
	Review: ReviewModel,
	Beer: BeerModel
};
