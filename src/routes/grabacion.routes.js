
import { Router } from "express";

const router = Router();

router.get('/grabacion', (req, res) =>{
    res.send('hola get');
});

router.post('/grabacion', (req, res) =>{
    res.send('hola post');
});

export default router;


