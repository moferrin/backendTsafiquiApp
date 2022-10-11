import Grabacion from '../models/Grabacion.model'

export const todasGrabaciones = async (req, res) => {
    const grabaciones = await Grabacion.find();
    res.json(grabaciones);
}

export const crearGrabacion = async (req, res) => {
    const grabacion = new Grabacion({
        lenguaGrab: req.body.lenguaGrab,
        lenguaMadre: req.body.lenguaMadre,
        lenguaSecundaria: req.body.lenguaSecundaria,
        ciudad: req.body.ciudad,
        nota: req.body.nota,
        apellidoNombre: req.body.apellidoNombre,
        edad: req.body.edad,
        genero: req.body.genero,
    })

    const grabacionGuard = await grabacion.save();
    res.send(grabacionGuard);
}

export const actualizarGrabacion = async (req, res) => {
    const id = req.params;
    const grabacionActu = await Grabacion.findByIdAndUpdate(id,{$set: req.body}, {new:true})
    res.send(grabacionActu);
}
