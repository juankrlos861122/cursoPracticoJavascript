
function calcularMediaAritmetica(lista){
    
    // let sumaLista = 0;
    // for(var i = 0; i < lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }
    // return sumaLista / lista.length;
    
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado = valorAcumulado + nuevoElemento;
        }
    );

    return sumaLista / lista.length;  
}
