var boardSize;
var gameboard = document.querySelector('#gameboard');
var rand;
var block;
var timer;
var score = 0;


document.querySelector('#boardGen').addEventListener('click', () => {
    boardSize = parseInt(document.querySelector('#boardSize').value);
    gameboard.innerHTML = '';
    for (let i = 1; i <= boardSize; i++) {
        gameboard.innerHTML += `<div data-id="${i}" class="cell"></div>`; 
        
    }
    document.querySelectorAll('.cell').forEach(cell => {
        cell.style.width = 100/(Math.sqrt(boardSize)) + '%';
        cell.style.height = 100/(Math.sqrt(boardSize)) + '%';
    });
    nextTurn();
    generalTimer();
})

function nextTurn (){
    score --;
    popChuck();
}

function popChuck(){
    document.getElementById("display_score").innerHTML = "You have " + score +" points ";

    clearInterval(timer);
    timer = setInterval(nextTurn, 800);

    if (block){
        block.style.backgroundImage = '';
    }
    rand = Math.floor(Math.random() * boardSize +1);
    block = document.querySelector(`[data-id="${rand}"]`);
    block.style.backgroundImage = 'url(img/chuck.jpeg)';
}

gameboard.addEventListener('click',(el) => {
    el = el.target;
    if (el.dataset.id == rand){
        score ++;
    } else {
        score --;
    }
    popChuck();
})

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function generalTimer () {
    var oneMinute = 60 * 1,
        display = document.querySelector('#time');
    startTimer(oneMinute, display);
};
