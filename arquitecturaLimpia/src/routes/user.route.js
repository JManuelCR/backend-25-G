const express = require ("express");
const route = express.Router();
const { create } = require ("../usecases/users.usecase");

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

module.exports()