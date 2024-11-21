// YOUR JS CODE HERE
fetch('https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1')
    .then((res) => res.json())
    .then((data) => {
        document.getElementsByClassName('degree')[0].innerHTML = `<div class="degree">${data.current.temperature_2m} ${data.current_units.temperature_2m}</div>`;
        document.getElementsByClassName('wind')[0].innerHTML = `<div class="wind">Wind speed: ${data.current.wind_speed_10m}  ${data.current_units.wind_speed_10m}</div>`;
        document.getElementsByClassName('date')[0].innerHTML = `<div class="date">Last updated: ${new Date(data.current.time).toLocaleString()}</div>`;
        console.log(data);
    })
    .catch((error) => console.error(error));