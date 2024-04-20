/*function toCelsius()
{
    let fahrenheit = prompt("Fahrenheit:")
    let value =(fahrenheit - 32) * 5 / 9
    document.getElementById("answer_section").innerHTML =value.toFixed(2) + " Celsius"
}
toCelsius()  */

function toFahrenheit()
{
    let Celsius = prompt("Celsius:")
    let value =(Celsius * 1.8) + 32
    document.getElementById("answer_section").innerHTML =value.toFixed(2) + "F"
}
toFahrenheit()