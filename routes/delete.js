import express from 'express';
import query from './../model/schema';

let router = express.Router();
router.delete('/',(req,res,next) => {
	query.remove({"username" : req.body.username},(err,data) => {
		res.json({data});
	})
})

export default router;
