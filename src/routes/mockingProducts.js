import express from 'express';
import { generarProductos } from '../utils/utils.js';
const router = express.Router();


router.get("/", (req,res) => {
    //array de usuarios(faker)
    const productos =[];
    for(let i = 0; i <100; i++){
        productos.push(generarProductos());
    }
    res.send(productos);
})

export default router;