import {AsignarCitaFormulario} from "../components/AsignarCitaFormulario.js"

const AsignarCitas = ()=>{

    const vista=
    `
    <div class="container mt-3 mb-3">
    <div class="row justify-content-md-center">
        <div class="col col-sm-12 col-md-8 col-lg-6">
            <div class="card-body">
                <h3 class="text-center">Asignar citas</h3>
                ${AsignarCitaFormulario()}
            </div>
        </div>
    </div>
    </div>
    `

    return vista
}

export {AsignarCitas}