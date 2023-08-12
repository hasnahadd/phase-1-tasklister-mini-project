document.addEventListener("DOMContentLoaded", () => {
// your code here
const taskForm = document.querySelector('#create-task-form');
taskForm.addEventListener('submit', function (e) {
e.preventDefault();
const taskDesInput = e.target.querySelector('#new').value;
const taskDate = e.target.querySelector('#date').value;
const taskSelect = e.target.querySelector('#taskSelect').value;
console.log(taskDate );
console.log(taskSelect);
addTask(taskDesInput,taskDate,taskSelect);
 taskForm.reset();
})

function addTask(string ,date ,select ){
let li =document.createElement('li');
let deleteBtn =document.createElement('button');
let editBtn = document.createElement('button');
editBtn.textContent='edit';
deleteBtn.textContent= 'x';
deleteBtn.style.marginLeft= '10px';
deleteBtn.classList.add('delete-button')
editBtn.classList.add('edit-button');
li.textContent=`Task: ${string}, Date: ${date},  ${select}`;
//console.log(p);
document.querySelector('#tasks').appendChild(li);
li.appendChild(deleteBtn);
li.appendChild(editBtn);
editBtn.addEventListener('click', function() {
  editTask(li); 
});

deleteBtn.addEventListener('click', deleteTask);
editBtn.addEventListener('click', function() {
  editTask(li); 
});

}
function deleteTask(e){
e.target.parentNode.remove();
}
function editTask(newTask){
 taskEdit= newTask.textContent;
const inputField = document.createElement('input');
  inputField.value =  taskEdit;
  const saveBtn = document.createElement('button');
  saveBtn.textContent = 'Save';
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-button');
  newTask.replaceWith(inputField, saveBtn ,deleteBtn);
  saveBtn.addEventListener('click', function() {
    newTask.textContent = inputField.value;
    inputField.replaceWith( newTask);
    saveBtn.remove();
    deleteBtn.remove();

});
deleteBtn.addEventListener('click', deleteTask);
}






});
