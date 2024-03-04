const listTodoElements = []; 

function createTodoElement (title, description, dueDate, priority, check, notes="", kind="general"){
    this.title = title; 
    this.description = description; 
    this.dueDate = dueDate; 
    this.priority = priority; 
    this.check = check; 
    this.notes = notes;
    this.kind = kind;



    setNote = function(note){
        this.notes = note;
    }

    setCheck = function(check){
        this.check = check;
    }

    return {title, description, dueDate, priority, check, notes, kind, setNote, setCheck}
} 

/* Object.assign(createTodoElement, setNote); */

function getListTodoElements(){
    return listTodoElements;
}