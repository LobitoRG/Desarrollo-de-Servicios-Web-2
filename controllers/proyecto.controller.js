let arrProyectos = [
    {
        id : 1,
        name : "Proyecto 1",
        description : "Descripción proyecto 1",
        startDate : "2024-06-23",
        endDate :"2024-06-23", 
        status : "en progreso",
        teamMembers: ["Persona 1","Persona 2"],
        budget: 120000
    },
    {
        id : 2,
        name : "Proyecto 2",
        description : "Descripción proyecto 2",
        startDate : "2024-08-20",
        endDate :"2024-12-30", 
        status : "en progreso",
        teamMembers: ["Persona 3","Persona 4"],
        budget: 210000
    }
]

function obtenerProyectos(){
    return arrProyectos;
}

function obtenerProyectoPorID(id){
    id = parseInt(id);
    const proyectoEncontrado = arrProyectos.find((proyecto) =>{
        proyecto.id === id;
    });

    return proyectoEncontrado;
}

function crearProyecto(name, description, startDate, endDate, status, teamMembers, budget){
    const nuevoProyecto = {
        id: newID(),
        name,
        description,
        startDate,
        endDate,
        status,
        teamMembers,
        budget
    }
    arrProyectos.push(nuevoProyecto);
    return nuevoProyecto;
}

function editarProyecto(proyectoActualizado){
    proyectoActualizado.id = parseInt(proyectoActualizado.id);
    arrProyectos = arrProyectos.map((t) => (t.id === proyectoActualizado.id ? proyectoActualizado : t));
    return proyectoActualizado;
}

function eliminarProyecto(id){
    const _id = parseInt(id);
    const proyectoEliminado = obtenerProyectoPorID(_id);
    console.log("Proyecto a eliminar" + proyectoEliminado);
    arrProyectos = arrProyectos.filter((proyecto) => proyecto.id !== _id);
    return proyectoEliminado;
}

function newID() {
    const maxID = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) : 0;
    return maxID + 1;
}

module.exports = {
    obtenerProyectos,
    obtenerProyectoPorID,
    crearProyecto,
    editarProyecto,
    eliminarProyecto
}