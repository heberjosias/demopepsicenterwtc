export default function validarNewsletter(valores) {

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

    return errores;
}