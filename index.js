// MENU

let opt = "";

do {
  opt = prompt(`
    1. Ejs 1
    2. Ejs 2
    3. Ejs 3
    4. Ejs 4
    5. Ejs 5
    6. Ejs 6
    7. Ejs 7
    8. Ejs 8
    9. Ejs 9
    10. Ejs 10
    11. Ejs 11
    12. Ejs 12
    13. Ejs 13
    14. Ejs 14
    15. Ejs 15
    16. Ejs 16
    17. Ejs 17
    18. Ejs 18
    19. Ejs 19
    20. SALIR
`);

  switch (opt) {
    case "1":
      contrasenaValida(prompt("Ingrese la contraseña"));
      break;
    case "2":
      calcularImpuestos(
        parseInt(prompt("Ingrese la edad")),
        parseInt(prompt("Ingrese los ingresos"))
      );
      break;
    case "3":
      bmi(
        parseFloat(prompt("Ingrese peso")),
        parseFloat(prompt("Ingrese altura"))
      );
      break;
    case "4":
      let count = 1;
      let array = [];
      while (count <= 3) {
        array.push(prompt("Ingrese 3 elementos de un array"));
        count += 1;
      }
      imprimirArreglo(array);
      break;
    case "5":
      contarRango(
        parseInt(prompt("Ingrese el numero 1")),
        parseInt(prompt("Ingrese el numero 2"))
      );
      break;
    case "6":
      likes(parseInt(prompt("Ingresa el número de likes")));
      break;
    case "7":
      sumarRango(
        parseInt(prompt("Ingrese el numero 1")),
        parseInt(prompt("Ingrese el numero 2"))
      );
      break;
    case "8":
      numeroDeAes(prompt("Ingresa una palabra"));
      break;
    case "9":
      numeroDeCaracteres(
        prompt("Ingrese la palabra"),
        prompt("Ingrese el carácter a buscar")
      );
      break;
    case "10":
      let countDos = 1;
      let fin = parseInt(prompt("Cuantos números va a ingresar?"));
      let arrayDos = [];
      while (countDos <= fin) {
        arrayDos.push(parseInt(prompt("Ingrese los números para el array")));
        countDos += 1;
      }
      sumarArreglo(arrayDos);
      break;
    case "11":
      let countTres = 1;
      let finDos = parseInt(prompt("Cuantos números va a ingresar?"));
      let arrayTres = [];
      while (countTres <= finDos) {
        arrayTres.push(parseInt(prompt("Ingrese los números para el array")));
        countTres += 1;
      }
      multiplicarArreglo(arrayTres);
      break;
    case "12":
      let countFour = 1;
      let finFour = parseInt(prompt("Cuantos números va a ingresar?"));
      let arrayFour = [];
      while (countFour <= finFour) {
        arrayFour.push(parseInt(prompt("Ingrese los números para el array")));
        countFour += 1;
      }
      removerCeros(arrayFour);
      break;
    case "13":
      transcribir(prompt("Ingrese la cadena de ADN"));
      break;
    case "14":
      capitalizar(prompt("Ingrese texto a capitalizar"));
      break;
    case "15":
      let countFive = 1;
      let finFive = parseInt(prompt("Cuantos números va a ingresar?"));
      let arrayFive = [];
      while (countFive <= finFive) {
        arrayFive.push(parseInt(prompt("Ingrese los números para el array")));
        countFive += 1;
      }
      max(arrayFive);
      break;
    case "16":
      let countSix = 1;
      let finSix = parseInt(prompt("Cuantos números va a ingresar?"));
      let arraySix = [];
      while (countSix <= finSix) {
        arraySix.push(parseInt(prompt("Ingrese los números para el array")));
        countSix += 1;
      }
      pares(arraySix);
      break;
    case "17":
      password(prompt("Ingrese la contraseña"));
      break;
    case "18":
      let countSev = 1;
      let finSev = parseInt(prompt("Cuantos números va a ingresar?"));
      let arraySev = [];
      while (countSev <= finSev) {
        arraySev.push(parseInt(prompt("Ingrese los números para el array")));
        countSev += 1;
      }
      posiciones(arraySev);
      break;
    case "19":
      let countEth = 1;
      let finEth = parseInt(prompt("Cuantas palabras va a ingresar?"));
      let arrayEth = [];
      while (countEth <= finEth) {
        arrayEth.push(prompt("Ingrese los números para el array"));
        countEth += 1;
      }
      empiezanConA(arrayEth);
      break;
    case "20":
      break;
    default:
      alert("La opción no es valida\n");
  }
} while (opt != "20");

// EJERCICIO 1

function contrasenaValida(pass) {
  if (pass === "2Fj(jjbFsuj" || pass === "eoZiugBf&g9") {
    alert(true);
  } else {
    alert(false);
  }
}

