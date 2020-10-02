let ring = document.getElementById("ring");
let monitor = document.getElementById("monitor");
/*Characters*/
class Character{
    constructor(name,hp, atk, def, spe, image){
        this.name = name;
        this.hp = hp;
        this.atk = atk;
        this.def = def;
        this.spe = spe;
        this.image = image;
    }
}
let aaron = new Character("Aaron",100,20,30,10, "img/ether.png");
let lina = new Character("Lina",70,40,20,20, "img/potion0.png");
let characters = [aaron,lina];
let player;
let foe;
let hero;
let enemy;
/*Character Display*/
for (let i=0; i<characters.length;i++){
    document.getElementById('characterSelect').innerHTML +=
        `
        <figure>
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
document.getElementsByTagName("table")[0].addEventListener("click", function(){selectCharacter(0);});
document.getElementsByTagName("table")[1].addEventListener("click", function(){selectCharacter(1);});
function selectCharacter(id){
    player = id;
    id===0 ? foe = 1 : foe = 0; 
    hero = characters[player];
    enemy = characters[foe];
    console.log(hero);
    document.getElementById("ring").innerHTML = 
    `
    <article>
        <aside>
            <div>`+hero.hp+`</div>
        </aside>
        <img src="`+hero.image+`">
    </article>
    <article>
        <aside>
            <div>`+enemy.hp+`</div>
        </aside>
        <img src="`+enemy.image+`">
    </article>
    `;
    document.getElementsByTagName("table")[id].style.border = "5px solid seagreen";
    document.getElementsByTagName("table")[foe].style.border = "5px solid red";
    monitor.innerHTML = "Début du combat entre " + characters[id].name + " et " + characters[foe].name;
    document.getElementById("controls").style.display = 'flex';
}

document.getElementsByTagName("button")[0].addEventListener("click", function(){game("attack");});
document.getElementsByTagName("button")[1].addEventListener("click", function(){game("defense");});
document.getElementsByTagName("button")[2].addEventListener("click", function(){game("special");});
document.getElementsByTagName("button")[3].addEventListener("click", function(){game("flee");});

function game(action){
    switch(action){
        case "attack":
            monitor.innerHTML = characters[player].name + " attaque !! <br>";
            monitor.innerHTML += characters[foe].name + " perd " + characters[player].atk + "HP !!";
        break;
        case "defense":
            monitor.innerHTML = characters[player].name + " se defend !!<br>";
            monitor.innerHTML += characters[player].name + " se prépare à encaisser !!";
        break;
        case "special":
            monitor.innerHTML = characters[player].name + " utilise son attaque spéciale !!";
            winner(player);
        break;
        case "flee":
            monitor.innerHTML = characters[player].name + " fuit !!";
            winner(foe);
        break;
    }
}
function winner(e){
    ring.innerHTML = "Le vainqueur est " + characters[e].name + " !!";
    ring.innerHTML += e === player ? "Bien Joué!" : "Game Over";
    ring.classList.add("endGame");
    if (e === foe) {
        ring.style.color = "orangered";
    }
    
}