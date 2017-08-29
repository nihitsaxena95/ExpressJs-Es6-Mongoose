import express from 'express';
import query from './../model/schema';

let router = express.Router();
router.get('/',(req,res,next) => {
	query.find({},(err,data) => {
		res.json({data});
		next();
	})
})

export default router;
