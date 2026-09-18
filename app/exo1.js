export function NegatifPositif(tableau) {
    let index = 0; 
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] <= 0) {
            let temporary = tableau[i];
            tableau[i] = tableau[index];
            tableau[index] = temporary;

            index++;
        }
    }
    
    return tableau;
}

let test1 = [3, -1, 0, 4, -2, 5, -3];
console.log("Résultat 1 :", NegatifPositif(test1));

let test2 = [-5, -3, 2, 4, 0];
console.log("Résultat 2 :", NegatifPositif(test2)); 