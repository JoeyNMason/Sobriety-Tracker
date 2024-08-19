
const startDate = document.getElementById('start-date');
const dayCount = document.getElementById('day-count');


// incorrect code
// function currentDate(){
//     date = new Date();
//     currentDate.innerHTML = date();
// }

// correct code
function currentDate() {
    var date = new Date();
    document.getElementById("current-date").innerHTML = date.toString();
}

window.onload = currentDate;