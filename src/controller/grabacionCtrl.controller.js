import Grabacion from '../models/Grabacion.model'

export const todasGrabaciones = async (req, res) => {
    const grabaciones = await Grabacion.find();
    res.json(grabaciones);
}

export const crearGrabacion = async (req, res) => {
    console.log(req.body)
    const grabacion = new Grabacion(req.body)
    //console.log(grabacion);
    await grabacion.save();
    res.json({ status: "persona_enc_c" });
}

export const actualizarGrabacion = async (req, res) => {
    const {id} = req.params;
    console.log(req.body); 
    const grabacionActu = await Grabacion.findByIdAndUpdate(id,{$set: req.body});
    res.send(grabacionActu);
}
