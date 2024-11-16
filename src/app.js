/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let quien = ["El perro", "Mi abuela", "Mi hermano", "El gato"];
  let accion = ["se comió", "me ha hecho", "me ha roto", "me ha quemado"];
  let que = ["mis deberes", "un cachopo", "mi móvil", "el coche"];
  let cuando = [
    "antes de clase",
    "cuando estaba jugando",
    "mientras hacía ejercicio",
    "durante la misa de las cuatro"
  ];

  //Funcion para cambiar arrays con valores aleatorios
  function arrayAleatorio(array) {
    var a, b, c;

    for (a = array.length - 1; a > 0; a--) {
      b = Math.floor(Math.random() * (a + 1));

      c = array[a];

      array[a] = array[b];
      array[b] = c;
    }
  }

  arrayAleatorio(quien);
  arrayAleatorio(accion);
  arrayAleatorio(que);
  arrayAleatorio(cuando);

  const frase = document.getElementById("excusa");
  for (let i = 0; i < quien.length; i++) {
    frase.innerText =
      quien[i] + " " + accion[i] + " " + que[i] + " " + cuando[i];
  }
};
