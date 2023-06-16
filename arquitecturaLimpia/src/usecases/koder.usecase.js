const Koder = require ("../models/koder.model")
/**
 * crear
 * actuailixar
 * obtener
 * enlistar
 * eliminar
 * 
 * method --> create
 * await Model.create(sdhlkj)
 * await Model.findById(sdhlkj)
 * await Model.create(sdhlkj)
 * 
 * Funciones
 * 
 */

const list = () => {
    //Accion
    const koders = Koder.find();
    return koders;
};

const getKoderById = (id) => {
    const koder = Koder.findById(id);
    return koder;
};

const create = (data) => {
    const koder = Koder.create(data);
    return koder;
};

const edit = (id) => {
    const koder = Koder.findByIdAndUpdate(id);
    return koder;
};

const eliminate = (id) => {
    const koder = Koder.findByIdAndDelete(id);
    return koder;
};

module.exports = { list, getKoderById, create, edit, eliminate }

//Crear koder
//Actualizar koder
//Eliminar koder


