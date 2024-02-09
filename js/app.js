var btn = document.querySelector(".send-message-btn");
var email = document.querySelector("#email");
var username = document.querySelector("#name");
var phone = document.querySelector("#phone");
var message =  document.querySelector("#message");
var subject = document.querySelector("#subject");


btn.addEventListener("click", e =>{
    if(username.value== ""){
        alert("Enter Name");
    }else {
        if(email.value == ""){
            alert("Enter Eamil");
        }else{
            if(phone.value== ""){
                alert("Enter phone number");
            }else{
                if(subject.value== ""){
                    alert("Enter subject!");
                }else {
                    if(message.value == ""){
                        alert("Enter any Message");
                    }else{
                        alert("Thank you for sending message!");
                    }   
                }
            } 
        }
    }   
})



       