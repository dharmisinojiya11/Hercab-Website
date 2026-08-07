const form = document.getElementById("registerForm");

form.addEventListener("submit", function(e){

e.preventDefault();

let password =
document.getElementById("password").value;

let confirm =
document.getElementById("confirmPassword").value;

if(password !== confirm){

alert("Passwords do not match.");

return;

}

alert("Registration Successful!");

window.location.href="otp.html";

});
let aadhaar = document.getElementById("aadhaar").value;

if(!/^[0-9]{12}$/.test(aadhaar))
{
    alert("Please enter a valid 12-digit Aadhaar number.");
    return;
}
