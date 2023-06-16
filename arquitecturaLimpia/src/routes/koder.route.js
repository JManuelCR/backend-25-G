const express = require("express");
const { list, getKoderById, create, edit, eliminate } = require("../usecases/koder.usecase");


//Ruoter
// un conjunto de rutas en una applicacion
const router = express.Router();

/**
 * las rutas
 * Leer el request y responeder
 */

router.get("/", async (req, res) =>{
    try {
        const koders = await list();
        console.log("koders", koder)
        res.json ({
            success: true,
            data: koders
        })
    }catch(err){
        res.status(400);
        res.json({
            success: false,
            menssage: err.menssage
        })
    }
});

//path param __> id --> 7koders:id
router.get("/:id", async(req, res) =>{
    try {
        const koder = await getKoderById(req.params.id);
        res.status(200);
        console.log("koder", koder);
        if(!koder){
            const error = new Error("Koder not found")
            error.status = 404;
            throw error;
        }
        res.json({
            seccess: true,
            data: koder
        })
    }catch(err) {
        console.log("ERROR", err);
        res.status(err.status || 500);
        res.json({
            success: false,
            menssage: err.menssage
        });
    }
});

router.post("/", async(req, res) => {
    try {
        const koder = await create(req.body);
        res.status(201);
        res.json({
            success: true,
            data: koder
        })
    }catch(err){
        res.status(err.status || 500);
        res.json({
            success: false,
            menssage: err.menssage
        });
    }
});

router.patch("/:id", async(req, res) => {
    try{
        const koder = await edit(req.params.id);
        if(!koder){
            const error = new Error("Koder not found")
            error.status = 404;
            throw error;
        }
        res.status(200);
        res.json({
            success: true,
            data: koder
        });
    }
    catch(err){
        res.status(err.status || 500);
        res.json({
            success: false,
            menssage: err.menssage
        });
    }
});

router.delete("/:id", async(req, res) => {
    try{
        const koder = await eliminate(req.params.id);
        if(!koder){
            const error = new Error("Koder not found")
            error.status = 404;
            throw error;
        }
        res.status(200);
        res.json({
            success: true,
            data: koder
        });
    } 
    catch(err){
        res.status(err.status || 500);
        res.json({
            success: false,
            menssage: err.menssage
        });
    }
});

module.exports = router;