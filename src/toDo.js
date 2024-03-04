const listTodoElements = []; 

const handleId = function(){
    const id = 0;

    let getId = function(){
        return id;
    } 
    const setId = function(){
        id++;
    }
    

    return {getId, setId}
}

let thisId = handleId.getId;


const setNote = function(listElement, note){
    listElement.note = note;
}

const setCheck = function(listElement, check){
    listElement.check = check;
}


function getListElement(id){

    let element = listTodoElements.map( function(element){    
        if(element.id == id){
            return element;
        };
    }) 
    return element;

}

function getListTodoElements(){
    return listTodoElements;
} 


function createTodoElement (title, description, dueDate="", priority=0, finished=false, notes="", kind="general"){
    const id = thisId;
    title = title; 
    description = description; 
    dueDate = dueDate;
    priority = priority; 
    finished = finished; 
    notes = notes;
    kind = kind;

    listTodoElements.push({id, title, description, dueDate, priority, finished, notes, kind});
    
} 

/* Object.assign(createTodoElement, setNote); */




export {createTodoElement, setNote, setCheck, getListTodoElements, handleId}