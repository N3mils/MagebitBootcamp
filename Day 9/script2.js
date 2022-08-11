async function fetchContentFromAPI(url, callback){
    // console.log('request has ben sent. await response')

    const response = await fetch(url);//Gets response from url input
    const response_json = await response.json();//To see content format
    // console.log(response_json);
    if (response.status == 200){//If request is succesfull returns fetched data
        callback(response_json);//returns fetched data
    }
}




function addContentCard(){
    let outputElement = document.querySelector(".output");//selects html container for output

    const cardWrapper = document.createElement("div");
    cardWrapper.className = "fetchedCard";
    
    fetchContentFromAPI('https://randomuser.me/api/', function(response){
        let authorName = response.results[0].name;
        let name = authorName.name;
        console.log(authorName);
        addAuthor();
        // console.log(JSON.stringify(response.results[0].name));
    })//Author
    // fetchContentFromAPI('https://dog.ceo/api/breeds/image/random', function(response){addImage(response.message)})//Image
    // fetchContentFromAPI('https://meowfacts.herokuapp.com/', function(response){addText(response.data)})//Text

    //Author part
    function addAuthor(source){
        const authorElement = document.createElement("h1")
        authorElement.textContent = source;
        cardWrapper.append(authorElement);
    }


    //Image part
    function addImage(source){
        const imageElement = document.createElement("img");//creates img tag
        imageElement.src = source;//defines img src tag url
        imageElement.className = "apiImage";//ads class from img tag
        cardWrapper.append(imageElement);
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








