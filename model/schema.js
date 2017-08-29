import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let Main = new Schema({
	username : String,
	password : String,
	name : String,
	age: Number
},{collection : "root",versionKey : false});

export default mongoose.model("root",Main);