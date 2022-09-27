const title = document.getElementById('title');
const submit = document.getElementById('submit');
const input = document.getElementById('input');

submit.addEventListener("click", function(){
    
    console.log(input.value);

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
  
    //   alert("Valid email address!");
      title.innerHTML = "dumbs shit";
    //   return true;
    }

    if(input.value === ""){
        
    }
})
