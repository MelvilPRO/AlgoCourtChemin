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
        let newCurrent = prochainePositionXY(graphTab, current, end);
        resultPath[taille(resultPath)] = newCurrent;
        findPathRecursive(graphTab, newCurrent, end);
    }

    return resultPath;
}

function prochainePositionXY(graphTab, current, end){
    // current : position de départ ou actuelle
    // end     : position d'arrivée

    // On copie l'intégralité pour éviter des conflits
    let result = {"x": 0, "y": 0};
    result["x"] = current["x"];
    result["y"] = current["y"];

    // Rapprocher la position actuelle de x, si c'est pas la bonne
    // Pour tenter par Y si aucune position par X n'est valable
    let switchXY = true;
    if (result["x"] != end["x"]){
        switchXY = false;
        if (result["x"] > end["x"]){
            // Si c'est pas un symboleObstacle, on se déplace sur ce chemin
            if ((graphTab[result["x"] - 1][result["y"]]) != symboleObstacle){
                result["x"] = result["x"] - 1;
            // Si c'est un symboleObstacle, on essayera une position par Y
            } else { 
                switchXY = true;
            }
        } else {
            // Si c'est pas un symboleObstacle, on se déplace sur ce chemin
            if ((graphTab[result["x"] + 1][result["y"]]) != symboleObstacle){
                result["x"] = result["x"] + 1;
            // Si c'est un symboleObstacle, on essayera une position par Y
            } else {
                switchXY = true;
            }
        }
    } 
    // Rapprocher la position actuelle de y, si c'est pas la bonne
    if (result["y"] != end["y"] && switchXY){
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

    return result;
}