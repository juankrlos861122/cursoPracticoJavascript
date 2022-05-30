/*
//Codigo del cuadrado

console.group("cuadrados");
    
    const ladoCuadrado = 5;
    console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cms");
    const perimetroCuadrado = ladoCuadrado * 4;
    console.log("El perimetro del cuadrado es: " + perimetroCuadrado  + " cms");

    const areaCuadrado = ladoCuadrado * ladoCuadrado;
    console.log("El área del cuadrado es: " + areaCuadrado + " cms 2");

console.groupEnd();

//Codigo del Triangulo

console.group("Triangulo");
    
    const ladoTriangulo1 = 6;
    const ladoTriangulo2 = 6;
    const baseTriangulo = 4;
    const alturaTriangulo = 5.5;

    console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");
    console.log("La altura del triangulo es: " + alturaTriangulo);

    const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
    console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

    const areaTriangulo= (baseTriangulo * alturaTriangulo) / 2;
    console.log("El área del triangulo es: " + areaTriangulo + "cm2");

console.groupEnd();

//Código del circulo

console.group("Circulo");
    
    const radioCirculo = 4;
    const Pi = Math.PI;
    console.log("El radio del circulo es: " + radioCirculo + " cm.");
    console.log("PI: " + pi);

    const diametroCirculo = radioCirculo * 2;
    console.log("El diametro del circulo es: " + diametroCirculo + " cm.");

    const perimetroCirculo = diametroCirculo * pi;
    console.log("El perimetro del circulo es " + perimetroCirculo + " cm.");

    const areaCirculo = (radioCirculo * radioCirculo) * pi;
    console.log("El área del circulo es: " + areaCirculo + " cm2.");

console.groupEnd(); */

// Funciones calcular áreas y periimetros

    //Cuadrado

    function perimetroCuadrado(lado){
        return lado * 4;
    }
    function areaCuadrado(lado){
        return lado * lado;
    }

    //Triangulo

    function perimetroTriangulo(lado1,lado2,base){
        return lado1 + lado2 + base;
    }

    function areaTriangulo(base, altura){
        return (base * altura) / 2;
    }

    //Circulo

    const Pi = Math.PI;

    function diametroCirculo(radio){
        return radio * 2;
    }
    
    function perimetroCirculo(radio){
        const diametro = diametroCirculo(radio);
        return diametro * Pi;
    }
    function areaCirculo(radio){
        return (radio * radio) * Pi;
    }

//Aqui interectuamos con HMTL

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert("El perimetro del cuadrado es: " + perimetro + "cm.");
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = parseFloat(input.value);
    const area = areaCuadrado(value);
    alert("El área del cuadrado es: " + area + "cm2");   
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputLado1Triangulo");
    const input2 = document.getElementById("inputLado2Triangulo");
    const input3 = document.getElementById("inputBaseTriangulo");
    const lado1 = parseFloat(input1.value);
    const lado2 = parseFloat(input2.value);
    const base = parseFloat(input3.value);

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert("El perimetro del cuadrado es: " + perimetro + "cm.");
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("inputAlturaTriangulo");
    const input2 = document.getElementById("inputBaseTriangulo");
    altura = parseFloat(input1.value);
    base = parseFloat(input2.value);

    const area = areaTriangulo(base,altura);
    alert("El área del cuadrado es: " + area + "cm.");
}