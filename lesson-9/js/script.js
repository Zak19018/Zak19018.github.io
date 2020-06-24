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


/* banner message */
const day = new Date();
console.log(day);

const dayNumber = day.getDay();
console.log(dayNumber);

const element = document.getElementById("banner");

if (dayNumber == 5) {
    element.classList.add("showme");
}
else {
    element.classList.add("hideme");
}

/* json */
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   // console.table(jsonObject);  temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3= document.createElement('p');
    let image = document.createElement('img');

    h2.textContent = towns[i].name;
    h3.textContent = towns[i].motto;
    p1.textContent = towns[i].yearFounded;
    p2.textContent = towns[i].currentPopulation;
    p3.textContent = towns[i].averageRainfall;
    imageSrc = image.setAttribute('src', towns[i].photo);
    imageAlt = image.setAttribute('alt', prophets[i].name + prophets[i].lastname + ' - ' + prophets[i].order);

    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(image);

    document.querySelector('div.town-info').appendChild(card);
        }
    });
