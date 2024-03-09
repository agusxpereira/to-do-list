

const contet = document.querySelector("#content");
const containerProjects = document.querySelector("#list-project");
const body = document.body;



function renderFormTask(){
    const root = document.querySelector("#root"); 

    const form = document.createElement("form");
    form.setAttribute('id', 'create-task'); 

    const h2 = document.createElement("h2");
    h2.textContent = "Crear tarea:"; 

    form.appendChild(h2);

    form.innerHTML = `
<fieldset class="group-element-input">
    <legend for="title">Title *</legend>
    <input type="text" name="title" id="title" required>
</fieldset>
    
<fieldset class="group-element-input">
    <legend for="description">Description *</legend>
    <input type="text" name="description" id="description" required>
</fieldset>
<fieldset class="group-element-input">
    <legend for="dueDate">dueDate</legend>
    <input type="date" name="dueDate" id="due-date">
</fieldset>
<fieldset class="group-element-input">
    <legend for="priority">priority</legend>
    <input type="number" name="priority" id="priority">
</fieldset>
<fieldset class="group-element-input">
    <legend for="finished">finished</legend>
    <input type="checkbox" name="finished" id="finished">
</fieldset>
<fieldset class="group-element-input">
    <legend for="notes">notes</legend>
    <input type="text" name="notes" id="notes">
</fieldset>
<fieldset class="group-element-input">
    <legend for="kind">kind</legend>
    <input type="text" name="kind" id="kind">
</fieldset>
<button id="btn-sent">send</button>"
`;
if(!root.contains(form)){
    root.innerHTML = "";
    root.appendChild(form)
   
    
}
}



function displayTaks(project){
   
    const thisProject = project;
    let listToDoElements = thisProject.tasks;
    
   
    
    const toDoContainer = document.createElement("div"); 
    toDoContainer.classList.add("to-do-container")

    contet.innerHTML = "";
    listToDoElements.forEach(toDoElement => {
        
        let divToDoElement = document.createElement("div"); 
        divToDoElement.classList.add("to-do-item"); 
        divToDoElement.dataset.index = toDoElement.id;


        let divGroupInfo = document.createElement("div");
        divGroupInfo.classList.add("group-data")
        const divGroupButtons = document.createElement("div"); 
        divGroupButtons.classList.add("group-button")
        

        let title = document.createElement("h3"); 
        title.textContent = toDoElement.title; 

        let description = document.createElement("p"); 
        description.innerHTML = toDoElement.description; 

        let buttonDelete = document.createElement("button"); 
        buttonDelete.setAttribute('id', 'delete-item'); 
        buttonDelete.textContent = "X"; 
        buttonDelete.dataset.index = toDoElement.id;

        let buttonFinished = document.createElement("button");
        buttonFinished.setAttribute('id', 'finished-item'); 
        buttonFinished.textContent = "?";
        
        let buttonEdit = document.createElement("button");
        buttonEdit.setAttribute('id', 'edit-item'); 
        buttonEdit.textContent = "edit";

        divGroupInfo.appendChild(title);
        divGroupInfo.appendChild(description);

        divGroupButtons.appendChild(buttonDelete);
        divGroupButtons.appendChild(buttonFinished); 
        divGroupButtons.appendChild(buttonEdit); 


        divToDoElement.appendChild(divGroupInfo);
        divToDoElement.appendChild(divGroupButtons);

        toDoContainer.appendChild(divToDoElement); 
        

    });
    
    contet.appendChild(toDoContainer);
    handleTasks(thisProject);
   
} 

function clearContent(params) {
    content.innerHTML = "";
}




//projects:



function displayListProjects(projects){
    containerProjects.innerHTML = "";
    
    console.log(projects)
    projects.forEach((element)=>{
        const project = document.createElement("div"); 
        project.classList.add("container-project"); 
        project.dataset.index = element.id;

        const title = document.createElement("h3"); 
        title.textContent = element.title; 
        
        const button = document.createElement("button"); 
        button.setAttribute('id', 'delete');
        button.textContent = "delete";

        project.appendChild(title);
        project.appendChild(button);
        containerProjects.appendChild(project);
    }); 
   
}   
function displayFormProject(){

    const divModal = document.createElement("div"); 
    divModal.classList.add("modal"); 
    divModal.classList.add("see")
    
    const form = document.createElement("form"); 
    form.setAttribute('id', 'form-create-project'); 
    
    const title = document.createElement("h4")
    title.textContent = "Create a Project!";

    const label = document.createElement("label"); 
    label.setAttribute('for', 'title'); 
    label.textContent = "Name:";

    const inputName = document.createElement("input"); 
    inputName.setAttribute('name', 'title');
    inputName.setAttribute('id', 'title');
    
    const divGroupButton = document.createElement("div");
    divGroupButton.classList.add("group-button"); 



    const button = document.createElement("button"); 
    button.classList.add("btn-create-project"); 
    button.textContent = "create"; 
    

    const buttonCancel = document.createElement("button"); 
    buttonCancel.classList.add("btn-cancel"); 
    buttonCancel.textContent = "cancel"; 
    
    
    form.appendChild(label)
    form.appendChild(inputName)
    divGroupButton.appendChild(button)
    divGroupButton.appendChild(buttonCancel)
    form.appendChild(divGroupButton)
    
    divModal.appendChild(title);
    divModal.appendChild(form);
    body.appendChild(divModal);



} 

function closeModal(){
    const modal = document.querySelector(".modal");
    modal.classList.remove("see");
    body.removeChild(modal); 
}






export { displayTaks, clearContent, displayFormProject, closeModal, displayListProjects, renderFormTask }