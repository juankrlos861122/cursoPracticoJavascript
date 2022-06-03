let lista = [
    100,
    200,
    500,
    4000000,
    600,
    300,
    400,
];

const listaOrdenada = lista.sort((a,b)=>a-b);
console.log(listaOrdenada);
const mitadLista = parseInt(lista.length / 2);

if (lista.length % 2 == 0){
    const pos1 = parseInt(lista.length / 2) - 1;
    const mediana = (listaOrdenada[pos1] + listaOrdenada[mitadLista]) / 2;
    console.log("La mediana es: " + mediana);
}else{
    console.log("La mediana es: " + listaOrdenada[mitadLista]);
}
