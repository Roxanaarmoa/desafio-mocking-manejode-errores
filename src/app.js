//Sirve para simular un entorno de desarrollo y obtener datos reales(mock) de forma rápida
//faker.js crea datos de forma aleatoria

import express from "express";
const app = express ();
const PUERTO = 8080;

import productosRouter from "./routes/productos.router.js"
import mockingProducts from "./routes/mockingProducts.js"
import manejadorError from "./middleware/error.js";



//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Rutas
app.use("/productos", productosRouter);
app.use("/mockingproducts", mockingProducts);
//manejador de error va abajo de todo
app.use(manejadorError)




app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto http://localhost:${PUERTO}`);
})