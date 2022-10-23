import { Schema, model } from 'mongoose';

const grabacionSchema = new Schema({
    lenguaGrab: {type: String, required: true},
    lenguaMadre: {type: String, required: true},
    lenguaSecundaria: {type: String, required: true},
    ciudad: {type: String, required: true},
    nota: {type: String, required: true},
    apellidoNombre: {type: String, required: true},
    edad: {type: String, required: true},
    genero: {type: String, required: true},
});

export default model('grabacion',grabacionSchema);
