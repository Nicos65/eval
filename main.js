let nom = document.getElementById("name");
let prenom = document.getElementById("firstname");
let age = document.getElementById("age");
let btnsupp = document.getElementById("btn2");
let btntrie = document.getElementById("btn3");
let ul = document.createElement("ul");
/*
class panel {
    constructor(nom, prenom, age) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    crea() {
        let tab = [this.nom, this.prenom, this.age];
        let li = document.createElement("li");
        document.body.appendChild(ul);
        ul.appendChild(li);
        li.innerHTML = tab;
    }
    suppr() {
        
       
    }
}*/

function affiche() {
    let tab = [nom.value, prenom.value, age.value];
    let li = document.createElement("li");
    document.body.appendChild(ul);
    ul.appendChild(li);
    li.innerHTML = tab + "<button onclick=suppr(this)>supp</button>";
    btnsupp.addEventListener("click", () => {
        ul.remove();
    })
    btnTrieNom.addEventListener("click", () => {
        for (let i = 0; i < ul.childNodes.length; i++) {
            
        }
    })
    btnTriePrenom.addEventListener("click", () => {
        for (let i = 0; i < ul.childNodes.length; i++) {
            
        }
    })
    btnTriAge.addEventListener("click", () => {
        for (let i = 0; i < ul.childNodes.length; i++) {
            
        }
    })
}
function suppr(ici) {
    ici.parentElement.remove();
}
