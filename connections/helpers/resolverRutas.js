

export default (ruta)=>{

    if(ruta.length<3){
        return (ruta==="/") ? ruta : "/:id"
    }

    return `/${ruta}`
}