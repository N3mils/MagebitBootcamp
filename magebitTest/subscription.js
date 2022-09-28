// const errorText = document.getElementById("errorMSGS");

const message = document.getElementById("message");
const title = document.getElementById("title");
const badge = document.getElementById("badge");
const email = document.getElementById("email");

function loadText(){
    let titleText = "Subscribe to newsletter";
    let messageText = "Subscribe to our newsletter and get 10% discount on pineapple glasses.";
    message.innerHTML = messageText;
    title.innerHTML = titleText;
    badge.style.display = "none";
}

function loadSubscribe(){
    title.innerHTML = "Thanks for subscribing!";
    message.innerHTML = "You have successfully subscribed to our email listing. Check your email for the discount code.";
    badge.style.display = "initial";
    email.value = "";
}

function ValidateEmail(inputText){

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat))
    {
        // alert("Valid email address!");
        // document.subscribe.email.focus();
        
        inputText.preventDefault();
        // return true;
        return false;
    }
    // else
    // {
    //     // alert("You have entered an invalid email address!");
    //     // errorText.innerHTML("You have entered an invalid email address!");

    //     document.subscribe.email.focus();
    //     return false;
    // }
    
}