"use strict";

console.log("Используется строгий режим.".toUpperCase());

let arr_names;
let random_math;

arr_names = ["denis", "lesha", "artem", "valera", "kirill", "anton", "maksim"];
random_math = Math.floor(Math.random() * arr_names.length);

console.log(random_math, arr_names[random_math]);
// вызов результата вычислений и соответствующий индекс с вложением результату.

const first_name = "Denis";
const last_name = "Kokovalos";
const age_user = 30;

let lists_dom;

// ES6
// Работа с маленькой частью DOM.
lists_dom = `
  <ul>
    <li>
      First name: ${first_name}
    </li>
    <li>
      Last name: ${last_name}
    </li>
    <li>
      Age: ${age_user}
    </li>
    <li>
      Math random and Array index: ${
        random_math + "  " + arr_names[random_math]
      }
    </li>
  </ul>
`;

document.getElementById("element_inner").innerHTML = lists_dom;
// создание списка и взаимодействие с переменными вместе с результатами вычислений массива.

let a = 20;
let b = 16;
let string;

string = a.toString() + b.toString();
console.log(typeof string, string);

function finalGrad(exam, projects) {
  if (exam > 90 && projects > 10) {
    return 100;
  } else if (exam > 75 && projects > 5) {
    return 90;
  } else if (exam >= 50 && projects >= 2) {
    return 50;
  }
  return 0;
}

console.log(finalGrad(50, 2));

let arr_len = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function length_arr() {
  console.log(arr_len.length);
}

length_arr();



function tea(name, message){
  
  var name = prompt("Your name?", 0);
  var message = prompt('Your message', 0);

  console.log(name+ ' ' + message);
}
