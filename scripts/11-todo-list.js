const todolist = [
    "wash clothes",
    " make dinner"
];

rendertodolist()

function rendertodolist(){
    let todolistHTML = '';

    for(let i = 0; i < todolist.length; i++){
      const todo = todolist[i];
      const html = `<p>${todo}</p>`;
      todolistHTML += html;
    }
    console.log(todolistHTML);

    document.querySelector('.js-todo-list').innerHTML
      = todolistHTML

}
function addtodo(){
  const inputvalue = document.querySelector('.js-name-input');

  const todoname = inputvalue.value;

  todolist.push(todoname);

  console.log(todolist)

  

  inputvalue.value=' '
rendertodolist()
}