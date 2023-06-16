const express = require ("express");
const route = express.Router();
const { create } = require ("../usecases/users.usecase");


/**
 * rutas publicas y rutas privadas
 * Lo que hemos hecho hasta ahorita son rutas publicas
 * Si queremos consultar una ruta como la del perfil es una ruta privada
 * las que hayan iniciado sesion pueden entrar
 * Para hacer rutas privadas la vamoa a hacer por medio de middlewares
 */
router.post("/", async (req,res) => {
    try {
        const createUser = await create(req.body);
        res.status(201);
        res.json({
            success: true,
            data: createUser
        });
    }catch(err){
        res.status(err.status || 500),json({
            success: false,
            message: err.message
        })
    };
});

router.get("/", async (req, res) => {
    const users = await list(req.query);
    try{
        res.josn({
            success: true,
            data: users
        })
    }catch(err){
        res.satatus(err.status || 500).josn({
            success: false,
            message: err.message
        })
    }
})

router.get("/:id", async (req, res) => {
    try{
        const user = await get(req.params.id);
        res.status(200).josn({
            success: true,
            data: user
        })
    }catch(err){
        res.satatus(err.status || 500).josn({
            success: false,
            message: err.message
        })
    }
})
module.exports()