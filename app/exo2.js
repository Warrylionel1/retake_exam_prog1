export function Echanger(tableau, i, j) {
    let temporary = tableau[i];
    tableau[i] = tableau[j];
    tableau[j] = temporary;
    return tableau;
}

let test = [0, 1, 0];
console.log("Résultat: ", Echanger(test, 1, 2));

export function Ranger(T) {
    let zeroIndex = 0;

    for (let i = 0; i < T.length; i++) {
        if (T[i] === 0) {
            Echanger(T, i, zeroIndex);
            zeroIndex++;
        }
    }

    return T;
}

let test1 = [0, 1, 0, 0, 1, 0];
console.log("Result : ", Ranger(test1));
