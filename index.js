for(let i=0; i<document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", play_audio)
}
function play_audio(){
    play_Sound(this.innerHTML);  //for click
    buttonAnimation(this.innerHTML);
}

document.addEventListener("keypress", function(event){
    play_Sound(event.key);              //for key board presses
    buttonAnimation(event.key);
});
function play_Sound(val) {
    var audio = new Audio();
    switch (val) { // Using classList[0] to get the first class (like 'w', 'a', etc.)
        case 'w':
            audio = new Audio("sounds/tom-1.mp3");
            break;
        case 'a':
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case 's':
            audio = new Audio("sounds/tom-3.mp3");
            break;
        case 'd':
            audio = new Audio("sounds/tom-4.mp3");
            break;
        case 'j':
            audio = new Audio("sounds/snare.mp3");
            break;
        case 'k':
            audio = new Audio("sounds/crash.mp3");
            break;
        case 'l':
            audio = new Audio("sounds/kick-bass.mp3");
            break;
        default:
            console.log('No sound for this key');
            return; // Exit if no matching class
    }
    // Play the audio
    audio.play();
}

function buttonAnimation(pressed_key){
    var clicked = document.querySelector("."+pressed_key);
    clicked.classList.add("pressed");
    setTimeout(() => {
        clicked.classList.remove("pressed")
    }, 100);
}
