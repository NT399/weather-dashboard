var searchName = document.getElementById("search").value;
var searchButton = document.getElementById('search-button');
var city = document.getElementById('city-name');
var temp = document.getElementById('temp');
var wind = document.getElementById('wind');
var humidity = document.getElementById('humidity');


function getApi(name) {
  // This fetch requests obtains the weather data from operweathermap.org - it is then parsed as JSON for use in below segments/cards
  var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=09033870c76f82300bb1f6b1a9a2587e&units=imperial`;
 
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data.list[0].weather[0].icon);

        // Main weather segment containing the current temperature, wind and humidity
        city.textContent = data.city.name + " (" + data.list[0].dt_txt.slice(0, -9) + ") "
        
        var source = document.getElementById('icon');
        var img = document.createElement("img");
        var weatherIcon = data.list[0].weather[0].icon
        source.innerHTML = '';
        img.src = "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
        source.appendChild(img);

        console.log(data);
        temp.textContent = 'Temp: ' + data.list[0].main.temp + ' °F'
        wind.textContent = 'Wind: ' + data.list[0].wind.speed + ' MPH'
        humidity.textContent = 'Humidity: ' + data.list[0].main.humidity + ' %'

        // Card 1 - displaying the temperature, wind and humidity of the subsequent day
        date1.textContent = data.list[12].dt_txt.slice(0, -8)
        
        var source1 = document.getElementById('icon1');
        var img1 = document.createElement("img");
        var weatherIcon1 = data.list[11].weather[0].icon
        source1.innerHTML = '';

        img1.src = "https://openweathermap.org/img/wn/" + weatherIcon1 + "@2x.png";
        source1.appendChild(img1);

        temp1.textContent = 'Temp: ' + data.list[11].main.temp + ' °F'
        wind1.textContent = 'Wind: ' + data.list[11].wind.speed + ' MPH'
        humidity1.textContent = 'Humidity: ' + data.list[11].main.humidity + ' %'

        // Card 2 - displaying the temperature, wind and humidity of the subsequent day
        date2.textContent = data.list[19].dt_txt.slice(0, -8)
       
        var source2 = document.getElementById('icon2');
        var img2 = document.createElement("img");
        var weatherIcon2 = data.list[19].weather[0].icon
        source2.innerHTML = '';

        img2.src = "https://openweathermap.org/img/wn/" + weatherIcon2 + "@2x.png";
        source2.appendChild(img2);

        temp2.textContent = 'Temp: ' + data.list[19].main.temp + ' °F'
        wind2.textContent = 'Wind: ' + data.list[19].wind.speed + ' MPH'
        humidity2.textContent = 'Humidity: ' + data.list[19].main.humidity + ' %'

        // Card 3 - displaying the temperature, wind and humidity of the subsequent day
        date3.textContent = data.list[27].dt_txt.slice(0, -8)
       
        var source3 = document.getElementById('icon3');
        var img3 = document.createElement("img");
        var weatherIcon3 = data.list[27].weather[0].icon
        source3.innerHTML = '';

        img3.src = "https://openweathermap.org/img/wn/" + weatherIcon3 + "@2x.png";
        source3.appendChild(img3);

        temp3.textContent = 'Temp: ' + data.list[27].main.temp + ' °F'
        wind3.textContent = 'Wind: ' + data.list[27].wind.speed + ' MPH'
        humidity3.textContent = 'Humidity: ' + data.list[27].main.humidity + ' %'

        // Card 4 - displaying the temperature, wind and humidity of the subsequent day
        date4.textContent = data.list[35].dt_txt.slice(0, -8)
       
        var source4 = document.getElementById('icon4');
        var img4 = document.createElement("img");
        var weatherIcon4 = data.list[35].weather[0].icon
        source4.innerHTML = '';

        img4.src = "https://openweathermap.org/img/wn/" + weatherIcon4 + "@2x.png";
        source4.appendChild(img4);

        temp4.textContent = 'Temp: ' + data.list[35].main.temp + ' °F'
        wind4.textContent = 'Wind: ' + data.list[35].wind.speed + ' MPH'
        humidity4.textContent = 'Humidity: ' + data.list[35].main.humidity + ' %'
 
      // Card 5 - displaying the temperature, wind and humidity of the subsequent day
        date5.textContent = data.list[39].dt_txt.slice(0, -8)
       
        var source5 = document.getElementById('icon5');
        var img5 = document.createElement("img");
        var weatherIcon5 = data.list[39].weather[0].icon
        source5.innerHTML = '';

        img5.src = "https://openweathermap.org/img/wn/" + weatherIcon5 + "@2x.png";
        source5.appendChild(img5);

        temp5.textContent = 'Temp: ' + data.list[39].main.temp + ' °F'
        wind5.textContent = 'Wind: ' + data.list[39].wind.speed + ' MPH'
        humidity5.textContent = 'Humidity: ' + data.list[39].main.humidity + ' %'

      });
    }    


    //This function obtains the value from the search input and integrates it into the API to obtain the data for the searched town/city.
    function search() {
      var searchName = document.getElementById("search").value;
      getApi(searchName);
      localStorage.setItem("search", searchName);
      searchName = localStorage.getItem("search");
      console.log(searchName);
  

     //This function creates an element to store the history from the search as an appends it
      button1 = document.getElementById("appendButtons")
      var buttontest1 = document.createElement("button");
      button1.appendChild(buttontest1)
      buttontest1.style = 'display:block; border-radius:5px; box-shadow: 0px 0px 5px; margin: 10px 0px ';
      buttontest1.textContent = searchName
    }

    //Event listener to execute the search function when search is clicked.
    searchButton.addEventListener('click', search)