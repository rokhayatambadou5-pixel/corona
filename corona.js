let pourcentage = 0;

let fievre = prompt("As-tu de la fièvre ? (oui / non)");
if (fievre === "oui") {
    pourcentage += 20;
    
    let vomit = prompt("Est-ce que tu vomis ? (oui / non)");
    if (vomit === "oui") {
        pourcentage += 20;
    }
} else {
    console.log("Pas de fièvre.");
}

let diarrhee = prompt("As-tu de la diarrhée ? (oui / non)");
if (diarrhee === "oui") {
    pourcentage += 20;
}

let tete = prompt("As-tu mal à la tête ? (oui / non)");
if (tete === "oui") {
    pourcentage += 20;
}

let toux = prompt("As-tu la toux ? (oui / non)");
if (toux === "oui") {
    pourcentage += 20;
}

console.log("Ton pourcentage de risque est : " + pourcentage + "%");