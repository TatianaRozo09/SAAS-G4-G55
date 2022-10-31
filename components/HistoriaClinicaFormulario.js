

const HistoriaClinicaFormulario= ()=>{

    const vista=
    `
    <form class="row g-3">
        <div class="col-md-4">
        <label for="validationServer01" class="form-label">Nombres</label>
        <input type="text" class="form-control" value="" required>
        <div class="valid-feedback">      
        </div>
        </div>
        <div class="col-md-4">
        <label for="validationServer02" class="form-label">Apellidos</label>
        <input type="text" class="form-control" value="" required>
        <div class="valid-feedback">       
        </div>
        </div><div class="col-md-4">
            <label for="validationServer04" class="form-label">Tipo de identificación:</label>
            <select class="form-select" id="validationServer04" aria-describedby="validationServer04Feedback" required>
            <option selected disabled value="">Seleccione</option>
            <option>Cedula de Ciudadania</option>
            <option>Carnet diplomatico</option>
            <option>Tarjeta de Identidad</option>
            <option>Registro Civil</option>
            <option>Pasaporte</option> 
            <option >Cedula de extranjeria</option>        
            </select>       
        </div>
        <div class="col-md-5">
            <label for="validationServer05" class="form-label">N° Documento</label>
            <input type="text" class="form-control" required>
            <div id="validationServer05Feedback" class="invalid-feedback">        
            </div>
        </div>
        <div class="col-md-7">
            <label for="validationServer04" class="form-label">Tipo de Usuario:</label>
            <select class="form-select" id="validationServer04" aria-describedby="validationServer04Feedback" required>
            <option selected disabled value="">Seleccione</option>
            <option>Régimen Contributivo</option>
            <option>Régimen Subsidiado</option>
            </select>
            <div id="validationServer04Feedback" class="invalid-feedback">        
            </div>
        </div>   
        <div class="col-md-6">
        <label for="validationServerUsername" class="form-label">E-mail</label>
        <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend3">@</span>
            <input type="text" class="form-control"  aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required>
            <div id="validationServerUsernameFeedback" class="invalid-feedback">          
            </div>
        </div>
        </div>
        <div class="col-md-6">
            <label for="validationServer04" class="form-label">Especialidad:</label>
            <select class="form-select" id="validationServer04" aria-describedby="validationServer04Feedback" required>
            <option selected disabled value="">Seleccione</option>
            <option>Todos</option>        
            </select>
            <div id="validationServer04Feedback" class="invalid-feedback">        
            </div>
        </div> 
        <div class="col col-md-12">
            <label for="fecha" class="form-label">Año de Consulta:</label>
            <input type="date" class="form-control" id="fecha">
        </div>    
        <div class="col-12">
        <div class="form-check">
            <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required>
            <label class="form-check-label" for="invalidCheck3">
                Acepta términos y condiciones
            </label>
            <div id="invalidCheck3Feedback" class="invalid-feedback">
                Usted debe estar de acuerdo para continuar.
            </div>
        </div>
        </div>
        <div class="col col-md-3">  
        <button type="submit" class="btn btn-primary mt-3">Consultar</button> 
        </div> 
    </form>
    `

    return vista
}

export {HistoriaClinicaFormulario}