import { Router } from "express";
import * as uploadsCtrl from '../controller/uploadsCtrl.controller'


const router = Router();

router.post('/',uploadsCtrl.upload);

export default router;