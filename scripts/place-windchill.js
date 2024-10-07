const windchill = document.querySelector("#windchill");
const temperature = document.getElementById("temp-value");
const windSpeed = document.getElementById("windspeed-value")

function calculateWindChill(temperature, windSpeed, unit) {
    if ((unit === 'metric' && temperature <= 10 && windSpeed > 4.8) ||
        (unit === 'imperial' && temperature <= 50 && windSpeed > 3)) {
        return unit === 'metric'
            ? (13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16))).toFixed(2) + " °C"
            : (35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16))).toFixed(2) + " °F";
    } else {
        return "N/A";
    }
}

windchill.innerHTML = `<span>${calculateWindChill(28, 21, 'metric')}<span>`;