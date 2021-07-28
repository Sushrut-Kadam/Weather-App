const form = document.querySelector("#input form");
const input = document.querySelector("#input form input");


form.addEventListener("submit", e => {
    e.preventDefault();
    const inputVal = input.value;

    const apiKey = "2c09af89cc7953eb2917b4239b1fade4";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric `;

    fetch(url
    ).then(response => response.json()
    ).then(data => {
        const { main, name, sys } = data;

        const li = document.createElement("li");
        li.classList.add("city");
        const markup = `
                <h2 class="city-name" data-name="${name}, ${sys.country}">
                    <span>${name}</span>
                    <span>${sys.country}</span>
                </h2>
                <div class="city-temp">${main.temp}<sup>°C</sup>
                </div>
                `;


        const list = document.querySelector(".cities");

        console.log(list);

        li.innerHTML = markup;
        list.appendChild(li);
    })
        .catch(() => {
            message.textContent = "Invalid City Name !";
        });



    const message = document.querySelector(".message");

    message.textContent = "";
    form.reset();
    input.focus();
});



