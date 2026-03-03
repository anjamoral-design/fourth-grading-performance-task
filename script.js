function converttemperature() {}
    let temp = document.getElementById("temperature").value;
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");

    if (temp === "") {
        result.innerHTML = "Please enter a temperature!";
        return;
    }

    temp = parseFloat(temp);

    let celsius, fahrenheit, kelvin;

    if (unit === "celsius") {
        celsius = temp;
        fahrenheit = (temp * 9/5) + 32;
        kelvin = temp + 273.15;
    } 
    else if (unit === "fahrenheit") {
        celsius = (temp - 32) * 5/9;
        fahrenheit = temp;
        kelvin = celsius + 273.15;
    } 
    else if (unit === "kelvin") {
        celsius = temp - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = temp;
    }

    result.innerHTML = 
        "Celsius: " + celsius.toFixed(2) + " °C <br>" +
        "Fahrenheit: " + fahrenheit.toFixed(2) + " °F <br>" +
        "Kelvin: " + kelvin.toFixed(2) + " K";
