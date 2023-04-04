var symboleCase     = "0";// "&#x2610;";
var symboleObstacle = "Z";// "&#x25A0;";
var symboleDepart   = "D";// "&#x1F22F;";
var symboleArriver  = "A";// "&#x1F232;";
var symboleChemin   = "&#x1F201;";

var graphTab = [
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

function createGraph(tailleX, tailleY, nombreObstacles){
    let result = [];

    // Remplir result de sous-tableaux contenant des cases normales
    for (let i = 0; i < tailleY; i++){
        let fill = [];
        for (let k = 0; k < tailleX; k++){
            fill[taille(fill)] = symboleCase;
        }

        result[taille(result)] = fill;
    }

    // Remplacer des cases normales aléatoirement par des obstacles
    for (let i = 0; i < nombreObstacles; i++){
        let posX = aleatoire(tailleX - 1, 0);
        let posY = aleatoire(tailleY - 1, 0);

        result[posY][posX] = symboleObstacle;
    }

    // Remplacer des cases normales aléatoirement par le départ et l'arrivée sans remplacer les obstacles
    for (let i = 0; i < 2; i++){
        let posX;
        let posY;

        // Dans le cas du départ
        if (i == 0){
            do {
                posX = aleatoire(tailleX - 1, 0);
                posY = aleatoire(tailleY - 1, 0);
            } while(result[posY][posX] == symboleObstacle);

            result[posY][posX] = symboleDepart;
        }

        // Dans le cas de l'arrivée
        if (i == 1){
            do {
                posX = aleatoire(tailleX - 1, 0);
                posY = aleatoire(tailleY - 1, 0);
            } while(result[posY][posX] == symboleObstacle || result[posY][posX] == symboleDepart)

            result[posY][posX] = symboleArriver;
        }
    }

    return result;
}

function init(graphTab, start, end){
    // dans le cas d'un graphique généré aléatoirement
    graphTab = createGraph(5, 5, 10);
    afficher(graphTab);

    depart = findCharPos(graphTab, start);
    arrive = findCharPos(graphTab, end);

    let chemin = findPath(graphTab, depart, arrive);
    display(graphTab, chemin);
}

init(graphTab, symboleDepart, symboleArriver);
