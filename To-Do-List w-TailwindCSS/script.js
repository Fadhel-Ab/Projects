function addtask() {
    const input = document.getElementById("taskinput");
    const ul = document.getElementById("tasklist");
    const taskinp = input.value.trim();
    if (taskinp ==""){
        alert("please enter a task")
    }
    else
    {
        const li = document.createElement("li");
        li.className="py-[5px] px-[5px]"
        const span1 = document.createElement("span");
        span1.textContent="📌"
        const span = document.createElement("span");
        span.textContent=taskinp;
        const removebutton = document.createElement("button");
        removebutton.textContent="remove";
        removebutton.onclick= () =>  removetask(li);
        removebutton.className="bg-red-600 rounded-md px-[4px] rounded-xl  hover:bg-red-400 text-white font-[500] text-[15px] float-right mx-[1px]";
        const editbutton = document.createElement("button");
        editbutton.textContent="Edit";
        editbutton.onclick= () =>  edit(span);
        editbutton.className="bg-gray-400 rounded-md px-[4px] rounded-xl  hover:bg-gray-600 text-white font-[500] text-[15px] float-right mx-[1px]";
        li.appendChild(span1);
        li.appendChild(span);
        li.appendChild(removebutton);
        li.appendChild(editbutton);
        ul.appendChild(li); 
        input.value="";
    }
    
}
function removetask(li){
    document.getElementById("tasklist").removeChild(li);
}

function edit(span){
    const newtask= prompt("Enter a new task" , span.textContent);
    
    if( newtask != null && newtask.trim()!="") {
        span.textContent=newtask.trim();
    }
    
}