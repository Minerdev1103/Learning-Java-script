function toCelsius(fahrenheit)
{
    
    let value =(fahrenheit - 32) * 5 / 9
    return value.toFixed(2) + " Celsius"
}

 function display(elementId, value)
 {
    document.getElementById(elementId).innerHTML = "<br>"+value+"</br>"
 }


function toFahrenheit(Celsius)
{
    
    let value =(Celsius * 1.8) + 32
     return value.toFixed(2) + " F"
}

function toCelsiusProgram(value)
{
    alert(toCelsius(value))
}

function toFahrenheitProgram(value)
{
    alert(toFahrenheit(value))
}