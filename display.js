function display(graphTab, chemin){
    for (let i = 0; i < taille(chemin); i++){
        let position = chemin[i];
        let x = position["x"]
        let y = position["y"];

        if (i == 0){
            graphTab[x][y] = symboleChemin;
        }
        else if (i == taille(chemin) - 1){
            graphTab[x][y] = symboleChemin;
        }
        else {
            graphTab[x][y] = symboleChemin;
        }
    }

    afficher(graphTab);
}