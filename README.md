# Weather-dashboard
A weather dashboard that allows you to search a location to reveal a 5 day forecast for the weather.

## Description

This application displays the 5 day forecast for a given location stipulated by the user when they input the location in the search bar. The current weather is displayed in the larger box and the smaller cards at the bottom display the weather for the subsequent days. The website also stores your search history in buttons below so you can easily revisit the desired locations as you please. 

In creating this website the following was completed:
- Bootstrap was used for the larger weather segment, the cards, the nav/header and also the search form.
- Variables were then utilised to refer to the particular element IDs in the below step.
- IDs were added for each of the relevant portions of the bootstrapped segments. 
- The OpenWeatherMap API was used to obtain the weather data and this was parsed via JSON.
- The object weather array was then navigated to locate the weather, wind and humidity - this was then displayed in the cards/weather segment.
- The weather icon code was located in the object and this was included into the OpenWeatherMap URL to then obtain the weather icon which was appended into the cards/weather segment.
- The search history is saved under the search field - Local storage (set/get) were used to save the search history.


## Table of Contents

- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Usage

To view the website please follow this link: (https://nt399.github.io/weather-dashboard/)

To use the website, please follow the steps below:
1. Use the search field to enter city you want to search
2. Click Search.
3. The entered cities should appear under the search field. 

![Screenshot of the website](https://github.com/NT399/weather-dashboard/blob/main/assets/Screenshot%20of%20weather%20dashboard%20website.PNG)


## Credits

The following links were helpful for the completion of this project:
- https://getbootstrap.com/docs/4.0/components/card/ (This contributed the bootstrap used in this project)
- https://getbootstrap.com/docs/4.0/components/navbar/#forms (This contributed the bootstrap used in this project)
- https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
- https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- https://www.w3schools.com/jsref/met_node_appendchild.asp
- https://www.w3schools.com/js/js_htmldom_eventlistener.asp
- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs


## License

MIT License

Copyright (c) [2022]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
