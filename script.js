// -------------------------
// HEART BUTTONS 
//--------------------------
const heartCount = document.getElementById("heart-count");

const heartBtns = document.querySelectorAll(".heart-btn");

let count = 0;

for(const btn of heartBtns){
    btn.addEventListener("click",function(e){
        count++;
        heartCount.textContent = count;
        console.log(count);
    })
}



// -------------------------
// COPY BUTTONS (count + copy)
// -------------------------
let copyCount = 2;

const copyCountEl =document.getElementById("copy-count");
const copyButtons =document.querySelectorAll(".btn-outline");

for(const btn of copyButtons){
  btn.addEventListener("click",function(){
    const card =btn.closest(".card");
    const serviceNumber =card.querySelector(".service-number").textContent;

     navigator.clipboard.writeText(serviceNumber).then(() =>{
        copyCount++;

        if(copyCountEl) copyCountEl.textContent = String(copyCount);
        alert("copied: "+ serviceNumber);
     }).catch(() => {
      alert("copy failed. ");
     })
    
  })
}


//--------------------------------
//CALL HISTORY
//--------------------------------
const clearHistoryBtn = document.getElementById("clear-history");

if(clearHistoryBtn){
  clearHistoryBtn.addEventListener("click",function(){
    callHistory.innerHTML="";
  });
}