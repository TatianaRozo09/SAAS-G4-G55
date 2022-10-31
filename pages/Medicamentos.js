import { MedicamentosFormulario } from "../components/MedicamentosFormulario.js"


const Medicamentos = async () => {

    const vista =
        `
    <div class="container mt-3 mb-3">
    <div class="row justify-content-md-center">
        <div class="col col-sm-12 col-md-8 col-lg-6">
            <div class="card-body">
                <h3 class="text-center">Medicamentos</h3>
                ${MedicamentosFormulario()}  
            </div>
        </div>
    </div>
    </div>
    `

    return vista
}

export { Medicamentos }