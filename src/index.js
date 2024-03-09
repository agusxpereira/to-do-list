import { setProjects, getListProjects, createProject, setTask, getProject, deleteProject  } from './projects.js';
import { createTodoElement, setNote, setFinished, getListTodoElements, deleteTask } from './toDo.js';  
import { displayTaks, clearContent, displayFormProject, closeModal, displayListProjects, renderFormTask } from './handleDom.js'; 
import { storeProject, retrieveProject, clearStorage } from './persist.js';





const handleProjects = (function(){
    let projects = retrieveProject;

    
    function displayProjects(){

        const asideNode = document.getElementsByTagName("aside");
        console.log(asideNode)
        //cada vez que se llama se actuliza a projects
        projects = getListProjects(); 
        storeProject(projects);

        displayListProjects(projects);
 
        selectProject();
        
        const deleteButtons = document.querySelectorAll("#delete"); 
        deleteButtons.forEach(element =>{
            element.addEventListener("click", ()=>{
                const thisId = element.parentElement.dataset.index;
                deleteProject(thisId);
                projects = retrieveProject();
                
                displayProjects()
            })
        })
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

    function handleTasks(project){
   
        document.querySelectorAll("#delete-item").forEach(element =>{
            element.addEventListener("click", (e)=>{
                
                let taskId = e.target.dataset.index;
                console.log(taskId);
                deleteTask(project, taskId);
                displayTaks(project); 
                
            });
    
        }); 

        document.querySelectorAll("#finished-item").forEach(element => {
            element.addEventListener("click", e =>{
                let taskId = e.target.dataset.index;
                console.log("hola: " + taskId);
            })  

        })

    }
    function handleFormTask(project){
        //manejamos el formulario de tareas de un proyecto en especifico
        //selecciono todo los elementos, crea una nueva tarea y lo guardo en el arreglo 
        //de tareas del elemento que lo llamo, 

        

        const newElement = {}; 
        const buttonCreate = document.querySelector("#btn-sent"); 
        const buttonCancel = document.querySelector(".btn-cancel"); 
        const thisElement = project;



        buttonCancel.addEventListener("click", (e)=>{
            e.preventDefault();
            document.querySelector("#create-task").reset();
            closeModal();
        })

        buttonCreate.addEventListener("click", (e)=>{
            e.preventDefault(); 
            const title = document.querySelector("#title").value; 
            const description = document.querySelector("#description").value; 
            newElement.title = title;
            newElement.description = description;
        
            
            createTodoElement(newElement, thisElement);
            
            console.log("index/handlefromtask on send");
            console.log(thisElement);
            closeModal();
            displayTaks(thisElement);
            handleTasks(project)

        })
       
    
    }

    function selectProject(){
        let selectedProject = "";
        document.addEventListener("click", (e)=>{
            if(e.target.classList.contains("container-project")){ 
                document.querySelectorAll(".container-project").forEach(element => element.classList.remove("selected"));
                e.target.classList.add("selected");
                

                selectedProject = getProject(e.target.dataset.index);
                console.log(selectedProject)
                renderFormTask();
                handleFormTask(selectedProject);
                displayTaks(selectedProject);
                handleTasks(selectedProject);
            
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




