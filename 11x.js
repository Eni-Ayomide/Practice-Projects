let todolist = JSON.parse(localStorage.getItem('list')) || [];

rendertodolist()

function rendertodolist(){
    let todolistHTML = '';

    for(let i = 0; i < todolist.length; i++){
      let newl = JSON.parse(localStorage.getItem('list'));
      console.log(newl);
      const todoObject = newl[i];
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
  console.log(name)

  const dateinput = document.querySelector('.js-duedate')

  const duedate=dateinput.value;
  
  todolist.push({
  //  name: todoname,
  //duedate: dueDate
    name, 
    duedate
  });
  localStorage.setItem('list', JSON.stringify(todolist));

  

  inputvalue.value=' '
rendertodolist()
}