export default function validarContrata(valores) {

    let errores = {};

    if(!valores.name) {
        errores.name = "Nombre Obligatorio";
    }

    if(!valores.email) {
        errores.email = "Email Obligatorio";
    }

    if(!valores.phone) {
        errores.phone = "Teléfono Obligatorio";
    }

    if(!valores.show) {
        errores.show = "Tipo de Show Obligatorio";
    }

    return errores;
}