function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

var today = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var date = today.getDate();
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var year = today.getFullYear();
document.getElementById('currentDate').innerHTML = weekday[today.getDay()] + ", " + date + " " + month[today.getMonth()] + " " + year ;
