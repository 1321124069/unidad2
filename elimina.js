var palabra = prompt("ingresa una palabra");
var simbolos = ["/","*","+","-","=",",","'","_","&","^","%","$","#","@","!","?",".",":",";","(",")","{","}","[","]","|","<",">"," "];


for(var i = 0;  i< simbolos.length; i++){
palabra=palabra.replace(simbolos[i],"");
}

alert(palabra);