var none
const getURL = window.location.search;
const urlParams = new URLSearchParams(getURL);
const nombre = urlParams.get('nombre')

var audio = document.getElementById("audio");
none = " "
function getBotResponse(input) {
    input = input.toLowerCase();

//PALABRAS
    if (input.includes("hola")){
        return "Hola ";
    }
    if (input.includes("me gusta")){
        return "A mi tambien 🤗";
    }
    if (input.includes("adios")){
        return "Adios 👋";
    }



    

    // COMANDOS
    if (input == "/reload"){
        window.location.reload();
        return "RELOAD";
    }
    if (input == "/flamingo-stop"){
        audio.pause();
        audio.currentTime = 0;
        return "STOPPING FLAMINGO";
    }
    if (input == "/flamingo"){
        audio.play();
        return "PLAYING FLAMINGO";
    }
    if (input == "/link"){
        window.location.href = "?nombre=";
    }
    if (input == "/display-name"){
        return nombre;
    }
    





   //PRINCIPAL
    if (input.includes("escribe algo :)" )){
        return none;
    }
    else {
        return "Intenta otra cosa";
    }
}
