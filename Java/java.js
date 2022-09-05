// Change the type of input to password or text
function Toggle() {
    var temp = document.getElementById("claveIng");
    if (temp.type === "password") {
        temp.type = "text";
    }
    else {
        temp.type = "password";
    }
}

cerrarVentana =()=>{
    window.open();
    window.close();
}

