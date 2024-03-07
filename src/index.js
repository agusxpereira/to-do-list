import { setProjects, getListProjects, createProject, setTask, getProject  } from './projects.js';
import { createTodoElement, setNote, setFinished, getListTodoElements, deleteTask } from './toDo.js';  
import { displayTaks, clearContent, displayFormProject, closeModal, displayListProjects, renderFormTask } from './handleDom.js'; 





const handleProjects = (function(){
    let projects = [];
    function displayProjects(){
        //cada vez que se llama se actuliza a projects
        projects = getListProjects(); 
        displayListProjects(projects);
        
    }

    function handleForm(){
         
        let buttonCreate = document.querySelector(".btn-create-project");
        let buttonCancel = document.querySelector(".btn-cancel");
        
        buttonCreate.addEventListener("click", (e)=>{
            
            e.preventDefault();
           
            const title = document.querySelector("#title").value;
           
            createProject(title);
    
            displayProjects();
            closeModal();
            
           
        });
    
        buttonCancel.addEventListener("click", (e)=>{
            e.preventDefault(); 
            closeModal();
        });
    } 

    function handleFormTask(project){
        //manejamos el formulario de tareas de un proyecto en especifico
        //selecciono todo los elementos, crea una nueva tarea y lo guardo en el arreglo 
        //de tareas del elemento que lo llamo, 
        const newElement = {}; 
        const buttonCreate = document.querySelector("#btn-sent"); 
        const thisElement = project;
        
        buttonCreate.addEventListener("click", (e)=>{
            e.preventDefault(); 
            const title = document.querySelector("#title").value; 
            const description = document.querySelector("#description").value; 
            newElement.title = title;
            newElement.description = description;
        
            
            createTodoElement(newElement, thisElement);
            
            console.log("index/handlefromtask on send");
            console.log(thisElement);

            displayTaks(thisElement);
            

        })
       
    
    }

    function selectProject(){
        let selectedProject = "";
        document.addEventListener("click", (e)=>{

            
            if(e.target.classList.contains("container-project")){
                selectedProject = getProject(e.target.dataset.index);
                renderFormTask();
                handleFormTask(selectedProject);
                displayTaks(selectedProject);
                
            }
        })
        return selectedProject;
    }

    

    return { displayProjects, handleForm, selectProject } 
})();


handleProjects.displayProjects();
const buttonCreateProject = document.querySelector("#btn-create-project"); 

//this start our application, from here we call to al the other functions
buttonCreateProject.addEventListener("click", ()=>{
    console.log("click");
    
    displayFormProject();
    handleProjects.handleForm();
    handleProjects.selectProject();

    
}) 




