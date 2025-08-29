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
    })
}




// -------------------------
// COINS + CALL BUTTONS
// -------------------------
let coins = 100;
const coinCount = document.getElementById("coin-count");
const callHistory = document.getElementById("call-history");
const callButtons = document.querySelectorAll(".call-btn");

coinCount.textContent = coins;


callHistory.innerHTML = "";

for (const btn of callButtons) {
  btn.addEventListener("click", function () {
    const card = btn.closest(".card");
    const serviceName = card.querySelector(".service-name").textContent;
    const serviceNumber = card.querySelector(".service-number").textContent;

    
    if (coins < 20) {
      alert("Not enough coins! You need at least 20 coins.");
      return;
    }

    
    coins -= 20;
    coinCount.textContent = coins;

    
    alert("Calling " + serviceName + " at " + serviceNumber);

    
    const timeString = new Date().toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: true 
    });

    
    const li = document.createElement("li");
    li.className = "flex justify-between items-center p-2";

    
    const infoDiv = document.createElement("div");
    infoDiv.innerHTML = `
      <p class="font-bold">${serviceName}</p>
      <p class="text-gray-600 text-sm">${serviceNumber}</p>
    `;

  
    const timeEl = document.createElement("span");
    timeEl.textContent = timeString;
    timeEl.className = "text-black text-xs";

    li.appendChild(infoDiv);
    li.appendChild(timeEl);
    callHistory.appendChild(li);
  });
}





// -------------------------
// COPY BUTTONS 
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