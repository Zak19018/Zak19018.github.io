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

const forecastURL = "//api.openweathermap.org/data/2.5/forecast?id=5585010&appid=8e9c64fa57cc9617996fe2f6b39a853d&units=imperial";

fetch(forecastURL)
.then((response) => response.json())
.then((weatherInfo) => {
    console.log(weatherInfo);

    let mylist = weatherInfo.list;
        let forecastDayNumber = todayDayNumber;

        for (i=0; i < mylist.length; i++) {
            
            let time = mylist[i].dt_txt;

            if (time.includes('12:00:00')) {
                console.log

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