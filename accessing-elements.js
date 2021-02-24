// const heading = document.querySelector('h1').innerHTML;
// const todoList = document.querySelector('#todo_list').innerHTML;
// const todoListItem = document.querySelector('.todo_list_item');
// const todoListItems = document.querySelectorAll('.todo_list_item');

const todoList = document.getElementById('todo_list').innerHTML;
const todoListItem = document.getElementsByClassName('todo_list_item');
const heading = document.getElementsByTagName('h1');
const todoListItems = document.querySelectorAll('.todo_list_item');
const todoInput = document.getElementById('todo_input');

// for (item of todoInput) {
//   console.log(item.innerHTML)
// }
// for(let i = 0; i<heading.length; i++){
//   console.log(heading[i].innerHTML)
// }
// heading.forEach((item) => {
//   console.log(item.innerHTML)
// });
