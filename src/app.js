import express from 'express';
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload')


import GrabacionRoute from './routes/grabacion.routes';
import UploadRoute from './routes/uploads.routes';

const app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(fileUpload())
app.use('/grabacion',GrabacionRoute);
app.use('/upload',UploadRoute);

export default app;