const apiURL = '//api.openweathermap.org/data/2.5/weather?id=5604473&APPID=8e9c64fa57cc9617996fe2f6b39a853d&units=imperial';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let summary = document.createElement('article');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let p5 = document.createElement('p');

    p1.innerHTML = `<strong>Current:</strong>  ${jsObject.main.temp} &deg;F`;
    p2.innerHTML = `<strong>High:</strong>  ${jsObject.main.temp_max} &degF`;
    p3.innerHTML = `<strong>Humidity:</strong>  ${jsObject.main.humidity} %`;
    p4.innerHTML = `<strong>Wind Speed:</strong>  ${jsObject.wind.speed} mph`;
    
    summary.appendChild(p1);
    summary.appendChild(p2);
    summary.appendChild(p3);
    summary.appendChild(p4);
    summary.appendChild(p5);

    document.getElementById('jsonsum').appendChild(summary);

    /* wind chill */
    /* get temp & speed from html and convert to numbers */
    const tempNumber = jsObject.main.temp;
    //console.log(tempNumber);
    const speedNumber = jsObject.wind.speed;
    //console.log(speedNumber);
    
        /* wind chill formula */
    let windChill = 35.74 + (0.6215 * tempNumber) - (35.75 * Math.pow(speedNumber, 0.16)) + (0.4275 * tempNumber * Math.pow(speedNumber, 0.16));
    //console.log(windChill);
    windChill = Math.round(windChill);
    //console.log(windChill);
    
        /* checking */
    if(tempNumber<=50 && speedNumber>3) {
        p5.innerHTML = `<strong>Wind Chill:</strong>  ${windChill} &degF`;
    }
        else {
            p5.innerHTML = `<strong>Wind Chill:</strong> N/A`;;
        }
   
  });

  