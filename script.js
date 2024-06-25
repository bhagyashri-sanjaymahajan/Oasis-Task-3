function convert() {
    let inputTemp = parseFloat(document.getElementById('inputTemp').value);
    let inputUnit = document.getElementById('inputUnit').value;

    let celsius, fahrenheit, kelvin;

    if (isNaN(inputTemp)) {
        alert("Please enter a valid temperature.");
        return;
    }

    switch (inputUnit) {
        case 'Celsius':
            celsius = inputTemp;
            fahrenheit = (inputTemp * 9/5) + 32;
            kelvin = inputTemp + 273.15;
            break;
        case 'Fahrenheit':
            celsius = (inputTemp - 32) * 5/9;
            fahrenheit = inputTemp;
            kelvin = celsius + 273.15;
            break;
        case 'Kelvin':
            celsius = inputTemp - 273.15;
            fahrenheit = (celsius * 9/5) + 32;
            kelvin = inputTemp;
            break;
        default:
            alert("Please select a valid unit.");
            return;
    }

    document.getElementById('outputCelsius').innerText = `Celsius: ${celsius.toFixed(2)}°C`;
    document.getElementById('outputFahrenheit').innerText = `Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
    document.getElementById('outputKelvin').innerText = `Kelvin: ${kelvin.toFixed(2)}K`;
}