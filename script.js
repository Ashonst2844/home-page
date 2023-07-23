function addName() {
    var name = prompt("Enter Name: (Max 10 Characters.)");

    if (name.length > 10) {
        document.getElementById("name").innerHTML = "Anonym"
        alert("Characters Maximum")
    } else if (name === "") {
        document.getElementById("name").innerHTML = "Anonym"
    } else {
        document.getElementById("name").innerHTML = name
    }
}

function clock() {
    const clock = new Date();
    let hours = clock.getHours().toString();
    let minutes = clock.getMinutes().toString();
    let seconds = clock.getSeconds().toString();

    var h = document.getElementById("hours");
    var m = document.getElementById("minutes");
    var s = document.getElementById("seconds");

    var hours_length = hours.length;
    var minutes_length = minutes.length;
    var seconds_length = seconds.length;

    if (hours_length == 1) {
        h.innerHTML = "0" + hours;
    } else {
        h.innerHTML = hours;
    }

    if (minutes_length == 1) {
        m.innerHTML = "0" + minutes;
    } else {
        m.innerHTML = minutes;
    }

    if (seconds_length == 1) {
        s.innerHTML = "0" + seconds;
    } else {
        s.innerHTML = seconds;
    }

    var time = document.getElementById("time");
    if (clock.getHours() >= 6 && clock.getHours() < 12) {
        time.innerHTML = "Morning";
    } else if (clock.getHours() >= 12 && clock.getHours() < 19) {
        time.innerHTML = "Afternoon";
    } else {
        time.innerHTML = "Night";
    }
    
}

function background() {
    let rand = Math.round(Math.random() * 5);
    let num;

    if (rand == 1) {
        num = 1;
    } else if (rand == 2) {
        num = 2;
    } else if (rand == 3) {
        num = 3;
    } else if (rand == 4) {
        num = 4;
    } else {
        num = 5;
    }

    let bg = document.getElementById("bg");
    bg.style.backgroundImage = `url(img/wallpaper${num}.jpg)`;
}

function quotes() {
    let quotes = [
        "Be Yourself And Never Surrender.",
        "A Room Without Book Is Like A Body Without Soul.",
        "Language Is The Key To The Heart Of People.",
        "Everything Has Beauty, But Not Everyone Sees It.",
        "The Best Way To Pay For A Lovely Moment Is To Enjoy It."
    ];
    let rand = Math.round(Math.random() * (quotes.length - 1));

    document.getElementById("quotes").innerHTML = "\"" + quotes[rand] + "\"";
}

setInterval(clock, 1000);
addName();
clock();
background();
quotes();
