var resultPath = [];
function findPath(graphTab, start, end){
    // start   : position de départ
    // end     : position d'arrivée
    resultPath[taille(resultPath)] = start;
    let result = findPathRecursive(graphTab, start, end);
    return result;
}

function findPathRecursive(graphTab, current, end){
    // current : position de départ ou actuelle
    // end     : position d'arrivée
    if (current["x"] == end["x"] && current["y"] == end["y"]){
        afficher("Le chemin a été trouvé car la position actuelle est la même que celle d'arrivée");
        afficher("Destination: X = " + current["x"] + " : Y = " + current["y"]);
    } else {
        let newCurrent = prochainePositionX(graphTab, current, end);
        if (newCurrent == false){
            newCurrent = prochainePositionY(graphTab, current, end);
        }

        if (newCurrent == false) return false;
        resultPath[taille(resultPath)] = newCurrent;
        // Ici, nous pouvons gérer les culs-de-sac grace à la récursion
        // Nous avons la possibilité de revenir en arrière
        // Dans le cas d'un cul-de-sac, on effectue l'action dans le bloc
        if (findPathRecursive(graphTab, newCurrent, end) == false){
            return false;
        }
        
    }

    return resultPath;
}

function prochainePositionX(graphTab, current, end){
    // current : position de départ ou actuelle
    // end     : position d'arrivée

    // On copie l'intégralité pour éviter des conflits
    let result = {"x": current["x"], "y": current["y"]};
    // Rapprocher la position actuelle de x, si c'est pas celle d'arrivéeé
    if (result["x"] != end["x"]){
        // Vérifier de quel sens il faut se rapprocher
        if (result["x"] > end["x"]){
            // Si c'est pas un symboleObstacle, on se déplace sur ce chemin
            if ((graphTab[result["x"] - 1][result["y"]]) != symboleObstacle){
                result["x"] = result["x"] - 1;
            // Si c'est un symboleObstacle, on retourne false
            } else { 
                return false;
            }
        } else {
            // Si c'est pas un symboleObstacle, on se déplace sur ce chemin
            if ((graphTab[result["x"] + 1][result["y"]]) != symboleObstacle){
                result["x"] = result["x"] + 1;
            // Si c'est un symboleObstacle, on retourne false
            } else {
                return false;
            }
        }
    } 

    // Si c'est la même position d'origine, on retourne false
    if (current["x"] == result["x"]){
        return false;
    }
    return result;
}

function prochainePositionY(graphTab, current, end){
    // current : position de départ ou actuelle
    // end     : position d'arrivée

    // On copie l'intégralité pour éviter des conflits
    let result = {"x": current["x"], "y": current["y"]};
    // Rapprocher la position actuelle de y, si c'est pas celle d'arrivée
    if (result["y"] != end["y"]){
        // Vérifier de quel sens il faut se rapprocher
        if (result["y"] > end["y"]){
            // Si c'est pas un symboleObstacle, on se déplace sur ce chemin
            if ((graphTab[result["x"]][result["y"] - 1]) != symboleObstacle){
                result["y"] = result["y"] - 1;
            } else {
                return false;
            }
        } else {
            // Si c'est pas un symboleObstacle, on se déplace sur ce chemin
            if ((graphTab[result["x"]][result["y"] + 1]) != symboleObstacle){
                result["y"] = result["y"] + 1;
            } else {
                return false;
            }
        }
    }

    // Si c'est la même position d'origine, on retourne false
    if (current["y"] == result["y"]){
        return false;
    }
    return result;
}