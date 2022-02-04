function getjoke(){
    murl ="https://v2.jokeapi.dev/joke/Dark?type=single"
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


function getjoke1(){
    murl ="https://v2.jokeapi.dev/joke/Pun?type=single"
    fetch(murl)
    .then(function(response){
        console.log(response)
        return response.json();
    })
    .then(function(data){
        display_joke1(data.joke)
    })
    .catch(function(error){
        console.log("Error: " + error);
    });
}

function display_joke1(wew){
    document.getElementById("joke1").innerHTML =wew
}


function getjoke2(){
    murl ="https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw&type=single"
    fetch(murl)
    .then(function(response){
        console.log(response)
        return response.json();
    })
    .then(function(data){
        display_joke2(data.joke)
    })
    .catch(function(error){
        console.log("Error: " + error);
    });
}

function display_joke2(wew){
    document.getElementById("joke2").innerHTML =wew
}