// EJERCICIO 2

function calcularImpuestos(edad, ingresos) {
  if (edad >= 18 && ingresos >= 1000) {
    alert("El ingreso con el descuento es: " + ingresos * 0.4);
  } else {
    alert("0");
  }
}

// EJERCICIO 3

function bmi(peso, altura) {
  bmi = peso / altura ** 2;
  if (bmi < 18.5) {
    alert("Bajo de peso");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    alert("Normal");
  } else if (bmi >= 25 && bmi <= 29.9) {
    alert("Sobrepeso");
  } else if (bmi >= 30) {
    alert("Obeso");
  }
}

// EJERCICIO 4

function imprimirArreglo(array) {
  alert(array);
  for (let i = 0; i < array.length; i++) {
    alert(array[i]);
  }
}

// EJERCICIO 5

function contarRango(num1, num2) {
  let cont = 0;
  for (let i = num1; i <= num2; i++) {
    cont += 1;
  }
  alert(cont - 2);
}

// EJERCICIO 6

function likes(num) {
  if (num <= 999) {
    alert(num.toString());
  } else if (num <= 999999) {
    alert(num / 1000 + "K");
  } else if (num <= 999999999) {
    alert(num / 1000000 + "M");
  }
}

// EJERCICIO 7

function sumarRango(num1, num2) {
  total = 0;
  for (let i = num1; i <= num2; i++) {
    total += i;
  }
  alert(`La suma es: ${total}`);
}

// EJERCICIO 8

function numeroDeAes(str) {
  let cont = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "a") {
      cont++;
    }
  }
  alert(`La letra "A" aparece: ${cont} veces`);
}

// EJERCICIO 9

function numeroDeCaracteres(str, char) {
  let cont = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      cont++;
    }
  }
  alert(`El carácter "${char}" aparece: ${cont} veces`);
}

// EJERCICIO 10

function sumarArreglo(array) {
  alert(array);
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  alert(`La suma es: ${total}`);
}

// EJERCICIO 11

function multiplicarArreglo(array) {
  alert(array);
  let total = 1;
  for (let i = 0; i < array.length; i++) {
    total *= array[i];
  }
  alert(`La multiplicación: ${total}`);
}

// EJERCICIO 12

function removerCeros(array) {
  //Tuve que ponerlo al revés porque no se cuantos ceros hay
  //si lo pongo de izquierda a derecha solo eliminara el primero
  //por esto lo pongo de derecha a izquierda, asi eliminara todos hasta
  //llegar al primer cero.
  alert(array);
  let temp = array.slice();
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === 0) {
      temp.splice(i, 1);
    }
  }
  alert(`Array original: ${array}`);
  alert(`Array sin Ceros (0): ${temp}`);
}

// EJERCICIO 13

function transcribir(adn) {
  let trans = "";
  for (let i = 0; i < adn.length; i++) {
    if (adn[i].toLowerCase() === "g") {
      trans += "C";
    } else if (adn[i].toLowerCase() === "c") trans += "G";
    else if (adn[i].toLowerCase() === "t") trans += "A";
    else if (adn[i].toLowerCase() === "a") trans += "U";
  }
  alert(trans);
}

// EJERCICIO 14

function capitalizar(str) {
  charOne = str[0].toUpperCase();
  restoStr = str.slice(1);

  alert(charOne + restoStr);
}

// EJERCICIO 15

function max(array) {
  //En este ejercicio estaba probando el operador ternario
  // condición ? verdadero : falso
  let tempMax = 0;
  for (let i = 0; i < array.length; i++) {
    array[i] > tempMax ? (tempMax = array[i]) : false;
  }
  alert(tempMax);
}

// EJERCICIO 16

function pares(array) {
  let pares = [];
  for (let i = 0; i < array.length; i++) {
    array[i] % 2 === 0 ? pares.push(array[i]) : false;
  }
  alert(pares);
}

// EJERCICIO 17

function password(str) {
  let newText = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "a") {
      newText += "4";
    } else if (str[i].toLowerCase() === "e") newText += "3";
    else if (str[i].toLowerCase() === "i") newText += "1";
    else if (str[i].toLowerCase() === "o") newText += "0";
    else if (str[i].toLowerCase() === " ") newText += "";
    else newText += str[i];
  }
  alert(newText);
}

// EJERCICIO 18

function posiciones(array) {
  let positions = [];
  for (let i = 0; i < array.length; i++) {
    array[i] % 2 === 0 ? positions.push(i) : false;
  }
  alert(positions);
}

// EJERCICIO 19

function empiezanConA(array) {
  let startA = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i][0].toLowerCase() === "a") {
      startA.push(array[i]);
    }
  }
  alert(startA);
}
