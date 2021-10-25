function contarVocales(texto){
    return texto.replace(/[^aeiouAEIOUáéíóúÁÉÍÓÚ]/g, "").length;
}
var x = prompt("Ingrese una frase");
console.log(contarVocales(x));

