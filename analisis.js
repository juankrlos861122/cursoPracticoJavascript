//Helpers, Utils

function esPar(numerito){
    return (numerito % 2 === 0);
};

function calcularMediaAritmetica(lista){
    const listaOrdenada = lista.sort((a,b)=>a-b);
    const mitadLista = parseInt(lista.length / 2);

    if (lista.length % 2 == 0){
        const pos1 = parseInt(lista.length / 2) - 1;
        const media = (listaOrdenada[pos1] + listaOrdenada[mitadLista]) / 2;
        return media;
    }else{
        const media = listaOrdenada[mitadLista];
        return media;
    }
}

//Calculadora de mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    }else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
};

//Mediana General

const salariosCol = colombia.map(personita => personita.salary);
 
const salariosColSorted = salariosCol.sort((salaryA, salaryB) => salaryA - salaryB);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana del Top10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;


const salariosColTop10 = salariosColSorted.splice(
    spliceStart, 
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);


console.log({
    medianaGeneralCol,
    medianaTop10Col
});