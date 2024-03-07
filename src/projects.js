let projects = []; 

let handleId = (()=>{

    let id = 0; 

    function setId(){
        id++;
    } 

    function getId(){
        return id;
    }

    return { setId, getId }
})();

function setProjects(retriveProjects){
    projects = retriveProjects;
}

function getListProjects(){
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

export { setProjects, getListProjects, createProject, setTask, getProject }