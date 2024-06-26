import express from 'express';
const router = express.Router();
import CustomError from '../services/errors/custom-error.js';
import generarInfoError from '../services/errors/info.js';
import { EErrors } from '../services/errors/enum.js';


//guardar usuarios en un array
const arrayProductos =[];

//RUTAS
router.post("/", (req,res, next) => {
    const {Title, Description} = req.body;

    try {
        if (!Title || !Description ){
            throw CustomError.crearError({
                Title: "titulo de producto",
                causa: generarInfoError({Title, Description}),
                mensaje: "Error al generar producto",
                codigo: EErrors.TIPO_INVALIDO
            })
        }
        //creo el producto
        const producto = {
            Title,
            Description
        }
        //pusheo en el array productos un nuevo producto
        arrayProductos.push(producto);

        res.send({status: "success", payload: producto});

    } catch (error) {
        next(error);
    }
})

export default router;
