const form = document.querySelector("#input form");
const input = document.querySelector("#input form input");

function getWeatherData(cityName) {
    
    const apiKey = "2c09af89cc7953eb2917b4239b1fade4";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            displayWeatherData(data);
        })
        .catch(() => {
            message.textContent = "Invalid City Name !";
        });

        const message = document.querySelector(".message");
        message.textContent = "";
        form.reset();
        input.focus();
}

function displayWeatherData(data) {
    const {main, name, sys, weather} = data;

    const li = document.createElement("li");
    li.classList.add("city");
    const markup = `
                <h2 class="city-name">
                    <span>${name}</span>
                    <span>${sys.country}</span>
                </h2>
                <div class="city-temp">${main.temp}<sup>°</sup>C</div>
                <div class="icon">
                    <img src="./icons/${weather[0].icon}.png" />
                    <p>${weather[0].description}</p>
                </div>
                `;

    li.innerHTML = markup;

    const list = document.querySelector(".cities");
    list.appendChild(li);
}

form.addEventListener("submit", e => {
    e.preventDefault();

    getWeatherData(input.value);
});



