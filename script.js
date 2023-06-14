function convertTemperature() {
    var temperatureInput = document.getElementById("temperature").value;
    
    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for the temperature.");
        return;
    }
    
    var temperature = parseFloat(temperatureInput);
    var unit = document.getElementById("unit").value;
    
    var celsius, fahrenheit, kelvin;
    
    if (unit === "celsius") {
        celsius = temperature;
        fahrenheit = (temperature * 9/5) + 32;
        kelvin = temperature + 273.15;
    } else if (unit === "fahrenheit") {
        celsius = (temperature - 32) * 5/9;
        fahrenheit = temperature;
        kelvin = (temperature - 32) * 5/9 + 273.15;
    } else if (unit === "kelvin") {
        celsius = temperature - 273.15;
        fahrenheit = (temperature - 273.15) * 9/5 + 32;
        kelvin = temperature;
    }
    
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Celsius: " + celsius.toFixed(2) + "°C<br/>" +
                              "Fahrenheit: " + fahrenheit.toFixed(2) + "°F<br/>" +
                              "Kelvin: " + kelvin.toFixed(2) + "K";
}
