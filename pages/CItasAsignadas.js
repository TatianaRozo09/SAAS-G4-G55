import { CitaCard } from "../components/CitaCard.js"
import getData from "../connections/helpers/getData.js"


const CitasAsignadas = async ()=>{

    const citas= await getData()

    const vista=
    `
    <div class="container mt-3 mb-3">
    <div class="row justify-content-md-center">
        <div class="col col-sm-12 col-md-8 col-lg-6">
            <div class="card-body">
                <h3 class="text-center">Ver citas asignadas</h3>
                ${
                    citas.map(cita=>
                            CitaCard(cita, true)
                        )
                }
            </div>
        </div>
    </div>
    </div>
    `

    return vista
}

export {CitasAsignadas}