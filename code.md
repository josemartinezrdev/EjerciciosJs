# Explicaciones | Código

Archivo en el que se almacenaran las explicaciones del código dado en las diapositivas.

## Punto 1

```
(() => {
    const devolverPrimerElemento = (array) => {
    if(array.length === 0) return {"message": "El arreglo no puede estar vacio"}
    if(!Array.isArray(array)) return {"message": "El parámetro debe ser un arreglo"}
    return array[0];
}
    console.log(devolverPrimerElemento([1,2,3,4,5]));
    console.log(devolverPrimerElemento([1]));
    console.log(devolverPrimerElemento([]));
    console.log(devolverPrimerElemento("Hola mundo"));
    console.log(devolverPrimerElemento(5));
    console.log(devolverPrimerElemento({}));
})();
```

Se aprecia una función de **flecha** que verifica dos cosas.

1. Que el arreglo no este vacío
2. Que el parámetro sea un arreglo

Si el parámetro enviado es un arreglo y no esta vacío entonces la función **retornara** el primer elemento.

## Punto 2

```
function devolverUltimoElemento(array) {
    if(array.length === 0) {
        return "No hay elementos en el array";
    }
    if(!Array.isArray(array)) {
        return "El parámetro no es un array";
    }
    return array.at(-1);
}
console.log(devolverUltimoElemento([1,2,3,4,5]));
console.log(devolverUltimoElemento(["Hola", "mundo"]));
console.log(devolverUltimoElemento([1]));
console.log(devolverUltimoElemento([]));
console.log(devolverUltimoElemento("Hola mundo"));
console.log(devolverUltimoElemento(5));
console.log(devolverUltimoElemento({}));
```

En esta función realiza las mismas verificaciones que la anterior, solo que en este caso si todo esta correcto **retornara** el ultimo valor.

## Punto 3

```
function obtenerLargoDelArray(array) {
    return (!Array.isArray(array) ? "El parámetro no es un arreglo." : array.length);
}

console.log(obtenerLargoDelArray([1,2,3,4,5,6,7,8,9,10]));
console.log(obtenerLargoDelArray([]));
console.log(obtenerLargoDelArray({}));
console.log(obtenerLargoDelArray(1));
console.log(obtenerLargoDelArray("Hola"));
```

En este caso, se usa el **operador ternario**, para evaluar si es un arreglo, en caso que lo sea se procede a **retornar** el tamaño del arreglo: `array.length`

## Punto 4

```
function arrayContiene(array, elemento) {
    if(!Array.isArray(array)){
        return "El primer argumento debe ser un arreglo"
    }
    return array.includes(elemento);
}
console.log(arrayContiene([1, 2, 3], 1)); // true
console.log(arrayContiene([1, 2, 3], 4)); // false*/
console.log(arrayContiene(3, 4));
console.log(arrayContiene(["Pedro", "Juan", "Maria"], "Juan")); // true
```

Esta función recibe dos (2) parámetros, el arreglo y un elemento que se buscara dentro del mismo.
En caso de que el arreglo contenga al elemento **retornara** `true`, en caso de no contenerlo **retornara** `false`.

## Punto 5

```
function numeroMasGrande(arrayOfNums) {
    if(!Array.isArray(arrayOfNums)) return "El parametro debe ser un arreglo"
    if(arrayOfNums.some((item) => typeof item !== "number")) return "Los elementos deben ser numeros"
    return arrayOfNums.reduce((acc, curr) => acc + curr, 0)
}
console.log(numeroMasGrande([1,2,3,4,5]));
console.log(numeroMasGrande([]));
console.log(numeroMasGrande([1,2,3,4,"5"]))
console.log(numeroMasGrande(6))
console.log(numeroMasGrande({}))
console.log(numeroMasGrande(false))
```

Esta función recibe como único parámetro un arreglo de números, verifica si el parámetro es un arreglo y si lo que contiene son números.
Luego de esto hallara el mayor de los números y lo **retornara**

## Punto 6

```
function empiezaConNueve(num) {
    if(typeof num !== "number") return "El parametro debe ser un numero";
    const numeroAString = String(num)
    const primerDigito = Number(numeroAString[0]);
    return primerDigito === 9
}
console.log(empiezaConNueve(965))
console.log(empiezaConNueve(65))
console.log(empiezaConNueve(999))
console.log(empiezaConNueve(0))
console.log(empiezaConNueve(9))
console.log(empiezaConNueve(true))
```

En este caso, la función recibe un número como parámetro, verifica que sea un número, luego convierte el número a un string: `String(num)` para posteriormente comprobar si el primer carácter es un número nueve (9), si es verdad **retornara** `true`, en caso que no lo sea **retornara** `false`.
