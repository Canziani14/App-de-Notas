let tareasJason =  require ("./tareas.json");
let funcionesDeTareas = require ("./funcionesDeTareas");
const archivo = require('./funcionesDeTareas');
const { leerArchivo } = require("./funcionesDeTareas");
const archivoTareas = require("./funcionesDeTareas");



let accion = process.argv[2];

{
switch (accion) {
    case "listar":
        archivoTareas.leerArchivo();
    break;
    case undefined:
        console.log ("Atención - Tienes que pasar una acción.");
    break;
    default:
        console.log ("No entiendo que queres hacer");
        console.log ("La opcion disponible es: listar");
    break;
}
}











