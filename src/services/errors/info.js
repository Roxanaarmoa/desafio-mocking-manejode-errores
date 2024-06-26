const generarInfoError = (producto) => {
    return `Los datos estan incompletos o no son validos. 
    Necesitamos recibir los siguientes datos:
    - Title: String, pero recibimos ${producto.Title}
    - Description: String, pero recibimos ${producto.Description}`
}

export default generarInfoError;