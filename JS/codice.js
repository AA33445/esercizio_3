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
var divErrore2 = document.getElementById("erroreInput2");

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

number2.addEventListener("keyup", function () {
    divErrore2.innerHTML = "";
    document.getElementById("bottone").style.display = "inline-block";

    if (number2.value > 30) {
        const paragrafoErrore2 = document.createElement("div");
        paragrafoErrore2.innerHTML = "jkoyhuiokhuiohyok";
        divErrore2.append(paragrafoErrore2);
        document.getElementById("bottone").style.display = "none";
    }
});
