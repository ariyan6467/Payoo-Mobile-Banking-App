let inputs = document.querySelectorAll("input");

let acountNum = 1;
let pinNum = 2;
    

let transactionHistory = [];


// ADD MONEY --->Login Button

let loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener("click", function(dets){
    dets.preventDefault();
    
    
    // SELECT A FIXED USER clientInformation(coz,we don't have database to save all user's info )

    
    
    if(inputs[0].value == acountNum && inputs[2].value == pinNum){
        let presentAmount = parseInt(document.querySelector("span").innerText);
        console.log(presentAmount);

        let addingAmount = parseInt(inputs[1].value);
         console.log(addingAmount);

         let crntAmount = presentAmount + addingAmount ;

         document.querySelector("span").innerText = crntAmount ;
     
    }else {
        alert("Your Information in incorrect")
    }

    inputs.forEach(function(input){
        console.log(input.value);
        input.value = " ";
    })


    let history = {
        name : "add money",
        time : new Date().toLocaleTimeString()
    }

    transactionHistory.push(history);
    console.log(transactionHistory);

})



// CASH OUT ---Withdraw Button

let withdrawMoneyBtn = document.querySelector("#withdrawMoneyBtn");
console.log(withdrawMoneyBtn);


withdrawMoneyBtn.addEventListener("click", function(dets) {
    dets.preventDefault();

    let presentamount = document.querySelector("span");
    let inputs = document.querySelectorAll("#cashOutInputs");

    if (acountNum == inputs[0].value && pinNum == inputs[2].value) {  // Added .value to inputs[2]
        if (parseInt(inputs[1].value) >= parseInt(presentamount.innerText)) {
            alert("You entered an unreliable amount \n Try again");
        } else {
            let withdrawamount = inputs[1].value;
            let crntamount = parseInt(presentamount.innerText) - parseInt(withdrawamount);
            presentamount.innerText = crntamount;

            let history = {
                name: "Cash Out",
                time: new Date().toLocaleDateString()
            };

            transactionHistory.push(history);
            console.log(transactionHistory);
        }
    } else {
        alert("Your information is wrong");
    }

    inputs.forEach(function(input){
        input.value = " ";
    })
});


// PAY BILL ---> PAY NOW BUTTON 

let payNowBtn = document.querySelector("#payNowBtn");
console.log(payBillInputs);


payNowBtn.addEventListener("click", function(dets) {
    dets.preventDefault();

    let presentamount = document.querySelector("span");
    let payBillInputs = document.querySelectorAll("#payBillInputs");

    if (acountNum == payBillInputs[0].value && pinNum == payBillInputs[2].value) {  // Added .value to inputs[2]
        if (parseInt(payBillInputs[1].value) >= parseInt(presentamount.innerText)) {
            alert("You entered an unreliable amount \n Try again");
        } else {
            let withdrawamount = payBillInputs[1].value;
            let crntamount = parseInt(presentamount.innerText) - parseInt(withdrawamount);
            presentamount.innerText = crntamount;

            let history = {
                name: "Pay Bill",
                time: new Date().toLocaleDateString()
            };

            transactionHistory.push(history);
            console.log(transactionHistory);
        }
    } else {
        alert("Your information is wrong");
    }

    payBillInputs.forEach(function(input){
        input.value = " ";
    })
});









//TRANSFER MONEY ---> SEND NOW BUTTON


let sendMoneyBtn = document.querySelector("#sendMoneyBtn");
console.log(withdrawMoneyBtn);


sendMoneyBtn.addEventListener("click", function(dets){
    dets.preventDefault();

    let transferMoneyInputs = document.querySelectorAll("#transferMoneyInputs");
    

     if (acountNum == transferMoneyInputs[0].value && pinNum == transferMoneyInputs[2].value ){
        
   let presentamount = document.querySelector("span");

    if(parseInt(transferMoneyInputs[1].value) >= parseInt(presentamount.innerText)){
        alert("you enterned irrelaible amount \n try again ")
    }else{
    //reASSIGN AVAILABLE BALANCE AMOUNT AFTER TRANSFER MONEY  
    let transferAmount = transferMoneyInputs[1].value;
    let crntamount = parseInt(presentamount.innerText) - parseInt(transferAmount);
    presentamount.innerText = crntamount ;

    let history = {
        name : "transfer money",
        time : new Date().toLocaleDateString()
    }
   transactionHistory.push(history);
   console.log(transactionHistory)
    }  

      }else{
        alert('your information is wrong')
     }

     transferMoneyInputs.forEach(function(input){
        input.value = " ";
     })

    
    
})









