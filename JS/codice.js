// var numero1 = document.getElementById("numero1").value;
// var numero2 = document.getElementById("numero2").value;

// function somma() {
//     console.log(parseInt(numero1) + parseInt(numero2));
// }

// function checkValue() {
//     if (parseInt(numero1) > 5) {
//         console.log("numero troppo grande");
//     }
// }

var number1 = document.getElementById("numero1");
var number2 = document.getElementById("numero2");
var divErrore1 = document.getElementById("erroreInput1");

number1.addEventListener("keyup", function () {
    divErrore1.innerHTML = "";
    document.getElementById("bottone").style.display = "inline-block";

    if (number1.value > 5) {
        const paragrafoErrore = document.createElement("div");
        paragrafoErrore.innerHTML = "numero troppo grande";
        divErrore1.append(paragrafoErrore);

        document.getElementById("bottone").style.display = "none";
    }
});
