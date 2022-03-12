window.addEventListener("load", date, false);

function date(){
    var currentTime = new Date();
    var month = currentTime.getMonth() + 1;
    var day = currentTime.getDate();
    var year = currentTime.getFullYear();
    
    var dateString = day + "/" + month + "/" + year;

    document.getElementById("text").innerHTML = "Hey! Today is " + dateString + ", and this is my first practicals!";
}