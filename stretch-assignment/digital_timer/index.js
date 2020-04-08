var msTime = 0;
var timer;

function Timer(){
    msTime++;

    document.getElementById("msTens").textContent = Math.floor(((msTime/1) % 10))
    document.getElementById("msHundreds").textContent = Math.floor(((msTime/10) % 10))
    document.getElementById("secondOnes").textContent = Math.floor(((msTime/100) % 10))
    document.getElementById("secondTens").textContent = Math.floor(((msTime/1000) % 10))
}

function Start(){
    timer = setInterval(function(){
        Timer();
        if(msTime >= "1000"){
            document.body.style.color = "red";
            clearInterval(timer);
            msTime = 0;
        }
    }, 10);
}

function Stop(){
    clearInterval(timer)
}


// start button
let startButton = document.createElement("button");
startButton.textContent = "Start";
document.body.append(startButton);

startButton.addEventListener('click', (event) => {
    Start()
    event.target.disabled = true;
})

// reset button
let resetButton = document.createElement("button");
resetButton.textContent = "Reset";
document.body.append(resetButton);

resetButton.addEventListener('click', (event) => {
    startButton.disabled = false
    Stop()
    
    document.getElementById("msTens").textContent = 0
    document.getElementById("msHundreds").textContent = 0
    document.getElementById("secondOnes").textContent = 0
    document.getElementById("secondTens").textContent = 0

    if(msTime < 1000){
        document.body.style.color = "black";
        msTime = 0
    }else{
        msTime = 0
    }
})


