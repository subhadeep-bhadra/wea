async function getWeather() {
    const location = document.getElementById("locationInput").value;

    if (!location) {
        alert("Please enter a location");
        return;
    }

    const apiKey = "592c74de9c4f4247865160625263004";
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            document.getElementById("weatherResult").innerHTML = "Location not found!";
            return;
        }

        const temp = data.current.temp_c;
        const condition = data.current.condition.text;
        const city = data.location.name;
        const country = data.location.country;

        document.getElementById("weatherResult").innerHTML = `
            <h3>${city}, ${country}</h3>
            <p>Temperature: ${temp} °C</p>
            <p>Condition: ${condition}</p>
        `;
    } catch (error) {
        document.getElementById("weatherResult").innerHTML = "Error fetching data!";
    }
}