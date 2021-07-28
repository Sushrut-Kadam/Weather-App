const form = document.querySelector("#input form");
const input = document.querySelector("#input form input");


form.addEventListener("submit", e => {
    e.preventDefault();
    const inputVal = input.value;
    console.log("Working");
    console.log(inputVal);
    console.log(input.value);

    const apiKey = "2c09af89cc7953eb2917b4239b1fade4";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=2c09af89cc7953eb2917b4239b1fade4`;

    fetch(url
    ).then(response => response.json()
    ).then(data => {
            const { main, name, sys, weather } = data;

            const li = document.createElement("li");
            li.classList.add("city");
            const markup = `
                <h2 class="city-name" data-name="${name}, ${sys.country}">
                    <span>${name}</span>
                    <sup>${sys.country}</sup>
                </h2>
                <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup>
                </div>
                <!-- <figure>
                    <img class="city-icon" src= alt=${weather[0]["main"]}>
                    <figcaption>$weather[0]["description"]</figcaption>
                </figure> -->
                `;


            const list = document.querySelector(".result ul");

            li.innerHTML = markup;
            list.appendChild(li);
        })
        .catch(() => {
            message.textContent = "Invalid City Name";
        });
});


const message = document.querySelector(".message");

message.textContent = "";
form.reset();
input.focus();


