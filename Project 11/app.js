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

alert(toCelsius(150))
display("tocelsius",toCelsius(150))
alert(toFahrenheit(32))
display("toFahrenheit",toFahrenheit(150))
