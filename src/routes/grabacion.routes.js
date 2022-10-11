
import { Router } from "express";
import * as grabacionCtrl from '../controller/grabacionCtrl.controller'

const router = Router();

router.get('/', grabacionCtrl.todasGrabaciones);

router.post('/', grabacionCtrl.crearGrabacion);

router.put('/', grabacionCtrl.actualizarGrabacion);

export default router;


