startButton = document.getElementById("startbtn");

function reload() {
    window.location.reload();
}
function timer() {
    startButton.innerHTML = "Reset";
    startButton.style.backgroundColor = "red";
    startButton.setAttribute("onclick", "reload()");
    let timeElm = document.getElementById('time1');
    let timer = function (x) {
        if (x === -1) {
            return;
        }
        timeElm.innerHTML = x;
        return setTimeout(() => { timer(--x) }, 1000)
    }
    timer(20);
    setTimeout(scoreprint, 21000);
    start();
}

function scoreprint() {
    alert("gameover your score is:" + plsc);
    window.location.reload();
}
var plsc = 0;
var x;
function random() {
    x = Math.floor(Math.random() * 8);
    y = Math.floor(Math.random() * 8);
}
function start() {
    const colors = ["red", "blue", "pink", "green", "yellow", "orange", "white", "purple"];
    random();
    ctext = colors[x];
    ccolor = colors[y];
    document.getElementById('color').style.color = ccolor;
    document.getElementById('color').innerHTML = ctext;

    function check() {
        console.log(x);
        var ch = document.getElementById("textarea").value;
        console.log(ch);
        if (ch === ccolor) {
            plsc++;
            document.getElementById("scoree").innerHTML = plsc;
            start();
        }
    }
    var input = document.getElementById("textarea");
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            // console.log("hello");
            check();
            document.getElementById("textarea").value = "";
        }
    });
    // console.log(plsc);
}
