//var timeInit= 10;
var nbPotion0 = 0;
var nbPotion1 = 0;
var nbPotion2 = 0;
var gold = 40;
var upgradeP=true;
function getGold(){
    document.getElementById("gold").innerHTML = gold;
}
getGold();
function start(timeInit){
    var timeInit;
    if (timeInit === 10){
        var time = timeInit;
    }
    if (timeInit === 20){
        var time0 = timeInit;
    } else if (timeInit === 50){
        var time1 = timeInit;
    }
    setInterval(timer,500);
    
    function timer(){
        getGold();
        if(timeInit === 10){
            document.getElementById("resA").innerHTML = time;
            time--;
        }
        if (timeInit === 20){
            document.getElementById("resB").innerHTML = time0;
            time0--;
        }
        if (timeInit === 30){
            document.getElementById("resC").innerHTML = time1;
            time1--;
        }
        if (time <0){
            nbPotion0 ++;
            gold += 10;
            document.getElementById("res1").innerHTML = nbPotion0;
            time=timeInit;
        } 
        if (time0 <0){
            nbPotion1 ++;
            gold +=25;
            document.getElementById("res2").innerHTML = nbPotion1;
            time0=timeInit;
        }
        if (time1 <0){
            nbPotion2 ++;
            gold +=50;
            document.getElementById("res3").innerHTML = nbPotion2;
            time1=timeInit;
        }
        if (gold > 80 && upgradeP){
            document.getElementById("potion0").innerHTML += "<br><button id='upgradeP' class='btn'>Améliorer Potions</button>";
            document.getElementById("upgradeP").addEventListener("click",function (){setInterval(timer,250);this.style.display = "none"; gold -=80;});
            upgradeP = false;
        }
        if (gold === 50){
            document.getElementById("controls").innerHTML = "";
            document.getElementById("controls").innerHTML = "<button id='upgrade0' class='btn'>Produire Potions +</button>";
            document.getElementById("upgrade0").addEventListener("click",function (){open(1);});
        }
        if (gold === 100){
            document.getElementById("controls").innerHTML = "";
            document.getElementById("controls").innerHTML += "<button id='upgrade1' class='btn'>Produire Potions Max</button>";
            document.getElementById("upgrade1").addEventListener("click",function (){open(2);});
        }
        if (gold === 500){
            document.getElementById("controls").innerHTML = "";
            document.getElementById("controls").innerHTML += "<button id='upgrade2' class='btn'>Produire Ethers</button>";
            document.getElementById("upgrade2").addEventListener("click",function (){open(3);});
        }
        clearInterval(timer,1000);
    }
}