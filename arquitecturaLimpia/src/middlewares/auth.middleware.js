/**
 * Middleware de auth que vamos a utilizar en las rutas privadas
 * 
 * EL token se pone en los tokens
 * 
 * Headers: {
 * content-Type}: application/json
 * 
 */
const jwt = require("../lib/jwt.lib")
const auth = (req, res, next)=> {
    try{
        //verificar el token
        const autorization = req.jeaders.autorization || "";  
        console.log("headers", autorization);  
        const token = autorization.replace("Barer ", "");
        console.log(token);
        const isVerify = jwt.veryfy(token);
        nex();
    }catch(err){
        res.status(401).json({
            success: true,
            message: err.message
        })
    }
}

module.exports = auth;