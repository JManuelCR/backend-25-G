# HTTP
HyperText Transfer Protocol

Protocolo: pasos a seguir para cumplir un objetivo
Su objetivo: es comunicarnos
Hipertexto: es un texto con poderes, no solo texto plano, json, videos, imagenes

la pestña de netword es la biblia de los frontend porque ahi se ven todas las peticiones que se hacen a los servidores.

https es un protoculo seguro, encriptado.

en la peticion vamos a encontrar un request y un response, cada uno de estos va tener unos headers que es una forma de mandar informacion aparte del body.
por ejemplo

    fetch ("/oquesea"){
        body:
    }

los headers es otra forma de mandar informacion, que tipo de infomacion se manda ene los headers:
    La informacion mandada en los headers pueden tener varias cosas
        Autorizacion : token
        Content-Type: mimetype = img/jpeg
            cuando hacemos una peticion tenemos que mandarle en el header
            el tipo de contenido de la peticion.
            en el header le podemos decir el usario, el tipo de dato que le estamos mandando y demas de que nos podemos inventar los headers 

            Headers puede ser usado pero en ocaciones no es el ideal para mandar la informacion para lo que necesitamos alimentar
        en el body: JSON stringify(post)

    Que necesecitamos para hacer una peticon:
        La ruta ->
            ruta esta dividida en dos partes:
            protocolo: https/ http y otros
            dominio: el dominio: deto/kodemia.api.com
            recurso: /notificaciones/counts, el recuso es lo que queros 
