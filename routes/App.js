import { Nav } from "../layout/Nav.js"
import { Footer } from "../layout/Footer.js"
import { Error404 } from "../pages/Error404.js"
import {IniciarSesion} from "../pages/IniciarSesion.js"
import {Registrarse} from "../pages/Registrarse.js"
import {Medicamentos} from "../pages/Medicamentos.js"
import {HistoriaClinica} from "../pages/HistoriaClinica.js"
import {AsignarCitas} from "../pages/AsignarCitas.js"
import {CitasAsignadas} from "../pages/CItasAsignadas.js"
import resolverRutas from "../connections/helpers/resolverRutas.js"
import getHash from "../connections/helpers/getHash.js"

const Rutas={

    "/": IniciarSesion,
    "/registrarse": Registrarse,
    "/medicamentos": Medicamentos,
    "/historiaclinica": HistoriaClinica,
    "/asignarcitas": AsignarCitas,
    "/citasasignadas": CitasAsignadas,
}

const App= async ()=>{

    const header= document.querySelector("header")
    const main= document.querySelector("main")
    const footer= document.querySelector("footer")

    header.innerHTML= await Nav()
    footer.innerHTML= await Footer()

    let ruta= await resolverRutas(getHash())
    let pagina= (Rutas[ruta]) ? Rutas[ruta] : Error404

    main.innerHTML= await pagina()
}

export {App}