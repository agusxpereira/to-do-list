import { retrieveProject, storeProject, retrieveIdProject, storeIdProject } from './persist.js';

let projects = retrieveProject(); 

let handleId = (()=>{

    let id = retrieveIdProject(); 

    function setId(){
        id++;
        storeIdProject(id)
    } 

    function getId(){
        if(id == null){
            return 0;
        }
        return id;
    }

    return { setId, getId }
})();

function setProjects(retrieveListProjects){
    projects = retrieveListProjects;
}

function getListProjects(){
    if(projects == null){
        return [];
    }
    return projects;
} 

function createProject(title){
    const newProject = {}; 
    newProject.id = handleId.getId();
    newProject.title = title; 
    newProject.tasks = []; 

    projects.push(newProject);
    handleId.setId(); 

    
} 

function getProject(id){
   let project; 
   projects.forEach((element)=>{
   if(element.id == id){
       project = element;
   }
   });
   console.log("projects.js/getProject")
  
   return project;
}

function setTask(project, task){
    project.tasks.push(task);
} 

function deleteProject(id) {
    const elementToDelete = getProject(id);
    console.log(elementToDelete) 
    let elementsFiltered = projects.filter(element => element != elementToDelete ); 
    projects = elementsFiltered;
    storeProject(elementsFiltered);
    console.log(elementsFiltered)
    
    

}

export { setProjects, getListProjects, createProject, setTask, getProject, deleteProject }