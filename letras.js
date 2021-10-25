var letras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var numero = parseInt(prompt("ingresa un numero"));

for(var i = 1; i <= numero; i++){
    let palabra = cadena();
    console.log(palabra);
}

function cadena(i){
    let palabra = "";
    for(var j = 1; j <= i j++) {
        palabra = palabra + letras[aleatorio()];
    }
    return palabra;
}

function aleatorio(){
    var aleatorio = Math.floor(Math.random() * letras.length);
    return aleatorio;
}