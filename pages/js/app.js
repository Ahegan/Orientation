const file = document.getElementsByClassName("files");

const Moi = file[0];
const Formation = file[1];
const Why = file[2];

const pageContent = document.getElementById("content")

var xhr = new XMLHttpRequest();
var response;

xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        response = this.response.Content
        //pageContent.innerHTML = response.Moi

    }
};

xhr.open("GET", "/pages/content.json", true);
xhr.responseType = "json"
xhr.send();

var currentTopic = Moi

function topicChange(topicHTML, topicJSON) {
    //reset the style of the current topics
    currentTopic.style.transform = "scale(1)"
    currentTopic.style.backgroundColor = "rgba(68, 69, 74, 0.315)"

    //set the style and the content of the page of the selected topic
    topicHTML.style.backgroundColor = "rgb(68, 69, 74)"
    topicHTML.style.transform = "scale(1.04)"
    pageContent.innerHTML = response[`${topicJSON}`]

    //actualize the current topic
    currentTopic = topicHTML

}

Moi.addEventListener("click", () => {
    topicChange(Moi, "Moi")
});

Formation.addEventListener("click", () => {
    topicChange(Formation, "Formation")
});

Why.addEventListener("click", () => {
    topicChange(Why, "Why")
});

const plusButton = document.getElementsByClassName("window-button")[2];
var compteur = 0;
var height = screen.height;
var firstUse = true;

plusButton.addEventListener("click", () => {

    //warn on the first use 
    if (firstUse){
        firstUse = false;
        alert("La fonctionnalité d'agrandissement de la fenêtre est expérimentale, en cas de problème d'affichage, rafraîchissez la page")
    }

    //check if the window is already expanded
    compteur++
    const expanded = (compteur % 2) == 0 ? false : true

    if (expanded) {
        document.getElementById("main-container").style.width = "100%"
        document.getElementById("main-container").style.height = "100%"
    } else {
        document.getElementById("main-container").style.width = "80%"
        document.getElementById("main-container").style.height = "85%"
    }
})
