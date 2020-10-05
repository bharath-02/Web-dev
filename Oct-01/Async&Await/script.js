async function loadCountries() {
    // Getting data from REST API
    var countryRequest = await fetch('https://restcountries.eu/rest/v2/all');
    var countryData = await countryRequest.json();
    //  Looping through all the Countries
    for (var i = 0; i < countryData.length; i++) {
        //  Setting the necessary details
        var countryName = countryData[i].name;
        var capital = countryData[i].capital;
        var flag = countryData[i].flag;
        var latlng = countryData[i].latlng;
        var region = countryData[i].region;
        var currencyCode = countryData[i].currencies[0].name;
        var currencySymbol = countryData[i].currencies[0].code;
        //  Creating the card
        var outerDiv = document.createElement('div');
        outerDiv.setAttribute('class', 'col-sm-6');
        var card = document.createElement('div');
        card.setAttribute('class', 'card');
        var cardBody = document.createElement('div')
        cardBody.setAttribute('class', 'card-body');
        //  Card title
        var cName = document.createElement('h4');
        cName.setAttribute('class', 'card-title text-center');
        cName.innerHTML = countryName;
        //Rest of the details
        var key = ['Capital', 'Region', 'Flag', 'Latlng', 'Currency-Code', 'Currrency-Symbol'];
        var value = [capital, region, flag, latlng, currencyCode, currencySymbol];
        var details = setValues(key, value);
        // Setting button for showing the temperature
        var weatherinfo = document.createElement('div');
        weatherinfo.setAttribute('class', 'row');
        weatherinfo.id = 'weatherDetails' + capital;
        var button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.setAttribute('class', 'btn btn-primary weatherButton');
        button.setAttribute('onclick', 'weatherDetail("' + capital + '")');
        button.innerHTML = 'Weather-Info';
        //  Appending the results
        document.getElementById('details').append(outerDiv);
        outerDiv.append(card);
        card.append(cardBody);
        cardBody.append(cName, details, weatherinfo, button);
    }

}

async function weatherDetail(country) {
    // Getting data from OpenWeather API
    var weatherRequest = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + country + '&appid=890f03a59198b102bc8834a8f3bc5d46');
    var weatherData = await weatherRequest.json();
    document.getElementById('weatherDetails' + country).innerHTML = '';
    var weather = document.getElementById('weatherDetails' + country);
    
    var div1 = document.createElement('div');
    div1.setAttribute('class', 'col-sm-5');
    div1.id = 'tempLabelOf' + country;
    div1.innerHTML = 'Temperature';

    var div1Value = document.createElement('div');
    div1Value.setAttribute('class', 'col-sm-7');
    div1Value.id = 'tempOf' + country;
    div1Value.innerHTML = weatherData.main.temp;

    var div2 = document.createElement('div');
    div2.setAttribute('class', 'col-sm-5');
    div2.id = 'weatherLabelOf' + country;
    div2.innerHTML = 'Weather';

    var div2Value = document.createElement('div1Value');
    div2Value.setAttribute('class', 'col-sm-7');
    div2Value.id = 'weatherOf' + country
    div2Value.innerHTML = weatherData.weather[0].main;

    var div3 = document.createElement('div');
    div3.setAttribute('class', 'col-sm-5');
    div3.id = 'humidityLabelOf' + country;
    div3.innerHTML = 'Humidity';

    var div3Value = document.createElement('div');
    div3Value.setAttribute('class', 'col-sm-7');
    div3Value.id = 'humidityOf' + country;
    div3Value.innerHTML = weatherData.main.humidity;

    var div4 = document.createElement('div');
    div4.setAttribute('class', 'col-sm-5');
    div4.id = 'pressureLabelOf' + country;
    div4.innerHTML = 'Pressure';

    var div4Value = document.createElement('div');
    div4Value.setAttribute('class', 'col-sm-7');
    div4Value.id = 'pressureOf' + country;
    div4Value.innerHTML = weatherData.main.pressure;


    weather.append(div1, div1Value, div2, div2Value, div3, div3Value, div4, div4Value);
}


function setValues(key, value) {
    var div = document.createElement('div');
    div.setAttribute('class', 'row');
    for (var i = 0; i < key.length; i++) {
        var div1 = document.createElement('div');
        div1.setAttribute('class', 'col-sm-5');
        div1.innerHTML = key[i];
        if (i == 2) {
            var div1Value = document.createElement('div');
            div1Value.setAttribute('class', 'col-sm-7');
            var a = document.createElement('a');
            a.setAttribute('href', value[i]);
            a.setAttribute('target', '_blank');
            a.innerHTML = value[i];
            div1Value.append(a);
        }
        else {
            var div1Value = document.createElement('div');
            div1Value.setAttribute('class', 'col-sm-7');
            div1Value.innerHTML = value[i];
        }
        div.append(div1, div1Value);
    }
    return div;
}

loadCountries();
