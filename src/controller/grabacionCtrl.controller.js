import Grabacion from '../models/Grabacion.model'

export const todasGrabaciones = async (req, res) => {
    //const grabaciones = await Grabacion.find();
    res.send('hola get');
}

export const crearGrabacion = async (req, res) => {
    const grabaciones = await Grabacion.find();
    res.send('hola post');
}

export const actualizarGrabacion = async (req, res) => {
    const grabaciones = await Grabacion.find();
    res.send('hola put');
}
