let nom = document.getElementById("name");
let prenom = document.getElementById("firstname");
let age = document.getElementById("age");


class panel {
    constructor(nom, prenom, age) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    crea() {
        let tab = [this.nom, this.prenom, this.age];
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        document.body.appendChild(ul);
        ul.appendChild(li);
        li.innerHTML = tab;
    }
    suppr() {
    }
}
function affiche() {
    let creation = new panel(nom.value, prenom.value, age.value)
    creation.crea();
}
function supprimer() {

}
function trier() {

}