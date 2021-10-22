var numero = parseInt(prompt("Ingrese numero de personas que participaran en la rifa"))
var nombres = [];

for(x = 1; x <= numero ; x++){
    var p = prompt("Nombre del participante")
    nombres.push(p);
}

campeon (nombres);
function campeon (nombres){
a = Math.floor(Math.random()*(nombres.length));
b = nombres[a];
alert(b);
alert(nombres);
}