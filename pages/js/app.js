const file = document.getElementsByClassName("files");

const moi = file[0];
const formation = file[1];
const why = file[2];

const pageContent = document.getElementById("content")

var xhr = new XMLHttpRequest();
var response;

xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        response = this.response.Content
        pageContent.innerHTML = response.moi

    }
};

xhr.open("GET", "/pages/content.json", true);
xhr.responseType = "json"
xhr.send();

var currentTopic = moi

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

moi.addEventListener("click", () => {
    topicChange(moi, "moi")
});

formation.addEventListener("click", () => {
    topicChange(formation, "formation")
});

why.addEventListener("click", () => {
    topicChange(why, "why")
});

const plusButton = document.getElementsByClassName("window-button")[2];
var compteur = 0;
var height = screen.height;
var firstUse = true;

plusButton.addEventListener("click", () => {

    //warn on the first use 
    if (firstUse) {
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


//scroll part
function scrollFun(el, place) {
    el = document.getElementById(el)
    el.scrollIntoView({
        block: place,
        behavior: 'smooth',
        inline: 'center'
    });
}

//interval to wait the JSON request
setInterval(() => {
    document.getElementById("pool-link").addEventListener("click", () => {
        scrollFun("pool", "center")
    })

    document.getElementById("toulouseIII-link").addEventListener("click", () => {
        scrollFun("toulouseIII", "center")
    })

    document.getElementById("full-stack-link").addEventListener("click", () => {
        scrollFun("full-stack", "end")
    })

    document.getElementById("pentester-link").addEventListener("click", () => {
        scrollFun("pentester", "end")
    })


}, 3000);


