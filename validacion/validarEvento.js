export default function validarEvento(valores) {

    let errores = {};

    if(!valores.name) {
        errores.name = "Nombre Obligatorio";
    }

    if(!valores.fecha) {
        errores.fecha = "Fecha Obligatoria";
    }

    if(!valores.conteo) {
        errores.conteo = "Conteo Obligatorio";
    }

    if(!valores.desc) {
        errores.desc = "Descripción Obligatoria";
    }    

    if(!valores.utm) {
        errores.utm = "UTM Obligatoria";
    }  
    
    if(!valores.horario) {
        errores.horario = "Horario Obligatorio";
    }    

    if(!valores.objetos) {
        errores.objetos = "Objetos Obligatorios";
    }  

    if(!valores.slug) {
        errores.slug = "Email Obligatorio";
    }

    return errores;
}