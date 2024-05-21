let input = document.getElementById("input-field");
let addBtn = document.querySelector(".add-btn");
let todo_list_items = document.querySelector(".todo-item-list");
let deleteBtn = document.querySelector(".delete")
// add data in list 
let localData = [];
let addData = (e) =>{
    createElement(input.value);
    storeDataLocal();
    input.value = ""
    


}
// end 
// store data in local storage
let storeDataLocal = () => {
    localStorage.setItem("TodoItem", JSON.stringify(localData))
} 
// end 

// create Element 
let createElement = (value) => {
    let div = document.createElement("div");
   if(!localData.includes(value)) {div.classList.add("todo-item");
    div.innerHTML = `<li>${value}</li>
    <button class="delete">Delete</button>`;
    localData.push(value)
    todo_list_items.append(div);
}
}
// end 
// get data from local storage
let getData = () => {
    
    let data =  JSON.parse(localStorage.getItem("TodoItem"));
    data.forEach(
        (curr) =>{
            createElement(curr)
        }
    )
} 
getData();
// end 
// remove data 
let removeData =(e) => {
   let targetElement = e.target;
   let previousElement = targetElement.previousElementSibling;
   let parent = previousElement.parentElement;
   if(localData.includes(previousElement.innerHTML)){
   localData =  localData.filter(
        (curr) => {
          
             return curr !== previousElement.innerHTML;
             
        }
    )
    updateData(localData)
    
   }
   
   parent.remove();
 


}
// end
// update data on localStorage 
let updateData =(element) => {
    localStorage.setItem("TodoItem", JSON.stringify(localData))
}
// end 
todo_list_items.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete")){
        removeData(e);
    }
})
addBtn.addEventListener("click" , (e) => {
    e.preventDefault();
    addData(e);
})