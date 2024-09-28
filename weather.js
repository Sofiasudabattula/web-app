var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');

var apik = "3dbde4521cf5a65b46333d5db2057f28";

function conversion(val) {
    return (val - 273.15).toFixed(2); 
}

btn.addEventListener('click', function() {   
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
    .then(res => res.json())
    .then(data => {
        var nameval = data['name'];
        var descrip = data['weather'][0]['description'];
        var tempature = data['main']['temp'];
        var wndspeed = data['wind']['speed'];

        city.innerHTML = `Weatherof <span>${nameval}</span>`;
        temp.innerHTML =`Temperature: <span>${conversion(tempature)} C</span>`;
        description.innerHTML =`Sky Conditions: <span>${descrip}</span>`;
        wind.innerHTML =` Wind speed: <span>${wndspeed} km/h</span>`;
    })
    .catch(err => alert('You entered the wrong city name'));
});