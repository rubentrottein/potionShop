//var timeInit= 10;
var nbPotion0 = 0;
var nbPotion1 = 0;
var nbPotion2 = 0;
var gold = 40;
function start(timeInit){
var timeInit;
var time = timeInit;
var time0;
var time1;
console.log(timeInit)
setInterval(timer,500);
function getGold(){
    document.getElementById("gold").innerHTML = gold;
}
function timer(){
    getGold();
    if(timeInit === 10){
        document.getElementById("resA").innerHTML = time;
        time--
    }
    if (timeInit < 10){
        time0=timeInit;
        document.getElementById("resB").innerHTML = time0;
        time0--
    }
    if (time <0){
        if (timeInit===10){
            nbPotion0 ++;
            gold += 10;
            document.getElementById("res1").innerHTML = nbPotion0;
        } else if (timeInit===20){
            nbPotion1 ++;
            gold +=25;
            document.getElementById("res2").innerHTML = nbPotion1;
        }
        if (gold === 50){
            document.getElementById("controls").innerHTML = "<button id='upgrade0' class='btn'>Produire Potions +</button>";
            document.getElementById("upgrade0").addEventListener("click",function (){open(1);});
            }
            time=timeInit;
            clearInterval(timer,1000);
        }
    }
}