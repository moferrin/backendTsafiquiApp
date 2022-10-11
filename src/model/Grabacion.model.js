import { Schema, model } from 'mongoose';

const grabacionSchema = new Schema({
    lenguaGrab: {String},
    lenguaMadre: {String},
    lenguaSecundaria: {String},
    ciudad: {String},
    nota: {String},
    apellidoNombre: {String},
    edad: {String},
    genero: {String},
});

export default model('grabacion',grabacionSchema);
