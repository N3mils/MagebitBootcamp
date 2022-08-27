
async function fetchContentFromAPI(url, callback){
    // console.log('request has ben sent. await response')

    const response = await fetch(url);//Gets response from url input
    const response_json = await response.json();//To see content format
    // console.log(response_json);
    if (response.status == 200){//If request is succesfull returns fetched data
        callback(response_json);//returns fetched data
    }
}




async function addContentCard(){
    let outputElement = document.querySelector(".output");//selects html container for output

    const cardWrapper = document.createElement("div");
    cardWrapper.className = "fetchedCard";
    
    await fetchContentFromAPI('https://randomuser.me/api/', function(response){
        let authorName = response.results[0].name.first;
        let authorSurname = response.results[0].name.last;
        let authorFullName = authorName + " " + authorSurname;
        // console.log(authorFullName);
        addAuthor(authorFullName);
        // console.log(JSON.stringify(response.results[0].name));
    })//Author
    await fetchContentFromAPI('https://dog.ceo/api/breeds/image/random', function(response){addImage(response.message)})//Image
    // await fetchContentFromAPI('https://api.thecatapi.com/v1/images/search', function(response){addImage(response[0].url)})//Cat api 
    await fetchContentFromAPI('https://meowfacts.herokuapp.com/', function(response){addText(response.data)})//Text

    //Author part
    function addAuthor(source){
        const authorElement = document.createElement("h1")
        authorElement.textContent = source;
        cardWrapper.append(authorElement);
    }


    //Image part
    function addImage(source){
        const imageWrapper = document.createElement("div");
        imageWrapper.className = "fetchedImage";

        const imageElement = document.createElement("img");//creates img tag
        imageElement.src = source;//defines img src tag url
        imageElement.className = "apiImage";//ads class from img tag
        imageWrapper.append(imageElement);
        cardWrapper.append(imageWrapper);
    }

    //Text part
    function addText(source){
        const textElement = document.createElement("p");
        textElement.textContent = source;
        cardWrapper.append(textElement);
    }


    outputElement.append(cardWrapper);
}

document.querySelector('.fetch_btn').onclick = function(){addContentCard()}

loadItemsOnStart();

window.addEventListener('scroll',()=>{
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        for (let i = 0; i < 4; i++){
            addContentCard();
        }
        
    }
})

function loadItemsOnStart(){
    for (let i = 0; i < 4; i++){
        addContentCard();
    }
}








async function fetchContentFromAPI(url, callback){
    // console.log('request has ben sent. await response')

    const response = await fetch(url);//Gets response from url input
    const response_json = await response.json();//To see content format
    // console.log(response_json);
    if (response.status == 200){//If request is succesfull returns fetched data
        callback(response_json);//returns fetched data
    }
}




async function addContentCard(){
    let outputElement = document.querySelector(".output");//selects html container for output

    const cardWrapper = document.createElement("div");
    cardWrapper.className = "fetchedCard";
    
    await fetchContentFromAPI('https://randomuser.me/api/', function(response){
        let authorName = response.results[0].name.first;
        let authorSurname = response.results[0].name.last;
        let authorFullName = authorName + " " + authorSurname;
        // console.log(authorFullName);
        addAuthor(authorFullName);
        // console.log(JSON.stringify(response.results[0].name));
    })//Author
    await fetchContentFromAPI('https://dog.ceo/api/breeds/image/random', function(response){addImage(response.message)})//Image
    // await fetchContentFromAPI('https://api.thecatapi.com/v1/images/search', function(response){addImage(response[0].url)})//Cat api 
    await fetchContentFromAPI('https://meowfacts.herokuapp.com/', function(response){addText(response.data)})//Text

    //Author part
    function addAuthor(source){
        const authorElement = document.createElement("h1")
        authorElement.textContent = source;
        cardWrapper.append(authorElement);
    }


    //Image part
    function addImage(source){
        const imageWrapper = document.createElement("div");
        imageWrapper.className = "fetchedImage";

        const imageElement = document.createElement("img");//creates img tag
        imageElement.src = source;//defines img src tag url
        imageElement.className = "apiImage";//ads class from img tag
        imageWrapper.append(imageElement);
        cardWrapper.append(imageWrapper);
    }

    //Text part
    function addText(source){
        const textElement = document.createElement("p");
        textElement.textContent = source;
        cardWrapper.append(textElement);
    }


    outputElement.append(cardWrapper);
}

document.querySelector('.fetch_btn').onclick = function(){addContentCard()}

loadItemsOnStart();

window.addEventListener('scroll',()=>{
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        for (let i = 0; i < 4; i++){
            addContentCard();
        }
        
    }
})

function loadItemsOnStart(){
    for (let i = 0; i < 4; i++){
        addContentCard();
    }
}

