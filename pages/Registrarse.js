import {RegistrarseFormulario} from "../components/RegistrarseFormulario.js"

const Registrarse = ()=>{

    const vista=
    `
    <div class="container mt-3 mb-3">
        <div class="row justify-content-md-center">
            <div class="col col-sm-12 col-md-8 col-lg-6">
                <div class="card-body">
                    <h3 class="text-center">Registrarse</h3>
                    ${RegistrarseFormulario()}
                    
                    <div class="mt-3">
                        <a href="#/">¿Ya tiene una cuenta? Inicie sesion aqui.</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `

    return vista
}

export {Registrarse}