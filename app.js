// YOUR JS CODE HERE
fetch('https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1')
    .then((res) => res.json())
    .then((data) => {
        let dateStr = data.current.time;
        let date = dateStr.toLocaleString();

        console.log(date);
        document.getElementsByClassName('degree')[0].innerHTML = `<div class="degree">${data.current.temperature_2m}°C</div>`;
        document.getElementsByClassName('wind')[0].innerHTML = `<div class="wind">Wind speed: ${data.current.wind_speed_10m} km/h</div>`;
        document.getElementsByClassName('date')[0].innerHTML = `<div class="date">Last updated: ${date}</div>`;

        console.log(data);
    })
    .catch((error) => console.error(error));