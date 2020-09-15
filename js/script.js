document.getElementById("start").addEventListener("click",function (){open(0);});
document.getElementById('expander').addEventListener('click', function (e){toggle("rules")});
var deck0 = document.getElementsByClassName("deck")[0];
var nodeState = false;
var status = document.getElementsByTagName("i");

function open(potion){
    switch (potion){
        case 0 :
            unlockPotion(0);
            document.getElementById("potion0").addEventListener("click",function (){start(10);});
            break;
        case 1 :
            unlockPotion(1);
            gold -= 50;
            document.getElementById("potion1").addEventListener("click",function (){start(20);status[potion].innerHTML = "Production en cours";});
            break;    
        case 2 :
            unlockPotion(2);
            gold -= 100;
            document.getElementById("potion2").addEventListener("click",function (){start(30);status[potion].innerHTML = "Production en cours";});
        break;
        case 3 :
            unlockPotion(3);
            gold -= 500;
            document.getElementById("potion3").addEventListener("click",function (){start(50);status[potion].innerHTML = "Production en cours";});
        break;
    }
}
function unlockPotion(potion){
    switch (potion){
        case 0 :
            deck0.innerHTML += (
                `<li id='potion0'>
                    <figure>
                        <img src='img/potion0.png' alt='potion'/>
                        <figcaption>Potion simple</figcaption>
                        <b id='res1'>0</b>
                    </figure>
                    <article>
                        <p><b id= 'resA'>10</b></p>
                        <p><i>Prêt à produire</i></p>
                    </article>
                </li>`);
        break;
        case 1 :
            deck0.innerHTML += (
                `<li id='potion1'>
                    <figure>
                        <img src='img/potion1.png' alt='potion +'/>
                        <figcaption>Potion +</figcaption>
                        <b id='res2'>0</b>
                    </figure>
                    <article>
                        <p><b id= 'resB'>20</b></p>
                        <p><i>Prêt à produire</i></p>
                    </article>
                </li>`);
        break;
        case 2 :
            deck0.innerHTML += (
            `<li id='potion2'>
                <figure><img src='img/potion2.png' alt='Max Potion'/>
                    <figcaption>Max Potion</figcaption>
                    <b id='res3'>0</b>
                </figure>
                <article>
                    <p><b id= 'resC'>30</b></p>
                    <p><i>Prêt à produire</i></p>
                </article>
            </li>`);
        break;
        case 3 :
            deck0.innerHTML += (
            `<li id='potion3'>
                <figure>
                    <img src='img/ether.png' alt='Ether'/>
                    <figcaption>Ether</figcaption>
                    <b id='res4'>0</b>
                </figure>
                <article>
                    <p><b id= 'resD'>50</b></p>
                    <p><i>Prêt à produire</i></p>
                </article>
            </li>`);
        break;
    }
}

function toggle(node){
    if (nodeState === false){
        document.getElementById(node).style.display = "block";
        nodeState = true;
    } else {
        document.getElementById(node).style.display = "none";
        nodeState = false;
    }
}