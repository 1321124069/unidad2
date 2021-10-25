var palabra = prompt("inserta una palabra");



function contarVocales(v){
    return v.replace(/[^aeiouAEIOU]/g, "").length;
}


console.log("vocales:" + contarVocales(palabra));


function contarnovocales(n){
    return n.replace(/[^bcdfghjklmnpqrstvwxyz]/g, "").length;
}
console.log("no vocales:" + contarnovocales(palabra));

function reverse(r){
    var palabra = r
    return r.split("").reverse().join("");
}

console.log(reverse(palabra));
