let ring = document.getElementById("ring");
let monitor = document.getElementById("monitor");
let running = true;
/*Characters*/
class Character{
    constructor(name,hp,hpMax, atk, def, spe, image){
        this.name = name;
        this.hp = hp;
        this.atk = atk;
        this.def = def;
        this.spe = spe;
        this.image = image;
        this.hpMax = hpMax;
    }
}

let aaron = new Character("Aaron",100,100,20,30,10, "img/aaron.png");
let lina = new Character("Lina",70,70,50,10,20, "img/lina.png");
//let test = new Character("LinaDoppel",70,70,100,10,20, "img/lina.png");
let characters = [aaron,lina];
let player;
let foe;
let hero;
let guardStatus = 0;
let guard = false;
/*Character Display*/
for (let i=0; i<characters.length;i++){
    document.getElementById('characterSelect').innerHTML +=
        `
        <figure>
            <h3>`+ characters[i].name +`</h3>
            <img src="`+ characters[i].image +`">
            <figcaption>
                <table>
                    <tr>
                        <th>HP</th>
                        <th>Attaque</th>
                        <th>Défense</th>
                        <th>Vitesse</th>
                    </tr>
                    <tr>
                        <td>`+ characters[i].hp +`</td>
                        <td>`+ characters[i].atk +`</td>
                        <td>`+ characters[i].def +`</td>
                        <td>`+ characters[i].spe +`</td>
                    </tr>
                </table>
            </figcaption>
        </figure>
        `;
}

/*Character Selection*/
for (let i=0; i<characters.length;i++){
    document.getElementsByTagName("figure")[i].addEventListener("click", function(){selectCharacter(i);});
}
function selectCharacter(id){
    let enemy;
    player = id;
    id===0 ? enemy = 1 : enemy = 0; 
    hero = characters[player];
    foe = characters[enemy];
    displayCharacters();
    document.getElementsByTagName("figure")[id].style.border = "10px solid seagreen";
    document.getElementsByTagName("figure")[enemy].style.border = "5px solid red";
    monitor.innerHTML = "Début du combat entre " + hero.name + " et " + foe.name;
    document.getElementById("controls").style.display = 'flex';
}

/*Battle screen display */
function displayCharacters(){
    document.getElementById("ring").innerHTML = 
    `
    <article id="hero">
        <h3>`+hero.name+`</h3>
        <aside>
            <div>`+hero.hp+`</div>
        </aside>
        <img id='heroPic' src="`+hero.image+`">
    </article>
    <article id="foe">
        <h3>`+foe.name+`</h3>
        <aside>
            <div>`+foe.hp+`</div>
        </aside>
        <img src="`+foe.image+`">
    </article>
    `;
    document.getElementsByTagName("aside")[0].style.width = 100/hero.hpMax*hero.hp + "%";
    document.getElementsByTagName("aside")[1].style.width = 100/foe.hpMax*foe.hp + "%";
    document.getElementById("foe").style.textAlign = "right";
    document.getElementById("heroPic").style.transform = "scale(-1,1)";
    if (hero.hp <= 0){
        winner(foe);
    } else if (foe.hp <= 0){
        winner(hero);
    }
}
document.getElementsByTagName("button")[0].addEventListener("click", function(){game("attack");});
document.getElementsByTagName("button")[1].addEventListener("click", function(){game("defense");});
document.getElementsByTagName("button")[2].addEventListener("click", function(){game("special");});
document.getElementsByTagName("button")[3].addEventListener("click", function(){game("flee");});

function game(action){
    if (guard){ 
        hero.def += guardStatus;
    } else {
        hero.def -= guardStatus;
    }
    
    guardStatus = 0;
    guard = false;
    switch(action){
        case "attack":
            let dmg = hero.atk - foe.def;
            foe.hp-= dmg;
            monitor.innerHTML = "<p>" + hero.name + " attaque !! <br>";
            monitor.innerHTML += foe.name + " perd " + dmg + "HP !!</p>";
        break;
        case "defense":
            monitor.innerHTML = hero.name + " se defend !!<br>";
            monitor.innerHTML += hero.name + " se prépare à encaisser !!";
            guardStatus = 50/100*hero.def;
            guard = true;
        break;
        case "special":
            monitor.innerHTML = hero.name + " utilise son attaque spéciale !!";
            foe.hp = 0;
        break;
        case "flee":
                monitor.innerHTML = hero.name + " fuit !!";
            hero.hp = 0;
        break;
    }
    displayCharacters();
    if (running){    
        setTimeout(ennemiTurn,1000);
    };
    function ennemiTurn(){
        let dmg = foe.atk - hero.def;
        hero.hp-= dmg;
        monitor.innerHTML += "<p>" + foe.name + " riposte !! <br>";
        monitor.innerHTML += foe.name + " attaque !! <br>";
        monitor.innerHTML += hero.name + " perd " + dmg + "HP !!";
        displayCharacters();
        clearInterval();
    }
}


function winner(e){
    running = false;
    ring.innerHTML = "Le vainqueur est " + e.name + " !!";
    ring.innerHTML += e === hero ? "Bien Joué!" : "Game Over";
    ring.innerHTML += "<button onclick='window.location.reload()'>Rejouer?</button>";
    ring.classList.add("endGame");
    if (e === foe) {
        ring.style.color = "orangered";
    }
    monitor.innerHTML = "Fin du combat";
}