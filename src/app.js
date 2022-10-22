import express from 'express';
const bodyParser = require('body-parser'); 
//import IndexRoutes from './routes/index'
import GrabacionRoute from './routes/grabacion.routes';

const app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use('/grabacion',GrabacionRoute);
//app.use(IndexRoutes);

export default app;