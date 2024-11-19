const g=document.getElementById("grand")
g.addEventListener("click",(e)=>{
    console.log("grand parent clicked")
    g.style.backgroundColor="red"
},true)
const p=document.getElementById("parent")
p.addEventListener("click",(e)=>{
    // e.stopPropagation();
    setTimeout(()=>{
        console.log("parent clicked")
    p.style.backgroundColor="yellow"

    },3000)
    
},false)
const c=document.getElementById("child")
c.addEventListener("click",(e)=>{
    console.log("child clicked")
    c.style.backgroundColor="blue"
},true)



