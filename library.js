function tabFusion(tab, tab1) {
    let result = [];

    for (let i = 0; i < taille(tab); i++) {
        result[taille(result)] = tab[i];
    }

    for (let i = 0; i < taille(tab1); i++) {
        result[taille(result)] = tab1[i];
    }

    return result;
}

function tabCission(tab, pos) {
    let result = [];
    let tab1 = [];
    let tab2 = [];

    if (pos > taille(tab)) {
        for (let i = 0; i < taille(tab); i++) {
            result[i] = tab[i];
        }
    } else {
        for (let i = 0; i < pos; i++) {
            tab1[i] = tab[i];
        }

        for (let i = 0; i < taille(tab) - pos; i++) {
            tab2[i] = tab[i + pos];
        }

        result = [tab1, tab2];
    }

    return result;
}

function tabInsertion(tab, val, pos) {
    let result = [];

    for (let i = 0; i < taille(tab); i++) {
        if (i == pos) {
            result[taille(result)] = val;
        }
        result[taille(result)] = tab[i];
    }
    if (pos >= taille(tab)) {
        result[taille(result)] = val;
    }

    return result;
}

function tabSuppression(tab, pos) {
    let result = [];

    for (let i = 0; i < taille(tab); i++) {
        if (i != pos) {
            result[taille(result)] = tab[i];
        }
    }

    return result;
}

function tabAjout(tab, valeur) {
    tab[taille(tab)] = valeur;
}

function tabCopie(tab) {
    let result = [];
    for (i = 0; i < taille(tab); ++i) {
        result[i] = tab[i];
    }

    return result;
}

function tabPermutation(tab, pos1, pos2){
    let result = tabCopie(tab);

    if (pos1 >= 0 && pos2 >= 0 && pos1 < (taille(tab)) && pos2 < (taille(tab))){
        result[pos1] = tab[pos2];
        result[pos2] = tab[pos1];
    } else {
        return tab;
    }
    
    return result;
}

function tabMinimum(tab){
    let index = 0;
    for (let i = 1; i < taille(tab); i++){
        if (tab[i] < tab[index]){
            index = i;
        }
    }

    return index;
}

function tabMaximum(tab){
    let index = 0;
    for (let i = 1; i < taille(tab); i++){
        if (tab[i] > tab[index]){
            index = i;
        }
    }

    return index;
}

function tabTriSelection(tab){
    let result = [];
    let trieur = tabCopie(tab);

    while (taille(trieur)){
        let indexMin = tabMinimum(trieur);

        result[taille(result)] = trieur[indexValeurMin];
        trieur = tabSuppression(trieur, indexValeurMin);
    }
    
    return result;
}

function tabTriBulle(tab){
    let result = tabCopie(tab);

    for (let i = 0; i < taille(result); i++){
        if (result[i] > result[i+1] && (i+1) < taille(result)){
            result = tabPermutation(result, i, i+1);
        }
    }

    return result;
}

function tabTriInsertion(tab){
    let result = tabCopie(tab);

    let i, j;
    let enCours;
 
    for (i = 1; i < taille(result); i++) {
        enCours = result[i];
        for (j = i; j > 0 && result[j - 1] > enCours; j--) {
            result[j] = result[j - 1];
        }
        result[j] = enCours;
    }

    return result;
}
