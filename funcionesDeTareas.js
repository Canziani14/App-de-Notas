const fs = require('fs');


function leerArchivo(){
    let tareas = fs.readFileSync('tareas.json', 'utf-8');
    return JSON.parse(tareas);
}

function listar (tareas, leerArchivo) {
    this.tareas.ForEach (tareas)
    console.log (tareas)
}





let archivoTareas = {
archivo : 'tareas.json',
leerArchivo,
listar
}






module.exports = archivoTareas;
