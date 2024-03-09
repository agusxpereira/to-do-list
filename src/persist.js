/*

https://developer.mozilla.org/en-US/docs/Web/API/Storage

localStorage provides a mechanism to store key/values pairs in the browser.
    Storage objetos are similar to objects, but they stay intacts through page loads .

    key and values are always strings. We can access these values like an objecto, 
    or with the Storage.getItem() and Storage.setItem(). 

    These three lines all set the same colorSetting entry: 

    localStorage.colorSetting = "#a4509b"; 
    localStorage["colorSetting"] = "#a4509b"; 
    localStorage.setItem("colorSetting", "#a4509b)"; 

    https://2ality.com/2012/01/objects-as-maps.html 

    It's recommended to use the Web Storage API (setItem, getItem, removeItem, key, length) 


    The two mechanism within web storage are as follow: 

    sessionStorage mantain a separate storage area for each given origin that's available for the duration 
    of the page session (as long as the browser is open, incluiding page reloads and storage) 

    localStorage does the same thing, but persist even when the browser is closed and reopened. 

    Estos mecanismos estan disponibles gracias mediante las propeidades Window.sessionStorage y Window.localStorage. 
    Invocando a una de estas vamos a crear una instancia del objeto Storage, por el cual cada item puede ser 
    seteado, recuperado o removido. Un objeto 'Storage' diferente es usado para local y session para cada origin. 
    Funcionan y son conrtolados separadamente. 

    Entonces llamar primero a localStorage y después sessionStorage, vamos a tener dos objetos diferentes, 
    pero que son manipulados de la misma manera. 

    
    
    
    Usando localStorage en una página de ejemplo -
    
    Primero debemos saber si nuestra página ya fue accedida(populated): 

    if(!localStorage.getItem("bgColor")){
        populateStorage();
    }else{
        setStyles();
    }

    El método Storage.getItem() es usado para obtener un data item del storage; en este caso, 
    estamos testeando si el item bgColor existe; si no ejecutamos populateStorage() para añadir 
    los valores personalizados existentes al storage. Si ya hay valrores, ejecutamos setStyles() 
    para actualizar los estilos de la página con los valores guardados. 

    Note: You could also use Storage.length to test whether the storage object is empty or not.

    Getting values from storage: 
    Los valores pueden ser recuperados del storage usando Storage.getItem(). Esto toma la key del 
    data item como argumento, y retorna el data value. 

    ejemplo: 

    function setStyles(){
        const currentColor = localStorage.getItem("bgcolor");
        const currentFont = localStorage.getItem("font"); 
        const currentImage = localStorage.getItem("image"); 

        document.getElementById("bgColor").value = currentColor; 
        document.getElementById("font").value = currentFont; 
        document.getElementById("image").value = currentImage; 

        
        htmlElem.style.backgroundColor = `#${currentColor}`;
        pElem.style.fontFamily = currentFont;
        imgElem.setAttribute("src", currentImage); 
    } 

    Acá las primeras tres lineas agarra los valores del local storage. Luego seteamos los valroes en los elementos 
    del form. Por último actualizamos el estilo e imagenes en la página, así nuestras opciones personalizadas 
    se muestras de nuevo cuando se recargue. 

    Setting values in Storge: 
    Storage.setItem() es usada tanto para crear nuevos data items, y (si el elemento ya existe) actualiza el valor 
    existente. Esto toma dos argumentos, la key del data item a crear/modificar, y el valor a guardar en el. 

    function populateStorage(){
        localStorage.setItem("bgColor", 
            document.getElementById("bgColor").value); 
        
        localStorage.setItem("font", 
            document.getElementById("font").value); 

        localStorage.setItem("image", 
            document.getElementById("image").value);

        setStyles();
    }
    
    La función populateStorage() setea tres items en el local storage. Luego retorna la función setStyles() para 
    actualizar el estilo de las páginas, etc. 

    Además se incluye un handler 'onchange' para cada elemento del formulario, así los estilos son actualizados 
    cada vez que un valor es cambiado: 

    bgcolorForm.onchange = populateStorage; 
    fontForm.onchange = populateStorage; 
    imageForm.onchange = populateStorage; 


    Storage sólo soporta almacenar y recuperar strings. Si quremos almacenar otro tipo de datos, debemos convertirlos 
    a string. Para objeos planos y arreglos podemos usar JSON.stringify() 


    const person = { name:"Alex" }; 
    localStorage.setItem("user", person); 
    console.log(localStorage.getItem("user")); // "[object Object]"
    //not useful 

    localStorage.setItem("user", JSON.stringify(person)); 
    console.log(JSON.parse(localStorage.getItem("user"))); //{ name: "Alex" } 

    No hay una forma generica para almacenar tipos de datos arbitrariamente. Además, el dato recuperado es una copia 
    en profundidad del objeto para no afectar al original. 

*/



/* let arr = [0, 1, 2]; 

localStorage.setItem("randomArr", JSON.stringify(arr)); 

console.log(JSON.parse(localStorage.getItem("randomArr")));


 */


function storeProject(data){
    console.log(data);
    localStorage.setItem("project", JSON.stringify(data));
}

function retrieveProject(){
    return JSON.parse(localStorage.getItem("project"));
} 

function storeIdProject(id){
    localStorage.setItem("id", JSON.stringify(id));
} 

function retrieveIdProject(){
    return JSON.parse(localStorage.getItem("id"));
}


function clearStorage(){
    localStorage.clear()
}


export { storeProject, retrieveProject, retrieveIdProject,storeIdProject,  clearStorage }