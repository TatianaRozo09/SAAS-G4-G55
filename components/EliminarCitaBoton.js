

const EliminarCitaBoton= ()=>{

    const vista=
    `
    <a href="" class="btn btn-danger btn-sm me-2" data-bs-toggle="modal" data-bs-target="#crearalerta">
    Eliminar cita
    </a>
    <div class="modal fade" id="crearalerta" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            Si elimina esta cita no podra volver a verla y debera asignarla de nuevo
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Salir</button>
            <button type="button" class="btn btn-primary">Eliminar</button>
            </div>
        </div>
        </div>
    </div>
    `

    return vista
}

export {EliminarCitaBoton}