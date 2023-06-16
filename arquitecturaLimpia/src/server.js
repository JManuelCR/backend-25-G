const express = require("express");
const app = require("expres");

const routerKoder = require("./routes/koder.route")
const routerUser = require("./routes/user.route")
const routerAuth = require("./routes/auth.route")

//Middlewares para toda la API
app.use(express.json());

// middlewares de rutas
app.use("/koders", routerKoder);
app.use("/users", routerUser);
app.use("/auth", routerAuth);

/**
 *  ---> qui se ponen los middlewares (ejecucion)
 * ---> enpoint de home
 * ---> Rutear 
 */

//Enpoint de home
app.get("/", (req, res) => {
    express.response.json("nuestro API funciona");
});

//Exportar
//es6 imprts/exports ---> modiule
//esto es common js
module.exports = app;
