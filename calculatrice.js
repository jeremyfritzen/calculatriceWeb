let choix
let nombreUn, nombreDeux
let resultat
let restart = false

function additionner(nombreA, nombreB) {
    return nombreA + nombreB
}

function multiplier(nombreA, nombreB) {
    return nombreA * nombreB
}

function soustraire(nombreA, nombreB) {
    return nombreA - nombreB
}

function diviser(nombreA, nombreB) {
    if (nombreB == 0) {
        throw new Error("Impossible de diviser par 0 !")
    }
    return nombreA / nombreB
}

do {
    do {
        choix = prompt(` Menu principal : 
            1 : Addition
            2 : Multiplication
            3 : Soustraction
            4 : Division
            0 : Quitter
        `)
    } while (choix > 4 || choix < 0 || isNaN(choix));
    
    if (choix == "0" || choix === null) {
        alert(`Au revoir !`)
        break;
    }    
    
    do {
        nombreUn = Number(prompt("Premier nombre : "))
        nombreDeux = Number(prompt("Deuxième nombre : "))
    } while (isNaN(nombreUn) || isNaN(nombreDeux) );
    
    
    
    
    
    try {
        switch (choix) {
            case "1":
                resultat = additionner(nombreUn, nombreDeux)
                break;
        
            case "2":
                resultat = multiplier(nombreUn, nombreDeux)
                break;
        
            case "3":
                resultat = soustraire(nombreUn, nombreDeux)
                break;
        
            case "4":
                resultat = diviser(nombreUn, nombreDeux)
                break;
        
            default:
                throw new Error("Une erreur est survenue")
        }
        
        alert(`Résultat : ${resultat}`)
    
    } catch (error) {
        alert(error)
    }

    restart = confirm(`Effectuer une autre opération ?`)

} while (restart);



