let saludoSaludo = "¡Hola, ";
let saludoNombre = prompt("Ingresa tu nombre");

document.write("<h2>" + saludoSaludo + saludoNombre + "!" + "</h2>");

let primerNumero = parseInt(prompt("Ingrese el primer número"));
let segundoNumero = parseInt(prompt("Ingrese el segundo número"));
let tercerNumero = parseInt(prompt("Ingrese el tercer número"));


document.write("<br><br>")

let suma = primerNumero + segundoNumero 
let resta = primerNumero - segundoNumero
let division = primerNumero / segundoNumero 
let producto = primerNumero * segundoNumero 

document.write("La suma del primer y segundo número es de " + suma + ".");
document.write("<br> La resta del primer y segundo número es de " + resta + ".");
document.write("<br> El cociente del primer y segundo número es de " + division + ".");
document.write("<br> El producto del primer y segundo número es de " + producto + ".");






let parImpar = segundoNumero % 2 == 1 ? "<br>El segundo número es impar." : "<br>El segundo número es par.";
document.write(parImpar);



nuevaSuma = suma + tercerNumero;
nuevaResta = resta - tercerNumero;
nuevaDivision = division / tercerNumero;
nuevoProducto = producto * tercerNumero;

document.write("<hr>");
document.write("<br> El resultado de la suma del tercer número y el anterior resultado es " + nuevaSuma + ".");
document.write("<br> El resultado de la resta del tercer número y el anterior resultado es " + nuevaResta + ".");
document.write("<br> El resultado de la división del tercer número y el anterior resultado es " + nuevaDivision + ".");
document.write("<br> El resultado del producto del tercer número y el anterior resultado es " + nuevoProducto + ".");