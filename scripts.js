// When User type a todo item and click add button, the item will be added to the list.
// Task 1.1 - Invoke a function on click button
// Task 1.2 - Get input value 
// Task 1.3 - Create and add the input value to ul list

// BugFix - empty input when item inserted succesfully
// BugFix - dont insert the task when input is empty

const todoList = localStorage.getItem('todoList').split(',');
console.log(todoList);
todoList.forEach((element) => {
  let todoList = document.getElementById('todo_list');
  todoList.innerHTML += `<li onclick="this.remove()">${element} </li>`
})


function addItem(){
  const inputBox = document.getElementById('todo_input');
  if (inputBox.value !== ''){
    const listItem = document.createElement('li');
  listItem.className = 'todo-list-item';
  listItem.innerHTML = inputBox.value;
  // onclick taze gosulanlar ucin
  listItem.onclick = function(){
    document.getElementById('todo_list').removeChild(listItem);
  }
  document.getElementById('todo_list').appendChild(listItem);
  inputBox.value = '';
  // add new item to array
  todoList.push(listItem.innerHTML);
  localStorage.setItem('todoList', todoList)
  } else {
    alert('input box can not be empty')
  }
}


// Story 2 - when User click on the item in the list , the item will be removed/deleted. 
// Task 1.1 - Add onclick attribute to li element

