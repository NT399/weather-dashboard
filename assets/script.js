//09033870c76f82300bb1f6b1a9a2587e
var searchName = document.getElementById("search").value;
var searchBar = document.querySelector('#search-bar');
var searchButton = document.getElementById('search-button');
var city = document.getElementById('city-name');
var temp = document.getElementById('temp');
var wind = document.getElementById('wind');
var humidity = document.getElementById('humidity');
var date1 = document.getElementById('date1');
var temp1 = document.getElementById('temp1');
var wind1 = document.getElementById('wind1');
var humidity1 = document.getElementById('humidity1');
var date2 = document.getElementById('date2');
var temp2 = document.getElementById('temp2');
var wind2 = document.getElementById('wind2');
var humidity2 = document.getElementById('humidity2');



//to display time at the top of page

function getApi(name) {
  // fetch request gets a list of all the repos for the node.js organization
  var requestUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=09033870c76f82300bb1f6b1a9a2587e`;
 

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data.list[0].weather[0].icon);

        // top box
        city.textContent = data.city.name + " (" + data.list[0].dt_txt.slice(0, -9) + ") "
        
        var source = document.getElementById('icon');
        source.setAttribute('src', '');
        var img = document.createElement("img");
        var weatherIcon = data.list[0].weather[0].icon
        img.src = "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
        source.appendChild(img);

        console.log(data);
        temp.textContent = 'Temp: ' + data.list[0].main.temp + ' °F'
        wind.textContent = 'Wind: ' + data.list[0].wind.speed + ' MPH'
        humidity.textContent = 'Humidity: ' + data.list[0].main.humidity + ' %'

        // card 1
        date1.textContent = data.list[12].dt_txt.slice(0, -8)
        
        var source1 = document.getElementById('icon1');
        source1.setAttribute('src', '');
        var img1 = document.createElement("img");
        var weatherIcon1 = data.list[12].weather[0].icon
        console.log(weatherIcon1);
        img1.src = "http://openweathermap.org/img/wn/" + weatherIcon1 + "@2x.png";
        source1.appendChild(img1);

        temp1.textContent = 'Temp: ' + data.list[12].main.temp + ' °F'
        wind1.textContent = 'Wind: ' + data.list[12].wind.speed + ' MPH'
        humidity1.textContent = 'Humidity: ' + data.list[12].main.humidity + ' %'

        // card 2
        date2.textContent = data.list[20].dt_txt.slice(0, -8)
        
        var source2 = document.getElementById('icon2');
        source2.setAttribute('src', '');
        var img2 = document.createElement("img");
        var weatherIcon2 = data.list[20].weather[0].icon
        console.log(weatherIcon2);
        img2.src = "http://openweathermap.org/img/wn/" + weatherIcon2 + "@2x.png";
        source2.appendChild(img2);

        temp2.textContent = 'Temp: ' + data.list[20].main.temp + ' °F'
        wind2.textContent = 'Wind: ' + data.list[20].wind.speed + ' MPH'
        humidity2.textContent = 'Humidity: ' + data.list[20].main.humidity + ' %'
 
 

      });
    }    

    function search() {
      var searchName = document.getElementById("search").value;
      getApi(searchName);
      searchName = localStorage.getItem("search");
      console.log(searchName);
      localStorage.setItem("search", document.getElementById("button1").textContent);
    }
    
     
    
    console.log(searchName)

    searchButton.addEventListener('click', function() {
    
      search();
  
    })
  




// fetch('http://api.openweathermap.org/data/2.5/forecast?q=London&appid=09033870c76f82300bb1f6b1a9a2587e', {
//   method: 'GET', //GET is the default.
//   credentials: 'same-origin', // include, *same-origin, omit
//   redirect: 'follow', // manual, *follow, error
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });



//
//memory of history