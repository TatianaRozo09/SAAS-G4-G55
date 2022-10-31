

const AsignarCitaFormulario= ()=>{

    const vista=
    `
    <form>
        <div class="row">
            <div class="col col-md-6 col-lg-12">
                <label for="fecha" class="form-label">Fecha</label>
                <input type="date" class="form-control" id="fecha">
            </div>
            <div class="col col-md-6 col-lg-12">
                <label for="hora" class="form-label">Hora</label>
                <input type="time" class="form-control" id="hora">
            </div>
        </div>

        <div class="row">
            <div class="col col-md-6 col-lg-12">
                <div class="mb-3 mb-lg-3">
                    <label for="equipolocal" class="form-label">Tipo de documento</label>
                    <select name="" id="equipolocal" class="form-select">
                        <option selected>Seleccione</option>
                        <option value="1">Registro civil</option>
                        <option value="2">Trajeta de identidad</option>
                        <option value="3">Cedula de ciudadania</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col col-md-6 col-lg-12">
                <label for="numerodocumento" class="form-label">Numero de documento</label>
                <input type="text" class="form-control" id="numerodocumento">
            </div>
            <div class="col col-md-6 col-lg-12">
                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="nombre">
            </div>
            <div class="col col-md-6 col-lg-12">
                <label for="doctor" class="form-label">Doctor</label>
                <input type="text" class="form-control" id="doctor">
            </div>
            <div class="col col-md-6 col-lg-12">
                <label for="tipoconsulta" class="form-label">Tipo de consulta</label>
                <input type="text" class="form-control" id="tipoconsulta">
            </div>
        </div>


        <button type="submit" class="btn btn-primary mt-3">Asignar cita</button>
</form>
    `

    return vista
}

export {AsignarCitaFormulario}