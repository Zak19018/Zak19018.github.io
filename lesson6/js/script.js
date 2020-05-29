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

if (dayNumber == 6) {
    element.classList.add("showme");
}
else {
    element.classList.add("hideme");
}
