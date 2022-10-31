const Footer= ()=>{
    return (
    `
    <footer class="text-center text-lg-start text-muted" style="background-color: grey;">
        <section class="container text-center text-md-start mt-5 p-4">
            <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4" style="color: black;">Nuestras redes sociales</h6>
                <div>
                <a href="#" class="me-4 text-reset"><i class="bi bi-facebook" style="color: blue;"></i></a>
                <a href="#" class="me-4 text-reset"><i class="bi bi-whatsapp" style="color: green;"></i></a>
                <a href="#" class="me-4 text-reset"><i class="bi bi-youtube" style="color: red;"></i></a>
                </div>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

            </div>
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4" style="color: black;">Contacto</h6>
                <p style="color: black;"><i class="bi bi-geo-alt-fill"></i>  Cr 124 #32-12 Bogota </p>
                <p style="color: black;"><i class="bi bi-envelope-fill"></i>  clinicasanluis@hotmail.com</p>
                <p style="color: black;"><i class="bi bi-telephone-fill"></i>  +57 3115632451</p>
            </div>
            </div>
        </section>

        <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05); color: black;">
            © 2022 Copyright:
            <a class="text-reset fw-bold" href="#" style="color: black;">Clinica san luis</a>
        </div>
    </footer>

    `)
}

export {Footer}