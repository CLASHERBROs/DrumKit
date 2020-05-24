var btn = document.getElementsByClassName("drum");



function handleClick(name){
    let nameStr;
    switch(name){
    
        case "w":    nameStr = 'sounds/tom-1.mp3';
        animate();
        break;
        case "a": nameStr = 'sounds/tom-2.mp3';
        animate();
        break;
        case "s": nameStr = 'sounds/tom-3.mp3';
        animate();
        break;
        case "d": nameStr = 'sounds/tom-4.mp3';
        animate();
        break;
        case "j": nameStr = 'sounds/snare.mp3';
        animate();
        break;
        case "k": nameStr = 'sounds/crash.mp3';
        animate();
        break;
        case "l": nameStr = 'sounds/kick-bass.mp3';
        animate();
        break;
    default: console.log("messed up aint it?");
    }
var audio = new Audio (nameStr);
audio.play();
function animate(){
var animatedBtn = document.querySelector("."+name);
animatedBtn.classList.add("pressed");
setTimeout(function(){
    animatedBtn.classList.remove("pressed")
},100);
}
}



// Keypress event listener
document.addEventListener("keydown",function(){
    handleClick(event.key);
});

// Button event listener

Array.from(btn).forEach(button => {   //ARRAY.FROM(BTN) CONVERTS BUTTON TO A ARRAY FROM COLLECTION
    button.addEventListener("click",
    function(){handleClick (button.innerHTML)
    }
    );
});
