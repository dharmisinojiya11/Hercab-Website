// OTP Boxes
const otpInputs = document.querySelectorAll(".otp");

otpInputs.forEach((input,index)=>{

input.addEventListener("keyup",(e)=>{

if(e.target.value && index<5){

otpInputs[index+1].focus();

}

});

});

// Countdown Timer

let time = 30;

const countdown = document.getElementById("countdown");

const timer = setInterval(()=>{

time--;

countdown.innerHTML = time;

if(time<=0){

clearInterval(timer);

countdown.innerHTML="0";

}

},1000);

// Verify OTP

document.getElementById("verifyBtn").addEventListener("click",()=>{

let otp="";

otpInputs.forEach(input=>{

otp+=input.value;

});

if(otp.length!=6){

alert("Please enter a valid 6-digit OTP.");

return;

}

alert("OTP Verified Successfully!");

window.location.href="dashboard.html";

});
