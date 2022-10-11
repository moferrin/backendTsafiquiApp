import express from 'express';
//import IndexRoutes from './routes/index'
import GrabacionRoute from './routes/grabacion.routes';

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use('/grabacion',GrabacionRoute);
//app.use(IndexRoutes);

export default app;