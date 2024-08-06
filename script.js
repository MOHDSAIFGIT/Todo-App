const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


// Add the list & task feature
function addTask(){
    //for empty value
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    //after value input
    else{
        let li =document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    //for clear searchbar input value
    inputBox.value = "";
    saveData(); // this is for save the data 
}

listContainer.addEventListener("click",function(e){
    //for mark checked and unchecked item
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    //for remove or delete item by click on cross
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);


// this function is for save the data into browser
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

// for show the data which is saved in browser
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")    
}

showTask();