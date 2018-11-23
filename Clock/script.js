var T =  setInterval(Timer, 1000);
var D = setInterval(DateTimer, 1000)

function Timer() {
    var date = new Date();
    document.getElementById("time").innerHTML = date.toLocaleTimeString();
}

function DateTimer() {
    var date = new Date().toDateString();
    document.getElementById("date").innerHTML = date;
}