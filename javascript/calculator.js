const operator = ['acCLear', 'divide', 'multiply', 'subtract', 'add', 'equals'];
const num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'decimal'];
const keyboard = operator.concat(num);
const displaySmall = document.getElementById('displaySmall');
const calDisplay = document.getElementById('calDisplay');

let answer = 0;
let calc = '';
let lastKey = '';

for(let i = 0; i < keyboard.length; i ++){

  document.getElementById(keyboard[i]).addEventListener('click', function(){
    if (num.includes(keyboard[i])){
      if (answer != 0) {
        answer = 0;
        calc = '';
        displaySmall.innerText = 0;
        calDisplay.innerText = 0;
      }
      if (keyboard[i] == 'decimal'){
    if (!calDisplay.innerText.includes(this.innerText)){
      console.log('decimal');
      calc += this.innerText;
      calDisplay.innerText = calDisplay.innerText + this.innerText;
    };
    return;
      }
      if (calDisplay.innerText == 0){
        if(this.innerText != 0){
          calc += this.innerText;
          calDisplay.innerText = this.innerText;
        } else{
          if (calc != ''){
            calc += this.innerText;
          }
        }
      } else{
        calc += this.innerText;
        calDisplay.innerText += this.innerText;
      }

      lastKey = 'number';
    }

    if (operator.includes(keyboard[i])){
      if (keyboard[i] == 'acClear'){
        answer = 0;
        calc = '';
        displaySmall.innerText = 0;
        calDisplay.innerText = answer;
        return;
      }
      if (keyboard[i] == 'equals'){
        calc = (lastKey == 'number')? calc : calc.slice(0, -3);
        answer = Function('"use strict";return (' + calc +')')();
        displaySmall.innerText = calc + ' = ' + answer;
        calDisplay.innerText = answer;
        lastKey = 'equals' 
      } else {
        if (lastKey == 'number' || lastKey == 'equals'){
          if (calDisplay.innerText == 0){
            if (keyboard[i] != 'subtract'){
              calc = (lastKey == 'subtractplus')? calc.slice(0, -3) + this.innerText + ' ' : calc.slice(0, -2) + this.innerText + ' ';
              displaySmall.innerText = calc;
              lastKey = 'subtractplus';
              return;
            } else {
              if (lastKey != 'subtract' && lastKey != 'subtractplus') {
                calc = calc.slice(0, -1) + this.innerText + ' ';
                displaySmall.innerText = calc;
                lastKey = 'subtractplus';
                return;
              }
            }
          } else {
            if(answer != 0){
              calc = answer + ' ' + this.innerText + ' ';
              displaySmall.innerText = calc;
              calDisplay.innerText = 0;
              answer = 0;
            } else{
              calc += ' ' + this.innerText + ' ';
              displaySmall.innerText = calc;
              calDisplay.innerText = 0;
            }
            lastKey = keyboard[i];
          } 
        } else{
          if(keyboard[i] != 'subtract'){
            calc = (lastKey != 'subtractplus')? 
            calc.slice(0, -2) + this.innerText + ' ' : calc.slice(0,-4) + this.innerText + ' ';
            lastKey = keyboard[i];
          } else{
            if (lastKey != 'subtract'){
              calc += this.innerText + ' ';
              lastKey = 'subtractplus';
            }
          } 
          displaySmall.innerText = calc;
        }
      }
    }

  });
}


// function Person(name1, age) {
//   this.name = name1;
//   this.age = age;
//   this.introduce = function() {
//     return `Hi, I'm ${this.name}, and I'm ${this.age} years old.`;
//   };
// } 
// const person = new Person('Peter', 29);
// // const person2 = new Person('Peter', 30);

// // console.log(person2.introduce());



// const john = new Person('John', 30);
// const peter = new Person('Peter', 29)

// // console.log(peter.introduce());
//  // Output: Hi, I'm John, and I'm 30 years old.

// console.trace(this === window)
//               // regular Function Calls 
// function callFun(){
// console.log(this);
// }
// callFun();  // In a browser, logs `window` if not in strict mode
//               //method calls 
// const obj = {
//   name: 'Peter',
//   greet: function (){
//     console.log('Hello ' + this.name)
//   }
// };
// obj.greet(); // logs Hello Peter
//                   //constructor calls 
// // function Person(name){
// //   this.name = name
// // }
// // const addNew = new Person('Kinyua')
// // console.log(addNew.name)// logs Kinyua 
// //                     // event handlers 
// //   // document.getElementById('myButton').onclick = function (){
// //   //   console.log(this)
// //   }

//         //arrow functions 
//   const obj2 = {
//     name: 'Peter',
//     greet: function (){
//       const arFunc = () => {
//         console.log('Hello ' + this.name);
//       };
//       arFunc(); //Arrow functions do not have their own this context; instead, they inherit this from the enclosing lexical scope.
//     }
//   }
//   obj2.greet(); // logs Hello Peter 
//               //DOM Event Listener 
//     // document.getElementById('myButton2').addEventListener('çlick', function(){
//     //   console.log(this); // refers to the button element 
//     // })

//     function Person(){
//       console.log("I'm " + this.name);
//      }
//      var person0 = {name: "Stackoverflow"}
//      var person1 = {name: "John"};
//      var person2 = {name: "Doe"};
//      var person3 = {name: "Ala Eddine JEBALI"};
//      var origin = Person;
//      Person = function(){
//       origin.call(person0);
//      }
//      Person();
//      Person.call(person1);
//      Person.apply(person2);

//      var setValue;
//      var obj1 = {};
//      // defining Property with 'object.defineProperty'
//      Object.defineProperty(obj1, "objProperty", { 
//       get: function() {
//           return "a value";
//       },
//       set: function(value) {
//           setValue = value;
//       }
//   });
// console.log(obj1.objProperty); 
// obj1.objProperty = 'new value';
// console.log(setValue);

// var date = {
//   year: '2024',
//   month: '02',
//   day: '20',
//   get date() {
//   // Get the date in YYYY-MM-DD format
//   return `${this.year}-${this.month}-${this.day}` 
//   },
//   set date(dateString) {
//   // Set the date from a YYYY-MM-DD formatted string
//   var dateRegExp = /(\d{4})-(\d{2})-(\d{2})/;
  
//   // Check that the string is correctly formatted
//   if (dateRegExp.test(dateString)) {
//   var parsedDate = dateRegExp.exec(dateString);
//   this.year = parsedDate[1];
//   this.month = parsedDate[2];
//   this.day = parsedDate[3];
//   }
//   else {
//   throw new Error('Date string must be in YYYY-MM-DD format');
//   }
//   }
//  };
//  console.log(date.date);
//  const newDate = date.date = '2020-03-02';
//  console.log(newDate);
    
 