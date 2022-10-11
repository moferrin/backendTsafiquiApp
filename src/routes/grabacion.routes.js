
import { Router } from "express";

const router = Router();

router.get('/', (req, res) =>{
    res.send('hola get');
});

router.post('/', (req, res) =>{
    res.send('hola post');
});

router.put('/', (req, res) =>{
    res.send('hola post');
});

export default router;


