const Nav= ()=>{
    const vista=
    `
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: grey">
        <div class="container-fluid">
            <a class="navbar-brand" href="#" style="color: red;">Clinica san luis</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-lg-0">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color: black;">
                        Citas
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#/asignarcitas/" style="color: black;">Asignar citas</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#/citasasignadas/" style="color: black;">Ver citas asignadas</a></li>
                    </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#/medicamentos/" style="color: black;">Medicamentos</a>
                    </li>
                    <a class="nav-link" aria-current="page" href="#/historiaclinica/" style="color: black;">Historia clinica</a>
                    </li>

            </ul>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#/registrarse/" style="color: black;">Registrarse</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#/" style="color: black;">Iniciar sesion</a>
                </li>
                <a class="nav-link" aria-current="page" href="#" style="color: black;">Cerrar sesion</a>
                </li>
        
            </ul>

            </div>
        </div>
    </nav>
    `

    return vista
}

export {Nav}