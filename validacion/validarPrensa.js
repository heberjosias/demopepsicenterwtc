export default function validarPrensa(valores) {

    let errores = {};
 
    if(!valores.medio) {
        errores.medio = "Medio Obligatorio";
    }

    if(!valores.evento) {
        errores.evento = "Evento Obligatorio";
    }

    if(!valores.nameS) {
        errores.nameS = "Nombre Solicitante Obligatorio";
    }

    if(!valores.cargoS) {
        errores.cargoS = "Cargo Solicitante Obligatorio";
    }
    
    if(!valores.emailS) {
        errores.emailS = "Email Solicitante Obligatorio";
    }    

    if(!valores.phoneS) {
        errores.phoneS = "Teléfono Solicitante Obligatorio";
    }        

    if(!valores.nameE) {
        errores.nameE = "Nombre Editor Obligatorio";
    }

    if(!valores.cargoE) {
        errores.cargoE = "Cargo Editor Obligatorio";
    }
    
    if(!valores.emailE) {
        errores.emailE = "Email Editor Obligatorio";
    }    

    if(!valores.phoneE) {
        errores.phoneE = "Teléfono Editor Obligatorio";
    }            


    return errores;
}