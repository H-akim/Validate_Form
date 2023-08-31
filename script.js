var name_error = document.getElementById("name_error");
var phone_error = document.getElementById("phone_error");
var email_error = document.getElementById("email_error");
var message_error = document.getElementById("message_error");
var submit_error = document.getElementById("submit_error");
 
function validateName(){
   var name = document.getElementById("contact_name").value;
    if(name.length == 0) {
        name_error.innerHTML = "Name Is Required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        name_error.innerHTML = "Write Full Name";
        return false;
    }
    name_error.innerHTML = `<i class="fa-solid fa-circle-check fa-beat" style="color: #2e8b57;"></i>`;
    return true;
}

function validatePhone() {
    var phone = document.getElementById("contact_phone").value;
    if(phone.length == 0){
        phone_error.innerHTML = "phone Number is required";
        return false;
    }
    if(phone.length !== 10){
        phone_error.innerHTML = "Phone Number should be 10 digits";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phone_error.innerHTML = "Only Digits Please";
        return false;
    }
    phone_error.innerHTML = `<i class="fa-solid fa-circle-check fa-beat" style="color: #2e8b57;"></i>`;
    return true;
}


function validateEmail() {
    var email = document.getElementById("contact_email").value;
    if(email.length == 0){
        email_error.innerHTML = "Email is required";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        email_error.innerHTML = "Email Invalid";
        return false;
    }
    email_error.innerHTML = `<i class="fa-solid fa-circle-check fa-beat" style="color: #2e8b57;"></i>`;
    return true;
}


function validateMessage(){
    var message = document.getElementById("contact_message").value;
    var required = 30;
    var left = required - message.length;
    if(left > 0){
        message_error.innerHTML = left + `more characters required`;
        return false;
    }
    message_error.innerHTML = `<i class="fa-solid fa-circle-check fa-beat" style="color: #2e8b57;"></i>`;
    return true;
}


function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submit_error.style.display = 'block';
        submit_error.innerHTML = "Please Fix The Error to submit";
        setTimeout(function() {submit_error.style.display = 'none';},3000)
        return false;
    }
}
