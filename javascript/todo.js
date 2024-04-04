



function todoList() {
   let todoIsHtml = '';
   let todoList = [];
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
  <button id="js-delete-btn">Delete</button>
  `;
 todoIsHtml += html;
 todoList = todoIsHtml;
 console.log(todoList);
  let newInputValue = document.getElementById('inputDisplay').innerHTML = todoIsHtml;
};

function deletebtn()
{
 
};

document.querySelector('.button').addEventListener('click', () => {
 todoList()
});
// document.getElementById('js-delete-btn').addEventListener('click', () => {
  
// })
