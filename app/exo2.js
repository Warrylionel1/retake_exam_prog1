export function Echanger(tableau, i, j) {
    let temporary = tableau[i];
    tableau[i] = tableau[j];
    tableau[j] = temporary;
    return tableau;
}

let test = [0, 1, 0];
console.log("Résultat: ", Echanger(test, 1, 2));