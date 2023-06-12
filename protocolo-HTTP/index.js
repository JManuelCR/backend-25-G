const http = require("http");

const routes = {
    "GET": {
        "/hola": "Estamos el endpoint de GET hola",
        "/adios": "Estamos en el enponit de GET adios"
    },
    "POST": {
        "/hola": "Estamos el endpoint de GET hola",
        "/adios": "Estamos en el enponit de GET adios"
    },
    "PUT": {
        "/hola": "Estamos el endpoint de GET hola",
        "/adios": "Estamos en el enponit de GET adios"
    },
    "PATCH": {
        "/hola": "Estamos el endpoint de GET hola",
        "/adios": "Estamos en el enponit de GET adios"
    },
    "DELETE": {
        "/hola": "Estamos el endpoint de GET hola",
        "/adios": "Estamos en el enponit de GET adios"
    }
}

// creando n servidor pasando un callback que recibe una peticion y una respuesta
const server = http.createServer((request, response) => {
    //Leer la request
    //edpoints
    const { url, method } = request;
    // if (method === "GET" && url === "/hola"){
    //     response.write("Estamos en el endpoind the get hola")
    // }
    // if (method === "GET" && url === "/adios"){
    //     response.write("Estamos en el endpoind the get adios")
    // }
    // if ( method == "POST" && url === "/hola"){
    //     response.write("Estamos creando algo en hola")
    // }
    // if ( method == "POST" && url === "/adios"){
    //     response.write("Estamos creando algo en adios")
    // }
    // if ( method == "PUT" && url === "/hola"){
    //     response.write("Estamos cambiando algo en hola")
    // }
    // if ( method == "PUT" && url === "/adios"){
    //     response.write("Estamos cambiando algo en adios")
    // }
    // if ( method == "PATCH" && url === "/hola"){
    //     response.write("Estamos editando algo en hola")
    // }
    // if ( method == "PATCH" && url === "/adios"){
    //     response.write("Estamos editando algo en adios")
    // }
    // if ( method == "DELETE" && url === "/hola"){
    //     response.write("Estamos eliminando algo en hola")
    // }
    // if ( method == "DELETE" && url === "/adios"){
    //     response.write("Estamos eliminando algo en adios")
    // }
    if (routes[method] && routes[method][url]) {
        //response.write(`Estamos en el endpoint de: ${request.method.toLowerCase()}`)
        response.write(routes[method][url]);
    } else {
        response.write("Endpoint no encontrado");
    }

    //forma mas optima
    // console.log("mensaje-----> ", routes[method])
    // response.write(`Estamos en el endpoint: ${method} en la ruta ${routes[method][url]}`)


    //Response
    //tenemos que parara la repuesta para que no se quede respodiendo infinitamente el servidor
    response.end();
})

//prender el servidor
//Paremos el puerto del servidor a levantar y un callback de lo el sevidor tiene que hacer

server.listen(3000, () => {
 console.log("Nuestro servidor esta prendido")
})


/** Tarea: terminar todos los metodos con la ruta hola y con la ruta adios.
 * Al terminar debemos optimizar los if con estructura de datos con algun arreglo o con algun oobjeto
 */