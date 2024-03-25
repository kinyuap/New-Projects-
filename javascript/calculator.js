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



 
