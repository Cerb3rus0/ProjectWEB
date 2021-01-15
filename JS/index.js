"use strict";

console.log("Используется строгий режим.".toUpperCase());

let arr_names;
let random_math;

arr_names = ["denis", "lesha", "artem", "valera", "kirill", "anton", "maksim"];
random_math = Math.floor(Math.random() * arr_names.length);

console.log(arr_names.length)
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

  var name = prompt("Your name?", 'My name is');
  var message = prompt('Your message', 'I have write message');
  let yesoryes = confirm('Ты пидор?');

    if(yesoryes == true){
      alert("Реально пидор"+ " "+ 'Haha')
    }
    else{
      alert("Не пидор")
    }

  alert(name+ ' ' + message)

  console.log(name+ ' ' + message);
};


function user_write(message_user_write, name_user_write) {

  var message_user_write = prompt('What u talk?','Im gay');
  var name_user_write = prompt('Whats u name?', 'Jhonny');

  alert(message_user_write +" "+ name_user_write);
  console.log(message_user_write +" "+ name_user_write);
}


const c = '17';
const d = "17";
const e = "I'm a string";
const f = false;
const g = true;
const h = null;
const i = undefined;
const j = Symbol("I'm a Symbol");
const k = { name: 'John' };
const l = [1, 2, 3, 4];
const m = function run() {
    return 17;
};

let const_all_variable = [c,d,e,f,g,h,i,j,k,l,m];

let num_variable = 0;

function alert_typeof_variable(variable_name){
  console.log('variable typeof:', typeof variable_name);
}

while(num_variable <= 10){
  num_variable++;
  
  console.log(alert_typeof_variable(const_all_variable[num_variable]));
}

alert_typeof_variable()

