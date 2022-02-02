function getjoke(){
    murl ="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw&type=single"
    fetch(murl)
    .then(function(response){
        console.log(response)
        return response.json();
    })
    .then(function(data){
        display_joke(data.joke)
    })
    .catch(function(error){
        console.log("Error: " + error);
    });
}

function display_joke(wew){
    document.getElementById("joke").innerHTML =wew
}