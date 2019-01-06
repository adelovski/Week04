let item1 = document.getElementById("Pegas");
let item2 = document.getElementById("Bukefal");
let item3 = document.getElementById("Sharec");
let item4 = document.getElementById("Storm");
let item5 = document.getElementById("Wind");
let winner = document.getElementById("winner");
let btnStart = document.getElementById("btnStart");
let btnReset = document.getElementById("btnReset");
let end = document.getElementById("endScreen");

end.style.display = "none";
btnReset.style.display = "none";

btnReset.addEventListener('click', reset);
btnStart.addEventListener('click', start);

let horsesFinished = 0;


function Move(item, speed) {
    let distance = 0;
    let timer = setInterval(function run() {
        item.style.left = distance + "px";
        item.style.backgroundImage = "url(img/horse.gif)";
        distance += speed;
        if (distance >= window.innerWidth - 170) {
            clearInterval(timer);
            winner.innerHTML += `<li>Horse ${item.id}</li>`;

            horsesFinished++;
        }
        if (horsesFinished == 1) {
            item.style.backgroundImage = "url(img/horseStanding.png)";
            item.style.left = 0;
            clearInterval(timer);
            end.style.display = "block";
            btnReset.style.display = "block";
        }
    }, 10);

};


let max = 1.8;
let min = 0.6;


function reset() {
    btnStart.style.display = "none";
    end.style.display = "none";
    winner.innerHTML = "";
    horsesFinished = 0;
    Move(item1, (Math.random() * (max - min + 1)) + min);
    Move(item2, (Math.random() * (max - min + 1)) + min);
    Move(item3, (Math.random() * (max - min + 1)) + min);
    Move(item4, (Math.random() * (max - min + 1)) + min);
    Move(item5, (Math.random() * (max - min + 1)) + min);
}

function start() {
    if (confirm("The race is about to start!")) {
        reset();
    }
};




