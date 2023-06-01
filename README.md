# backend-25-G

## Como coroborar que tipo de teminal estamos usando 
    echo $SHELL

## Comando para cmbair de shell

    chsh

## COmando para ver que shell tenemos instaladas
    cat/etc/shells

## imprimir la ruta en la que estamos actualmente
    pwd

## movenos dentro de carpetas 
    cd

## extension de fig teminal para mac para ver que carpeta tenemos trabajando en la ruta en la que estamos trabajando

## para listar que carpetas o archivos tenemos en la ruta en la que estamos parados
    ls
### se oueden indicar banderas como para complementar los comandos 

    ls -l permisos de los archivos
    ls -a  archivos ocultos
    ls -la archivos ocultos con todos sus permisos

## que son los permisos
    r - permisos de lectura
    x - permisos de ejecucion 
    d - directorio
    w - permisos de escritura

## al dar tab podemos completar lo que queremos escribir

## Rutas relativas y absolutas

Las rutas absolutas son las que empizan con una diagonal, siempre van a ser absolutas.
Las rutas relativas son las que dependen de donde estemos parados y nos movemos a donde podamos movernos    

## La raiz es la diagonal

## Los dos puntos me llevan hacia atras

## EL punto es la carpeta actual

## El home se alcanza con la birulilla ~
 ~

## La carpeta anterior se alcanza con
 -
 cd -

## Crear un archivo 
    touch
    ya sea en la ruta absiluta o una ruta relativa

## Imprimir el contenido de un archivo
    cat
    cancatenar el contenido a la salida estandar que la terminal estandard es la terminal

## Copiar un archivo a otro lugar
    cp
    cp -archivo que queremos copiar__ ruta a la que queremos copiar

## Mover un archivo de locacion
    mv 
    puede emplearse para cambiar el nombre
    ruta del archivo de donde lo vamos a mover_ ruta a donde lo vamos a mover  

##  Crear un direcctorio
    mkdir
    ya sea con ruta relativa o una rota apsoluta

## ctrl - F
    Buscar elementos en la terminal

## con man podemos ver el manual del comando a usar
    man ls, por ejemplo

## Comando para remover
    rm
    rm r[ruta del archivo a borrar]
    rm -r[ruta de la carpeta que queremos borrar] mediante recursividad, va entra a las carpetas internas hasta el fondo y borra todo
    rm -f [remover una carpeta de manera forsoza para archivos que no tengan permisos de escritura] force
    rm -rf 

## Comando para cambiar permisos del archivo
    chmod u=r [nombre del archivo]
    este comando no agrega sobre escribe los permisos, si queremos cambiar los permisos para los usuarios gruplaes 

## Alias
alias hola="echo 'hola mundo'"
esto es un alias temporal si queremos utilizar un alias permanente estos alias se pierden y necesitamos crearlos de nuevo.
Para ello necesitamos guardarlo desde el archivo de la terminal.

    .bashrc & .zshrc

    ejecutar el archivo de configuracion sin cerrar la terminal
        source .zshrc

## comandos en cadena

comando1;comando2  ----> primero el comando uno despues el comando 2

comando1 && comando2 ----> primero el comando 1 y si este se ejecuta ejecuta el comando 2

comando 1 || comando 2 ----> ejecuta uno o el otro cualquiera de los dos pero al cumplir uno no ejecuta el otro, por eso lo que se usa mas es el punto y coma

# Node 
Es un entorno de ejecucion de javascript construido con el motor de busqueda de javascript V8
Node es single thread, es como tener una persona  que atiendo todo lo demas.
Este nodo es asincrono, una tarea puede salir primero que la otra.

## entorno de ejecucion
 ### instalar node js
    Intalar el manejador de versiones de node nvm
    npm es el manejador de paquetes de node 

## como utilizar node
    node y darle enter
    para cerrar vamos a dar ctrl+c

# Node

PROCESS
    process es un object que contiene la informacion de node con muchas propiedades.
    En esta objecto tenemos los argumentos vectoriales ARGV, que es una propiedad con dos valores, el primero es un valor y el segundo es el archivo que estamos corriendo en ese momento
    Pasando un parametro nuevo al hacer el run time podemos pasarametros a node

## Como pasar un parametro desde la terminal al correr un archivo ,js
Para pasar un parametro a la funcion desde la terminal al momento de llamar
el documento lo podemos hacer con el 
    process.argv[2]
Este es el objeto process de Node

# correr un script especial
    solo se corren los scripts de start y test sin el run solo con 
        npm start
    Los demas tienen que estar corriendo con 
        npm run dev

## COdigo node para instalar el node modules y jpackagejso-lock
    npm install

# File system

Sistema de archivos que empiezan desde la raiz y no hay nada detras de la raiz de ese sistema de archivos

## Callback
Son funciones que se pasa como parametro en otra funcion se pasan como referencia

## modulo de file system
fs ya esta integrado en node y los podemos encontrar en la documentacion de node, en la seccion de devs o la de docs para dirigirnos en ella y ver de que se trata esa herramoenta.
Nos vamos a la izquierda y nos dirigimos a la version en la que estamos trabajando, en este caso la de node 16
Buscar en el listado el file system para hacer un sistema de archivos
Dentro de esta documentacion tenemos la callback APi, una para empezar es la de leer un archivo