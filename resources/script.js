// Evento que se dispara cuando se termina de cargar el DOM
//DOM: documento Object Model
document.addEventListener("DOMContentLoaded", function() {

    //Declaramos una variante del JavaScript que representa el boton
    var btnOK = document.getElementById("btn-ok")

    //Declaramos un evento click en ese boton
    btnOK.addEventListener("click", function() {
        //Declaramos una variable que representa el imput del HTML
            var name = document.getElementById("input-name");

        //Mostramos una alreta del navegador con el contenido del input
        alert("Hello World " + name.value);
        console.log("Se imprimo el hola mundo");
        console.error("Esto es un error simulado");
    })

})