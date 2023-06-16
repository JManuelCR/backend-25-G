const bcrypt = require("bcrypt");
const User = require ("../models/user.model");
const createError = require("http-errors");
const jwt = require("../lib/jwt.lib")

/**
 * Registro -> autenticacion
 * 
 */

const create = async (data) => {
    const saltRounds = 10;
    console.log("data", data);
    const hashedPassword =  await bcrypt.hash(data.password, saltRounds);
    console.log("password heseada", hashedPassword);
    //cambia la password en tecto plano de la data a la que  esta hasheada
    data.password = hashedPassword;
    // crear el usuario 
    const user = await User.create(data);
    return user;
};
const login = async (email, textPlainPassword) => {
    //Validar que un usuario con ese correo exista
    const user = await User.findOne({ email });
    cosole.log("Si existe un user con ese correo -->", user);
    if(!user) throw createError(400, "Invalid data");
    const isValidPassword = await bcrypt.compare(textPlainPassword, user.password)
    console.log(isValidPassword);
    if(!isValidPassword) throw createError(400, "Invalid data");
    /**
     * si es la password y el correo, vamos a utilizar un jwt que es un jason web token el json web token esta dicidido en tres partes, primer parte es el header, no nos sirve de nada solo para verificar, la segunda parte nos interesa porque en ella esta la informacion que nos sirve a nosotros trae los datos de cuando se creo, cuando xuando expirara, cunado expiro, nosotros tenemos control del payload la segunda parte del token. La tercera parte es la firma del payload y es la firma de verificacion. El toeken se guarda en el local storage en el frontend y sirve para saber cual es el usuario con el que estamos logueados con ese token que guarda el cliente se va a dir permiso para perdir un servicio de regreso, cada ves que el cliente quiera pedir algo necesita mandar el token de jwt.
     * JWT puede ser compartido con varios servios a diferencia del metodo de autenticacion por cookiesl, aunque es conciderado mas seguro.
     * El cliente tiene que guardar el JWT en el local storage o en el sesiostorage que es mas seguro que en el localstorage, porque no tiene sentido loguearse cada vez que necesitas rquerir alfo del back.
     * Mientras tengas la firma puedes usar el token, esta firma la tiene que saber los servidores que esten involucrados en los microseervicion
     * entrar a jwt.io para ir por la libreria de node por la libreria de jsonwebtoken
     */
    const token = jwt.sign( { email: user.email, id: user.id })
    console.log("este es el token", token);
    return token;
    
}
const creater = (data) => {
    //Hasear la password
    console.log("data", data);
    //crear la cuente
}

module.exports = { create, login }

