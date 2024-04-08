



function todoList() {
   let todoIsHtml = '';
  
  const inputValue = document.getElementById('todoInput').value;
   document.getElementById('todoInput').value = '';
  const inputDate = document.getElementById('todoDate').value;
    document.getElementById('todoDate').value = '';
  // const text = document.createTextNode(inputValue);
  // const newInputValue = document.createElement('li');
  //   newInputValue.appendChild(text);
  // const html = document.getElementById('todoList').appendChild(newInputValue)

  const html = `
  <div>${inputValue}</div>
  <div>${inputDate}</div>
  <button class="js-delete-btn">Delete</button>
  `

  let newInputValue = document.getElementById('inputDisplay');
  newInputValue.innerHTML += html;

 let deleteButton =  newInputValue.querySelector('.js-delete-btn');
 deleteButton.addEventListener('click', () => {
  deleteButton.parentElement.remove();
 });
}

document.querySelector('.button').addEventListener('click', todoList);
