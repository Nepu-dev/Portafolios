//Validación del formulario (Es lo unico que se me ocurrió para hacer con js)
$("#formulario").on("submit",function(e) {
    e.preventDefault();
    if ($("#nombre").val() == "" || $("#correo").val() == "" || $("#mensaje").val() == "") {
        $("#msg").text("Rellene todos los campos")
        $("#msg").css({
            "color" : "red"
        })
    } else {
        $("#msg").text("Mensaje enviado")
        $("#msg").css({
            "color" : "green"
        })
    }
})