// TogglING


let addMoneyBtn = document.querySelector("#addMoneyBtn");
let withdrawBtn = document.querySelector("#withdrawMoney");

let addMoneyForm = document.querySelector("#addMoneyForm");
let withdrawMoneyForm = document.querySelector("#withdrawMoneyForm");



addMoneyBtn.addEventListener("click", function(){
    withdrawMoneyForm.style.display = "none" ; 
    addMoneyForm.style.display = "block" ;
    transactionForm.style.display = "none"
    transferMoneyForm.style.display = "none" ;
    getBonusForm.style.display = "none" ;
    payBillForm.style.display = "none" ;
    
})

withdrawBtn.addEventListener("click", function(dets){
    
    withdrawMoneyForm.style.display = "block" ; 
    addMoneyForm.style.display = "none" ;
     transactionForm.style.display = "none"
     transferMoneyForm.style.display = "none" ;
     getBonusForm.style.display = "none" ;
     payBillForm.style.display = "none" ;




    
})




// TRANSACTION 

let transactionForm = document.querySelector("#transaction");
let transactionBtn = document.querySelector("#transactionBtn");

// 1                              2
 transactionBtn.addEventListener("click", function(){
    

    transactionForm.style.display = "block"
    withdrawMoneyForm.style.display = "none" ;
    addMoneyForm.style.display = "none" ;
    transferMoneyForm.style.display = "none" ;
    getBonusForm.style.display = "none" ;
    payBillForm.style.display = "none" ;


//    ASIGN History OF TRANSACTION

 
  
//   3
  let transactionform = document.querySelector("#transaction");
transactionform.innerHTML = " ";

//   4
  for(let history of transactionHistory){
  
    //  5
    let div = document.createElement("div");
    
    // 6
    div.innerHTML = `<div class="card lg:card-side bg-base-100 shadow-sm max-w-[430px] mx-auto h-[120px] rounded-3xl m-2.5 flex flex-row justify-center items-center shadow-2xl bg-[#e4d9d9]">
  <figure class=" m-1.5 h-[70px] w-[70px] rounded-full bg-white">
    <img class="  h-[50px] w-[50px] rounded-4xl"
      src="assets/wallet1.png"
      alt="Album" />
  </figure>
  <div class="card-body">

    
    <h2 class="card-title">${history.name}</h2>
    <p>${history.time}</p>
   
  </div>
  <div class="p-3.5"> <i class="fa-solid fa-ellipsis-vertical"></i></div>
</div>`
   
transactionform.appendChild(div)
     
  }

})




//TRANSFER MONEY

let transferMoneyForm = document.querySelector("#transferMoneyForm");
let transferMoneyBtn = document.querySelector("#transferMoneyBtn");

transferMoneyBtn.addEventListener("click", function(){
    

    transactionForm.style.display = "none" ;
    withdrawMoneyForm.style.display = "none" ;
    addMoneyForm.style.display = "none" ;
    getBonusForm.style.display = "none" ;
    transferMoneyForm.style.display = "block" ;
    payBillForm.style.display = "none" ;
    

})


// GET BONUS 

let getBonusForm = document.querySelector("#getBonusForm");
let getBonusBtn = document.querySelector("#getBonusBtn");

getBonusBtn.addEventListener("click", function(){
    
     getBonusForm.style.display = "block" ;
    transactionForm.style.display = "none" ;
    withdrawMoneyForm.style.display = "none" ;
    addMoneyForm.style.display = "none" ;
    transferMoneyForm.style.display = "none" ;
    payBillForm.style.display = "none" ;
    


})

//PAY BILL 

let payBillForm = document.querySelector("#payBillForm ");
let payBillBtn = document.querySelector("#payBillBtn");

payBillBtn.addEventListener("click", function(){
    
    payBillForm.style.display = "block" ;
    transactionForm.style.display = "none" ;
    withdrawMoneyForm.style.display = "none" ;
    addMoneyForm.style.display = "none" ;
    transferMoneyForm.style.display = "none" ;
    getBonusForm.style.display = "none" ;


})



let logeOutBtn = document.querySelector("#logeOutBtn");

logeOutBtn.addEventListener("click",function(){
    window.location.href = "./index.html"
})


