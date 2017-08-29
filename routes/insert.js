import express from 'express';
import query from './../model/schema';

let router = express.Router();
router.post('/',(req,res,next) => {
	query.insertMany({"username" : req.body.username,"password" : req.body.password,"name" : req.body.name, "age" : req.body.age},(err,data) => {
		res.json({data});
		next();
	})
})

export default router;
