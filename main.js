var OBSTACLE = "🥷";

let graphTab = [
    ["D", "🥷", "A", "🥷", "🥷"],
    ["0", "0", "0", "🥷", "🥷"],
    ["🥷", "🥷", "🥷", "🥷", "🥷"],
    ["🥷", "🥷", "🥷", "🥷", "🥷"],
    ["🥷", "🥷", "🥷", "🥷", "🥷"],
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

init(graphTab, "D", "A");
