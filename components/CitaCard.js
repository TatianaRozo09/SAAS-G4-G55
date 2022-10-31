import { EliminarCitaBoton } from "./EliminarCitaBoton.js"


const CitaCard= (cita)=>{

    const vista=
    `
    <div class="card mt-3 mb-3">
        <div class="card-header mi-card">
            <div>
                ${EliminarCitaBoton()}
            </div>
        </div>
        <div class="card-body">          
            <div class="card-text">
                Fecha y hora: ${cita.fecha} ${cita.hora}
            </div>
             <div class="card-text">
            Nombre: ${cita.nombre}
            </div>
            <div class="card-text">
            Documento de identidad: ${cita.tipodocumento} - ${cita.numerodocumento}
            </div>
            <div class="card-text">
            Doctor: ${cita.doctor}
            </div>
            <div class="card-text">
            Tipo de consulta: ${cita.tipoconsulta}
            </div>
        </div>
    </div>
    `

    return vista
}

export {CitaCard}