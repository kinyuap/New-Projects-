function todoList() {
  let todoIsHtml = '';
  const inputValue = document.getElementById('todoInput').value;
   document.getElementById('todoInput').value = '';
  const text = document.createTextNode(inputValue);
  const newInputValue = document.createElement('li');
    newInputValue.appendChild(text);
  const html = document.getElementById('todoList').appendChild(newInputValue)
};
document.querySelector('.button').addEventListener('click', () => {
 todoList();
});
