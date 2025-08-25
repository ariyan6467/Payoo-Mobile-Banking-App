let loginBtn = document.querySelector("#loginBtn");
console.log(loginBtn);
let inputs = document.querySelectorAll("input")


loginBtn.addEventListener("click", function(dets){
    dets.preventDefault();
    console.log(inputs[0].value);
    console.log(inputs[1].value);
    
    let fixedMblNum = 01646511087 ;
    let fixedPinNum = 1132005 ;

    if(fixedMblNum == inputs[0].value && fixedPinNum == inputs[1].value){
        window.location.href = "./another.html"
    }else{
        alert(`${inputs[0].value} or ${inputs[1].value} is wrong`)
    }

    
})