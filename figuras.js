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

    function alturaTrianguloIsosceles(lado1,lado2,base){
        return Math.sqrt((lado1*lado1) - ((base*base)/4))
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
        return (radio**2) * Pi;
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

function calcularAlturaIsosceles(){
    const input1 = document.getElementById("inputLado1Triangulo");
    const input2 = document.getElementById("inputLado2Triangulo");
    const input3 = document.getElementById("inputBaseTriangulo");

    const lado1 = parseFloat(input1.value);
    const lado2 = parseFloat(input2.value);
    const base = parseFloat(input3.value);

    if(lado1===lado2 && lado2 != base){
        const resultado = alturaTrianguloIsosceles(lado1,lado2,base);
        alert("La altura del triangulo es: " + resultado + "cm.");
    }else{
        alert("El triangulo no es Isosceles");
    }
}

//Area y perimetro del circulo

function calculaPerimetroCirculo(){
    const radio = document.getElementById("radioCirculo");
    const value = parseFloat(radio.value);

    const resultado = perimetroCirculo(value);
    alert("El perimetro del circulo es: " + resultado + "cm.");
}

function calculaAreaCirculo(){
    const radio = document.getElementById("radioCirculo");
    const value = parseFloat(radio.value);

    const resultado = areaCirculo(value);
    alert("El área del circulo es: " + resultado + "cm.");
}