var operacion = prompt("ingresa operacion (Suma,Resta,Multiplicacion,Division)")

switch(operacion){
    case "suma":
        Suma()
    function Suma(){
        let n1 = 10;
        let n2 = 5;
        console.log(n1 + n2);
    }
    break

    case "resta":
        Resta()
    function Resta(){
        let n1 = 10;
        let n2 = 5;
        console.log(n1 - n2);
    }
    break

    case "multiplicacion":
        Multiplicacion()
        function Multiplicacion(){
            let n1 = 10;
            let n2 = 5;
            console.log(n1 * n2);
        }
    break

    case "division":
        Division()
        function Division(){
            let n1 = 10;
            let n2 = 5;
            console.log(n1 / n2);
        }
    break
}