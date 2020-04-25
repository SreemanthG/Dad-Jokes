

function genJoke(){
    var xmlHttp = new XMLHttpRequest();
    // xmlHttp.setRequestHeader("Accept",application/json);
    xmlHttp.open( "GET", "https://icanhazdadjoke.com/", false ); // false for synchronous request
    xmlHttp.setRequestHeader("Accept","application/json");   
    xmlHttp.send( null );
    console.log((xmlHttp.responseText));
    document.getElementById("jokemsg").innerHTML = JSON.parse(xmlHttp.responseText).joke;
}
genJoke();