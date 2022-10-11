
import { Router } from "express";
import * as grabacionCtrl from '../controller/grabacionCtrl.controller'

const router = Router();

router.get('/', grabacionCtrl.todasGrabaciones);

router.post('/', grabacionCtrl.crearGrabacion);

router.put('/:id', grabacionCtrl.actualizarGrabacion);

export default router;


