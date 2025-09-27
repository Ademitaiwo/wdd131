// Footer year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Weather data (static for now)
const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);

// Wind chill function (Celsius version)
function calculateWindChill(t, w) {
    return (
        13.12 +
        0.6215 * t -
        11.37 * Math.pow(w, 0.16) +
        0.3965 * t * Math.pow(w, 0.16)
    ).toFixed(1);
}

// Apply wind chill if conditions are valid
if (temp <= 10 && wind > 4.8) {
    document.getElementById("windchill").textContent = calculateWindChill(temp, wind) + " °C";
} else {
    document.getElementById("windchill").textContent = "N/A";
}
