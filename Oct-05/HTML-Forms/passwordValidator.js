
var password=document.getElementById('password');
var confirmPassword=document.getElementById('confirmpassword');
function val() {
    if(password.value!=confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords Don't Match");
    }
    else {
        confirmPassword.setCustomValidity('');
    }
}
password.onchange=val;
confirmPassword.onkeyup=val;