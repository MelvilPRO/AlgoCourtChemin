var symboleCase     = "0";// "&#x2610;";
var symboleObstacle = "Z";// "&#x25A0;";
var symboleDepart   = "D";// "&#x1F22F;";
var symboleArriver  = "A";// "&#x1F232;";
var symboleChemin   = "&#x1F201;";

let graphTab = [
    [symboleArriver, symboleObstacle, symboleCase, symboleCase, symboleCase],
    [symboleCase, symboleCase, symboleCase, symboleObstacle, symboleDepart],
    [symboleObstacle, symboleObstacle, symboleObstacle, symboleObstacle, symboleObstacle],
    [symboleObstacle, symboleObstacle, symboleObstacle, symboleObstacle, symboleObstacle],
    [symboleObstacle, symboleObstacle, symboleObstacle, symboleObstacle, symboleObstacle],
];

function findCharPos(graphTab, char){
    let result = {};

    for (let ligne = 0; ligne < taille(graphTab); ligne++){
        for (let colone = 0; colone < taille(graphTab[ligne]); colone++){
            if (graphTab[ligne][colone] == char){
                result = {
                    "x": ligne,
                    "y": colone
                };
            }
        }
    }

    return result;
}

function init(graphTab, start, end){
    afficher(graphTab);

    depart = findCharPos(graphTab, start);
    arrive = findCharPos(graphTab, end);

    let chemin = findPath(graphTab, depart, arrive);
    display(graphTab, chemin);
}

init(graphTab, symboleDepart, symboleArriver);
