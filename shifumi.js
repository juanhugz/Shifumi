console.log("Let the game begin");
console.log("start");
let play=["ROCK","PAPER","SCISSORS"];
function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min))+min;
}
function computerPlay(){
    let cpuValue= getRandomInt(0,3);   
    return cpuValue;
}
let winnerIs=["Draw","Player","Computer" ];
let playerPlay= prompt().toUpperCase();
let cpuPlay= play[computerPlay()];
function fight(player,cpu){
    let winner=0;
    switch (player){
        case "ROCK":
            if (cpu=="ROCK"){
                winner=0;
            }else if(cpu=="PAPER"){
                winner=2;
            }else{
                winner=1;
            };
            break;
        case "PAPER":
            if (cpu=="ROCK"){
                winner=1;
            }else if(cpu=="PAPER"){
                winner=0;
            }else{
                winner=2;
            };
            break;
        case "SCISSORS":
            if (cpu=="ROCK"){
                winner=2;
            }else if(cpu=="PAPER"){
                winner=1;
            }else{
                winner=0;
            };
            break;
    }
    return winner;
}
console.log(winnerIs[fight(playerPlay,cpuPlay)]);