// Evento que se dispara cuando se termina de cargar el DOM
//DOM: documento Object Model
document.addEventListener("DOMContentLoaded", function() {

    //Declaramos una variante del JavaScript que representa el boton
    var btnSUM = document.getElementById("btn-sum")

    //Declaramos un evento click en ese boton
    btnSUM.addEventListener("click", function() {
        //Declaramos una variable que representa el imput del HTML

        //Aqui agarramos el valor de la caja de texto input
        //El cual retorna un tipo string
            var value1 = document.getElementById("input-value1").value;

        //Transforma el valor de la caja de texto a tipo float
        var value1Number = parseFloat(value1)

        //En una sola linea obtiene el valor del texto del imput y lo transforma a float
        var value2Number = parseFloat(document.getElementById("input-value2").value);

        // isNaN = is not a number 
        if(isNaN(value1Number) || isNaN(value2Number)){
            //alert = mensajes para el usuario
            alert("Introduce solamente valores numericos");
            //console = mensajes para el desarrollador
            console.error("El usuario ingreso un valor invalido");
            return;
        }
        
        var result = value1Number + value2Number;
        alert("La suma de los valores es " + result);
})

        //Declaramos una variante del JavaScript que representa el boton
    var btnRest= document.getElementById("btn-rest")

    //Declaramos un evento click en ese boton
    btnRest.addEventListener("click", function() {
        //Declaramos una variable que representa el imput del HTML

        //Aqui agarramos el valor de la caja de texto input
        //El cual retorna un tipo string
            var value1 = document.getElementById("input-value1").value;

        //Transforma el valor de la caja de texto a tipo float
        var value1Number = parseFloat(value1)

        //En una sola linea obtiene el valor del texto del imput y lo transforma a float
        var value2Number = parseFloat(document.getElementById("input-value2").value);

        // isNaN = is not a number 
        if(isNaN(value1Number) || isNaN(value2Number)){
            //alert = mensajes para el usuario
            alert("Introduce solamente valores numericos");
            //console = mensajes para el desarrollador
            console.error("El usuario ingreso un valor invalido");
            return;
        }
        
        var result = value1Number - value2Number;
        alert("La resta de los valores es " + result);
    })

})