let choix
let nombreUn
let nombreDeux
let resultat


function demanderNombres() {
    nombreUn = Number(prompt("Premier nombre  : "));
    nombreDeux = Number(prompt("Deuxième nombre  : "));
    
}

function additionner(nombreUn, nombreDeux) {
    return nombreUn + nombreDeux
}

function soustraire(nombreUn, nombreDeux) {
    return nombreUn - nombreDeux
}

function multiplier(nombreUn, nombreDeux) {
    return nombreUn * nombreDeux
}

function diviser(nombreUn, nombreDeux) {
    return nombreUn / nombreDeux
}


do {
    
    choix = Number(prompt(`Sélectionnez l'opération que vous souhaitez réaliser : 
        1: Addition
        2: Soustraction
        3: Multiplication
        4: Division
        0: Quitter
    `))

    try {
        switch (choix) {
            case 1:
                demanderNombres()
                resultat = additionner(nombreUn, nombreDeux)
                break;
            case 2:
                demanderNombres()
                resultat = soustraire(nombreUn, nombreDeux)
                break;
            case 3:
                demanderNombres()
                resultat = multiplier(nombreUn, nombreDeux)
                break;
            case 4:
                demanderNombres()
                resultat = diviser(nombreUn, nombreDeux)
                break;
            case 0:
                break;
            default:
                throw new Error('Vous devez choisir un nombre entre 0 et 5')
        }

        if (choix != 0) {
            alert(`Résultat : ${resultat}`)            
            choix = ""
        }
        
    } catch (error) {
        alert(error.message)
    }


} while (choix === "" || choix > 4 || choix < 0 || isNaN(choix));

alert("Au revoir !")
