import express from 'express';
import logger from 'morgan';
import body from 'body-parser';
import mongoose from 'mongoose';
import fs from 'fs';
import config from './config/config';
import index from './routes/index';
import update from './routes/update';
import delete1 from './routes/delete';
import insert from './routes/insert';


let app = express();

app.use(logger("dev",{
stream : fs.createWriteStream('app.log', {'flags':'w'})
}));
app.use(body.json());
app.use(body.urlencoded({ extended: false }));

app.use('/',index);
app.use('/insert',insert);
app.use('/update',update);
app.use('/delete',delete1);

mongoose.connect(config.url);
mongoose.connection.on("connected", () => {
	console.log("Success");
})
mongoose.connection.on("Error", () => {
	console.log("Error");
})
	
export default app;