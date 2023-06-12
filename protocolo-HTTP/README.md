# HTTP HyperText Protocol Transfer

## Protocolo 
    Pasos a siguir para cumplir un objetivo
    Su objetivo: es conectarnos
    Hypertexto: Un texto con poderes; podemos pasar imagenes, json, videos


## Inspeccionar pestaña de network

    Es muy importante saber manehar esta herramienta pues en ella podemos ver las
    peticiones y las respuestas del 
    En esta pestaña podemod ve las peticiones a HTTP y las respuestas.
    En la pericion vamos a encontrar el request y un response, cada uno de ellos ca a tener unos hedaers, cuando hacemos una peticion encontramos headres.
    
### Header

    Es una forma diferente de mandar informacion en lugar del body, como se manda informacion atraves de un evento podemos mandar informacion en los heraders.
    Los headers puede tener:
        Autorizaciön: token, a traves de estos podemos validar usuarios
        Content-Type -> mime-Type, es una forma de representar los datos que estamos mando
            busacar mimetype en google
        SOn extenciones para indicar que tipo de dato estamos mandando
        por ejemplo 
            image/jpeg, en este ejemplo estamos indicando que tipo de dato estamos mando al momento de hacer el request.
            Nosotros podemo decir quienes somos por medio de la autorizacion y que tipo de datos estamos mandando. Podemos crear los headers que nosotros queramos.
    Los headers son una forma de mandar informaicon, sin embargo no es la forma de mandar la informacion de manera correcta, la forma correcta de mandarlos es a treves del body, en ella mandamos las imahenes, un json o videos o cualquier tipo de informacion
##### QUe se necesita para hacer una peticion
    Una URL, la cual esta dividida por dos partes, el protocolo: http://, por dominio: dev.to/kodemia, etc y por el recurso: el cual es lo que queremos/notification/counts

### Modelo de HTTP
    HTTP utiliza el modelo cliente-servidor en el cual se hacen peticiones de parte del cliente al servidos, modelo de cliente-mesorro, El cliente realiza periciones, el servidor por otra parte lee las peticiones del cliente y lanza una repsueta.

    CLIENTE -> Peticion(request)
    SERVIDOR -> Respuesta(response)

###  Status de respuestas de servidor

    2xx -> ok
    3xx -> rediccion
    4xx -> Error del lado del cliente
        400 -> bad request -> porque mando mal los datos
        401 -> unathorized -> no esta autorizado
        404 -> not found -> la ruta esta mal escrita, no encontramos un dato
    5xx -> errores del lado del servidor


## Metodos:
    Get -> obtner -> lsitar koders
    Post -> crear -> crear un koder
    Put -> remplazar -> actualiza por completo lo que estamos mandando
    Patch -> actualiza -> actualiza de manera parcial el elemento que estamos atendiendo
    Delete -> elimina


### Parmetros

    Query params
    koders?edad=25
    Asi se indican los queryparams con signo de interrogacion con este signo indicamos que lanzaremos un queryparam, con el signo de igual podemos indicar cuale es valor que staos mandando en el queryparam. Con & conacatenamos o separamos entre queryparams ejemplo: 
        koders?edad=25&nombre=Luis

  ### como usas Insomia
#### crear una coleccion
    Boton amarillo de crea coleccion
        nombra la coleccion
    Crear una peticion en el boton de mas, y seleccionar el protocolo http
        nos pide el metodo
        nos pide la ruta
        darle send para manda la petecion
    
