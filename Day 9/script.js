async function fetchImageAPI(url, callback){
    // console.log('request has ben sent. await response')

    const response = await fetch(url);//Gets response from url input
    const response_json = await response.json();//To see content format
    // console.log(response_json);
    if (response.status == 200){//If request is succesfull returns fetched data
        callback(response_json);//returns fetched data
    }
}

// loadItemsOnStart();

document.querySelector('.fetch_btn').onclick = function(){//selects button and ands onclick event
    console.log('Fetch button click');
    fetchImageAPI('https://dog.ceo/api/breeds/image/random', function(response){
        // console.log('Response from api', response);
        addImage(response.message);//Inserts in function only message(url) 
    })
}

let outputElement = document.querySelector(".output");//selects html container for output
function addImage(source){
    const imageWrapper = document.createElement("div");
    imageWrapper.className = "fetchedImage";

    const imageElement = document.createElement("img");//creates img tag
    imageElement.src = source;//defines img src tag url
    imageElement.className = "apiImage";//ads class from img tag
    imageWrapper.append(imageElement);
    outputElement.append(imageWrapper);//Adds img element to output container
}




window.addEventListener('scroll',()=>{
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        for (let i = 0; i < 4; i++){
            fetchImageAPI('https://dog.ceo/api/breeds/image/random', function(response){
                addImage(response.message);//Inserts in function only message(url) 
            })
        }
        
    }
})

function loadItemsOnStart(){
    for (let i = 0; i < 4; i++){
        fetchImageAPI('https://dog.ceo/api/breeds/image/random', function(response){
            addImage(response.message);//Inserts in function only message(url) 
        })
    }
}


