// When User type a todo item and click add button, the item will be added to the list.
// Task 1.1 - Invoke a function on click button
// Task 1.2 - Get input value 
// Task 1.3 - Create and add the input value to ul list

// BugFix - empty input when item inserted succesfully
// BugFix - dont insert the task when input is empty

const todoList = ['Tidy your room', 'Have your breakfast', 'Hangout with folks'];

todoList.forEach((element) => {
  let todoList = document.getElementById('todo_list');
  todoList.innerHTML += `<li onclick="this.remove()">${element} </li>`
})


function addItem(){
  const inputValue = document.getElementById('todo_input');
  if (inputValue.value !== ''){
    const listItem = document.createElement('li');
  listItem.className = 'todo-list-item';
  listItem.innerHTML = inputValue.value;
  // onclick taze gosulanlar ucin
  listItem.onclick = function(){
    removeItem(listItem);
  }
  document.getElementById('todo_list').appendChild(listItem);
  inputValue.value = '';
  } else {
    alert('input box can not be empty')
  }
}


// Story 2 - when User click on the item in the list , the item will be removed/deleted. 
// Task 1.1 - Add onclick attribute to li element

function removeItem(listItem){
  const isConfirmed = confirm('are you sure?')
  if(isConfirmed){
  document.getElementById('todo_list').removeChild(listItem);
  } else {
    console.log('alright')
  }
}