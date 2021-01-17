function replacePhoto() {
    var asidePhoto = document.getElementById("photo");
    asidePhoto.src ="images/node-js-in-2017.png";
    //or one line
    //document.getElementById("photo").src ="images/node-js-in-2017.png";
}

function resetPhoto() {
    document.getElementById("photo").src ="images/home-logo.png";
}
  
function showIntro() {
    var intro = document.getElementById("intro");
  
    fetch("https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=ca&apiKey=618108a8b852413792707ff648ef3844", {
      method: "GET",
      
      /*headers: {
        "x-rapidapi-host": "newsapi.org",
        "x-rapidapi-key": "618108a8b852413792707ff648ef3844",
      },*/
    })
      .then((response) => {
        console.log(response);
        response.json().then(json => intro.innerText = json.articles);
      })
      .catch((err) => {
        console.error(err);
      });
}
