import express from 'express';
import query from './../model/schema';

let router = express.Router();
router.put('/',(req,res,next) => {
	query.update({"username" : req.body.username},{$set : {"name" : req.body.name, "age" : req.body.age}},(err,data) => {
		res.json({data});
		next();
	})
})

export default router;
