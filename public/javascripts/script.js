var fileopenstate = 0
 
document.querySelector("#fileicon").addEventListener("click",function(){
    if(fileopenstate === 0){
    document.querySelector(".fileform").style.display = "initial"
    fileopenstate = 1
    }else{
        document.querySelector(".fileform").style.display = "none"
    fileopenstate = 0
    }
})
document.querySelector("#folicon").addEventListener("click",function(){
    if(fileopenstate === 0){
    document.querySelector(".folform").style.display = "initial"
    fileopenstate = 1
    }else{
        document.querySelector(".folform").style.display = "none"
    fileopenstate = 0
    }
})


document.querySelector("#files").addEventListener("click",function(dets){
      if(dets.target.id === "edit"){
        document.querySelector("#overlay").style.display = "initial"
        document.querySelector("#editfile").value = dets.target.dataset.val
        document.querySelector("#changeform").setAttribute("action",`/editfile/${dets.target.dataset.val}`)}
})

