let lista = [1,5,4,1,3,3,2,5,3,3,4,6,2,3,6].sort();


console.log(lista);
let contador = 1;
let indice = 0;
let arrayNumero = [];
let arrayVeces = [];

for(let i = 0; i < lista.length; i++){
    if(lista[i] === lista[i+1]){
        contador++;
    }else{
        if(contador>=2){
            arrayNumero[indice] = [lista[i]];
            arrayVeces[indice] = [contador];
            console.log(`${arrayNumero[indice]} : ${arrayVeces[indice]}`);
            indice++;
        }
        contador = 1;
    }
}
var m = Math.max(...arrayVeces);
console.log(m);

//console.log("La moda es: " + moda);