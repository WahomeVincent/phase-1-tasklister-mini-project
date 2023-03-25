// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault()
//     console.log(e.target.new-task-description)
    
//   }) 

// });

document.addEventListener("DOMContentLoaded", () => {
  
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault(); //Prevents the form from submitting.
    handleToDo(e.target.elements['new-task-description'].value);
    form.reset() //Clears the original input to give space for a new one.
  });
});

function handleToDo(todo){
  let p = document.createElement('p') //Creates a new 'p' element in the DOM.
  p.textContent = ` ${todo} `         //Assigns it the value to be entered by the user.
  document.querySelector("#list").appendChild(p,)//Places the new 'p' element as a child of the 'list' div.
  let btn = document.createElement('button') //Creates a new 'button' element in the DOM.
  btn.addEventListener('click', handleDelete)
  btn.textContent = ' X'
  p.appendChild(btn)          //Attaches the created button as the child of the created 'p' element.
}

function handleDelete(e){
  e.target.parentNode.remove()  //Removes the parentNode and all its children.
}