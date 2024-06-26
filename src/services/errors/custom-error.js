//Clase para generar errores propios

class CustomError {
    static crearError({nombre = "Error", causa = "Desconocido", mensaje,codigo = 1}){
        const error = new Error(mensaje);
        error.name = nombre;
        error.causa = causa;
        error.code = codigo;
        //lanzamos error 
        throw error;
        //esto detiene la ejecucion de la app, por eso tenemos que capturarlo
    }
}

export default CustomError;