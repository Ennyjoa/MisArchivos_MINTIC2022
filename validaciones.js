function validar_nombre_usuario (string){
    var regex = new RegExp("^[A-Z][a-zA-Z]{5,29}$", "g");
    return regex.test(string);
}

function validar_anoNacimiento_usuario(valor){
    var regex = new RegExp("^[0-9]{4}$", "g");
    var agno = Number(valor);
    var bool = agno>=1900 && agno<2022;
    var mayor = (2021-agno)>=18;
    return regex.test(valor) && bool && mayor;
}

function validar_contrasena(string){
    var regex = new RegExp("^[a-zA-Z0-9]{6,30}$", "g");
    var min = new RegExp("[a-z]", "g").test(string);
    var mayus = new RegExp("[A-Z]", "g").test(string);
    var num = new RegExp("[0-9]", "g").test(string);
    return regex.test(string);
}

function confirmar_contrasena(stringA, stringB){
    var primera = validar_contrasena(stringA);
    var segunda = validar_contrasena(stringB);
    if(validar_contrasena() == segunda){
        return true;
    }
    else{
        return false;
    }
}

module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_anoNacimiento_usuario = validar_anoNacimiento_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.confirmar_contrasena = confirmar_contrasena;