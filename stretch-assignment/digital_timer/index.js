var msTime = 0;
function Timer(){
    msTime++;
    console.log(msTime);

    document.getElementById("msTens").textContent = Math.floor(((msTime/1) % 10));;
    document.getElementById("msHundreds").textContent = Math.floor(((msTime/10) % 10));
    document.getElementById("secondOnes").textContent = Math.floor(((msTime/100) % 10));
    document.getElementById("secondTens").textContent = Math.floor(((msTime/1000) % 10));
}

// start button
let startButton = document.createElement("button");
startButton.textContent = "Start";
document.body.append(startButton);

startButton.addEventListener('click', (event) => {
    var myVar = setInterval(function(){
        Timer();
        if(msTime >= "1000"){
            document.body.style.color = "red";
            clearInterval(myVar);
            msTime = 0;
            console.log(msTime);
            console.log(myVar);
        }
    }, 10);
    // event.target.disabled = true;
    
})

// reset button
let resetButton = document.createElement("button");
resetButton.textContent = "Reset";
document.body.append(resetButton);

resetButton.addEventListener('click', (event) => {
    myVar = 0;
    msTime = 0;
    event.target.disabled = false;

})


