const contentDiv = document.querySelector(".content");

contentDiv.innerHTML = contentDiv.innerHTML.replace(/♬/g, "<span class='hover-character'>★</span>");

const hoverCharacters = document.querySelectorAll(".hover-character");


function playAudio(){
    new Audio("https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3").play();
}


hoverCharacters.forEach(character => {
    character.addEventListener("mouseup", () => {
        character.textContent = "♬";
    });

    character.addEventListener("mouseout", () => {
        character.textContent = "♬";
        character.style.color = "#dd1c77";

        const remainingStarSigns = Array.from(hoverCharacters).filter(element => element.textContent === "★");
        if (remainingStarSigns.length === 0) {
        replaceWithButton();
        }
        else {return(hoverCharacters)}
      })

    }
);


//check if there are any filled stars left, if there are none then replace text with button 
function replaceWithButton() {
    const button = document.createElement("button");
    button.textContent = "❤";
    contentDiv.innerHTML = contentDiv.innerHTML.replace(/☆/g, button.outerHTML);
    //button.addEventListener("click", playAudio);
  }

const buttons = document.getElementById(heart)
buttons.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
      playAudio();
    }})
//buttons.forEach(button => {button.addEventListener("click", playAudio)});


  
  