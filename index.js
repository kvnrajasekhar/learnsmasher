var inputval = document.querySelector('#cityip')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityop')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var mntemp = document.querySelector('#min_tem')
var mxtemp = document.querySelector('#max_tem')
var wind = document.querySelector('#wind')
var pressure = document.querySelector('#pressure')
var hum = document.querySelector('#humidity')
apik = "3045dd712ffe6e702e3245525ac7fa38"
function convertion(val) {
    return (val - 273).toFixed(2)
}


btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputval.value + '&appid=' + apik)
        .then(res => res.json())


        .then(data => {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var max_tempa = data['main']['temp_max']
            var min_tempa = data['main']['temp_min']
            var wndspd = data['wind']['speed']
            var press = data['main']['pressure']
            var humd = data['main']['humidity']
            city.innerHTML = `Weather of <span>${nameval}<span>`
            temp.innerHTML = `Temperature: <span>${convertion(tempature)} C </span>`
            max_tem.innerHTML = `Max Temp: <span>${convertion(max_tempa)} C </span>`
            min_tem.innerHTML = `Min Temp: <span>${convertion(min_tempa)} C </span> `
            description.innerHTML = `Sky : <span>${descrip}<span>`
            wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`
            pressure.innerHTML = `Pressure: <span>${press} hPa<span>`
            hum.innerHTML = `Humidity : <span>${humd}<span>`

        })

        .catch(err => alert('You Have Entered Wrong city name'))
        switch (tempature) {
            case (tempature <= 50):
                document.getElementById('container-fluid').style.color = "rgb(58, 194, 58)";
                document.getElementById('container-fluid').style.border = "rgb(58, 194, 58)";
                break;
            case (tempature >= 51 && tempature <= 100):
                document.getElementById('container-fluid').style.color = "rgb(242, 245, 54)";
                document.getElementById('container-fluid').style.border = "rgb(242, 245, 54)";
                break;
            case (tempature >= 101 && tempature <= 150):
                document.getElementById('container-fluid').style.color = "rgb(243, 156, 57)";
                document.getElementById('container-fluid').style.border = "rgb(243, 156, 57)";
                break;
            case (tempature >= 151 && tempature <= 200):
                document.getElementById('container-fluid').style.color = "rgb(245, 22, 22)";
                document.getElementById('container-fluid').style.border = "rgb(245, 22, 22)";
                break;
            case (tempature >= 201 && tempature <= 300):
                document.getElementById('container-fluid').style.color= " rgb(136, 69, 245)";
                document.getElementById('container-fluid').style.border = "rgb(136, 69, 245)";
                break;
            case (temp > 300):
                document.getElementById('container-fluid').style.color = "rgb(160, 59, 59)";
                document.style.border = "rgb(160, 59, 59)";
                break;
        
        }

})


