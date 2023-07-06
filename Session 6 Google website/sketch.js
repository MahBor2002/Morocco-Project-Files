let inp = document.getElementById("inp");
let body = document.getElementById("bdy");
let btn = document.getElementById("btns");

let dark = false;

function toggle() {
    if (!dark) {
        document.body.style.background = "#202124";
        dark = true;
    }
    else {
        document.body.style.background = "#dedede";
        dark = false;
    }
}

function Changed() {
    document.body.style.background = get_random_color();
    document.getElementById("btns").style.background = get_random_color();
    document.getElementById("btnss").style.background = get_random_color();
}

function KeyPressed(value) {
    if (event.keyCode == 13) {
        // alert("should get the innerHTML or text value here");
        console.log(value.value);
        window.location.href = `https://www.google.com/search?q=${value.value}`;
    }
}

function get_random_color() {
    var color = "";
    for (var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    return "#" + color;
}