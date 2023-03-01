var String = "Target"

console.log("String informada: " + String)

var array = String.split('')//Separar a string em um array
var letra = " "

for (var i = 0; i < String.length / 2; i++) { //Método para inverter um array

    letra = array[i]
    array[i] = array[String.length - i - 1]
    array[String.length - i - 1] = letra


}

String = array.join("") //Conversão de array para string

console.log("String invertida: " + String)

