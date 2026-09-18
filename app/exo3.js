import { NombreUn, Echanger } from './exo2';

export function triLignes(M) {
    for (let i = 0; i < M.length; i++) {
        for (let j = i + 1; j < M.length; j++) {
            if (NombreUn(M[i]) > NombreUn(M[j])) {
                Echanger(M, i, j);
            }
        }
    }

    return M;
}

let test = [ 
  [0, 0, 1, 1], 
  [0, 0, 0, 1], 
  [1, 1, 1, 1], 
  [0, 0, 0, 0] 
] ;

console.log("Result: " ,triLignes(test));
