

const RegistrarseFormulario= ()=>{

    const vista=
    `
    <form>
        <div class="mb-3 mb-lg-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="nombre" >
        </div>
        <div class="col col-md-6 col-lg-12">
            <div class="mb-3 mb-lg-3">
                <label for="equipolocal" class="form-label">Tipo de documento</label>
                <select name="" id="equipolocal" class="form-select">
                    <option selected>Seleccione</option>
                    <option>Cedula de Ciudadania</option>
                    <option>Carnet diplomatico</option>
                    <option>Tarjeta de Identidad</option>
                    <option>Registro Civil</option>
                    <option>Pasaporte</option> 
                    <option >Cedula de extranjeria</option>   
                </select>
            </div>
        </div>
        <div class="col col-md-6 col-lg-12">
            <label for="numerodocumento" class="form-label">Numero de documento</label>
            <input type="text" class="form-control" id="numerodocumento">
        </div>
        <div class="mb-3">
            <label for="usuario" class="form-label">usuario</label>
            <input type="text" class="form-control" id="usuario" >
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password">
        </div>
        <button type="submit" class="btn btn-primary mt-3">Registrarse</button>
    </form>
    `

    return vista
}

export {RegistrarseFormulario}