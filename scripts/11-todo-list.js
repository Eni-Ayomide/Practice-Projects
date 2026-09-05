const todolist = [
];

rendertodolist()

function rendertodolist(){
    let todolistHTML = '';

    for(let i = 0; i < todolist.length; i++){
      const todoObject = todolist[i];
      //const name = todoObject.name;
      const {name, duedate}=todoObject;
      //const duedate = todoObject.duedate;
      const html = `
      <div>${name}</div>
      <div>${duedate}</div>
      <button class = "delete-todo-button" onclick="

      todolist.splice(${i}, 1)
      rendertodolist()
      
      ">Delete</button>
      `;
      todolistHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML
      = todolistHTML

}
function addtodo(){
  const inputvalue = document.querySelector('.js-name-input');
  const name = inputvalue.value;

  const dateinput = document.querySelector('.js-duedate')

  const duedate=dateinput.value;
  
  todolist.push({
  //  name: todoname,
  //duedate: dueDate
    name, 
    duedate
  });

  

  inputvalue.value=' '
rendertodolist()
}