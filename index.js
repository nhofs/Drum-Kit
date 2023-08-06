var drumButtons = document.querySelectorAll(".drum");


for (var i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        animateButton(buttonInnerHTML);
    });
}

document.addEventListener("keydown", (event) =>{
    var keypress= event.key;
   makeSound(keypress);
   animateButton(keypress);
});

function animateButton (theButton){
    var whichButton= document.querySelector("."+ theButton);
    whichButton.classList.add("pressed");
    setTimeout(function(){whichButton.classList.remove("pressed");}, 100);

}


function makeSound(choice){
    
   switch (choice) {
    case "w" :
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

        case "a" :
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

        case "s" :
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

        case "d" :
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

        case "j" :
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

        case "k" :
        var kickbass = new Audio("sounds/kick-bass.mp3");
        kickbass.play();
        break;

        case "l" :
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
   
    default:
       console.log(choice);
   }
}

