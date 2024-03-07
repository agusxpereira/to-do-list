let listTodoElements = []; 

let lastId;

let handleId = (()=>{
    let id = 0;
    let lastIdPr = 0; 


    let getId = function(){
        return id;
    } 
    const setId = function(){
        id++;
    }
    
    function resetId(){
        id = 0;
    } 

    function handleIdProject(){
        if(idPr != lastId){
            resetId();
        }    
    }

    return {getId, setId, resetId}
})();

let thisId = handleId.getId();
console.log(thisId);

const setNote = function(listElement, note){
    listElement.note = note;
}

const setFinished = function(listElement, check){
    listElement.check = check;
}


function getListElement(project, id){

    let currentElemet; 
    project.tasks.forEach( function(element){    
        if(element.id == id){
            currentElemet =  element;
        };
    });
    return currentElemet;

}

function getListTodoElements(){
    return listTodoElements;
} 


function createTodoElement ({title, description, dueDate="", priority=0, notes="", kind="general"}, project){
    
    
    console.log(project.id) 
    let id = handleId.getId();
    title = title; 
    description = description; 
    dueDate = dueDate;
    priority = priority; 
    finished = false; 
    notes = notes;
    kind = kind;

    
    
    project.tasks.push({id, title, description, dueDate, priority, finished, notes, kind});
    
    handleId.setId();
} 



function deleteTask(project, id){

   

    let deleteElement = getListElement(project, id);
    
    if(project.tasks.length > 1){
        
        project.tasks.splice(1, id);    
        
    }else{
        project.tasks = [];
    }

    
    

}




export {createTodoElement, setNote, setFinished, getListTodoElements, deleteTask } 

