``

function convertTemperature() {
    const tempInput = document.getElementById('temperature').value;
    const unitInput = document.getElementById('unit').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(tempInput) || tempInput === '') {
        resultDiv.innerHTML = "Please enter a valid number!";
        return;
    }

    const temperature = parseFloat(tempInput);
    let convertedTemp;
    let resultMessage = '';

    switch (unitInput) {
        case 'celsius':
            convertedTemp = (temperature * 9/5) + 32;
            resultMessage += `Fahrenheit: ${convertedTemp.toFixed(2)} °F<br>`;
            convertedTemp = temperature + 273.15;
            resultMessage += `Kelvin: ${convertedTemp.toFixed(2)} K`;
            break;
        case 'fahrenheit':
            convertedTemp = (temperature - 32) * 5/9;
            resultMessage += `Celsius: ${convertedTemp.toFixed(2)} °C<br>`;
            convertedTemp = ((temperature - 32) * 5/9) + 273.15;
            resultMessage += `Kelvin: ${convertedTemp.toFixed(2)} K`;
            break;
        case 'kelvin':
            convertedTemp = temperature - 273.15;
            resultMessage += `Celsius: ${convertedTemp.toFixed(2)} °C<br>`;
            convertedTemp = (temperature - 273.15) * 9/5 + 32;
            resultMessage += `Fahrenheit: ${convertedTemp.toFixed(2)} °F`;
            break;
    }

    resultDiv.innerHTML = `Converted Temperature:<br>${resultMessage}`;
}
