let add=document.querySelector(".add");
let show=document.querySelector(".show");
let text=document.querySelector(".text");
let main=document.querySelector(".main");
let taskcon=document.createElement("div");
taskcon.classList.add("taskcon");
main.appendChild(taskcon);
taskcon.style.display="none";
add.addEventListener("click",()=>{
    let task=text.value;
    if(task==="") return;
    let taskitem=document.createElement("div");
    taskitem.classList.add("taskitem");
    let tasktext=document.createElement("div");
    tasktext.innerText=task;
    tasktext.classList.add("tasktext");
    let deletebtn=document.createElement("button");
    deletebtn.innerText="Delete";
    deletebtn.classList.add("deletebtn");
    let main2=document.createElement("div");
    main2.classList.add("main2");
    main2.appendChild(tasktext);
    main2.appendChild(deletebtn);
    taskitem.appendChild(main2);
    taskcon.appendChild(taskitem);
    deletebtn.addEventListener("click",()=>{
        taskitem.remove();
    })
    text.value="";
})
show.addEventListener("click",()=>{
    if(taskcon.style.display==="none") {
        taskcon.style.display="flex";
        show.innerText="Hide Task";
    }
    else {
        taskcon.style.display="none";
        show.innerText="Show Task";
    }
})
