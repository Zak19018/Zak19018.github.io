/* hamburger menu */
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}


/* current date in footer */
var today = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var date = today.getDate();
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var year = today.getFullYear();
document.getElementById('currentDate').innerHTML = weekday[today.getDay()] + ", " + date + " " + month[today.getMonth()] + " " + year ;

//lazy loading
const imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = function(image) {
	image.setAttribute('src', image.getAttribute('data-src'));
	image.onload = function() {
		image.removeAttribute('data-src');
	};
};
if('IntersectionObserver' in window) {
	var observer = new IntersectionObserver(function(items, observer) {
		items.forEach(function(item) {
			if(item.isIntersecting) {
				loadImages(item.target);
				observer.unobserve(item.target);
			}
		});
	});
	imagesToLoad.forEach(function(img) {
		observer.observe(img);
	});
}
else {
	imagesToLoad.forEach(function(img) {
		loadImages(img);
	});
}

const d = new Date();
const todayDayNumber = d.getDay();
const week = new Array(7);
    week[0] = "Sunday";
    week[1] = "Monday";
    week[2] = "Tuesday";
    week[3] = "Wednesday";
    week[4] = "Thursday";
    week[5] = "Friday";
    week[6] = "Saturday";

const forecastURL = "//api.openweathermap.org/data/2.5/forecast?id=3530103&appid=8e9c64fa57cc9617996fe2f6b39a853d&units=imperial";

fetch(forecastURL)
.then((response) => response.json())
.then((weatherInfo) => {
    //console.log(weatherInfo);

    let mylist = weatherInfo.list;
        let forecastDayNumber = todayDayNumber;

        for (i=0; i < mylist.length; i++) {
            
            let time = mylist[i].dt_txt;

            if (time.includes('12:00:00')) {
                //console.log

                forecastDayNumber += 1;
                if (forecastDayNumber === 7){forecastDayNumber = 0;}

                let theDayName = document.createElement('span');
                theDayName.textContent = week[forecastDayNumber];

                let theTemp = document.createElement('p');
                theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0";

                let iconcode = weatherInfo.list[i].weather[0].icon;
                let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
                let theIcon = document.createElement('img');
                theIcon.src = iconPath;

                let theDay = document.createElement('div');
                theDay.appendChild(theDayName);
                
                theDay.appendChild(theTemp);
                theDay.appendChild(theIcon);

                document.getElementById('livesum').appendChild(theDay);
            }
        }
});

const apiURL = '//api.openweathermap.org/data/2.5/weather?id=3530103&APPID=8e9c64fa57cc9617996fe2f6b39a853d&units=imperial';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);

    let summary = document.createElement('article');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');

    p1.innerHTML = `<strong>Temp:</strong>  ${jsObject.main.temp} &deg;F`;
    p2.innerHTML = `<strong>Condition:</strong>  ${jsObject.weather[0].main}`;
    p3.innerHTML = `<strong>Humidity:</strong>  ${jsObject.main.humidity} %`;
    
    summary.appendChild(p1);
    summary.appendChild(p2);
    summary.appendChild(p3);
 
    document.getElementById('jsonsum').appendChild(summary);   
  });



  const data = "//zak19018.github.io/Scoots/data/rentals.json";
  fetch(data)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let c1 = document.createElement('td');
    let c2 = document.createElement('td');
    let c3 = document.createElement('td');
    let c4 = document.createElement('td');
    

    c1.innerHTML = `$  ${jsObject.rentals.reservation[0]}`;
   
    
    document.getElementById('rental-table').appendChild(c1);


  });