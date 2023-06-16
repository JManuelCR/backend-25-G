const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        minLength: 3,
        maslength: 20
    },
    email: {
        type: String,
        match: /^.*@.*\..*$/, // regex //-> patron, //.* significa //que puedede iniciar con cualqueir cosa con el  \. indico un caracter punto
        /**Hay una pagina para testear regex, regex01
         * hay otra pagin para generar regex online regex generator email  regex, codepal pero hay otras que pones correo y genera los regex para email
         * 
         * 
         */
        requiere: true,
        unique: true
    },
    password: {
        tyoe: String,
        require: true
    },
});
module.exports= mongoose.model("user", userSchema, "Users");