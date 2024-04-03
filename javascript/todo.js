

let todoIsHtml = '';

function todoList() {
  
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
  `;
 todoIsHtml += html;

  let newInputValue = document.getElementById('inputDisplay')
 newInputValue.innerHTML = todoIsHtml;

};
document.querySelector('.button').addEventListener('click', () => {
 todoList()
});
