var btn = document.getElementsByClassName("drum");
console.log(btn.array);
function handleClick(name){
    let nameStr;
    switch(name){
    
        case "w":    nameStr = 'sounds/tom-1.mp3';
        break;
        case "a": nameStr = 'sounds/tom-2.mp3';
        break;
        case "s": nameStr = 'sounds/tom-3.mp3';
        break;
        case "d": nameStr = 'sounds/tom-4.mp3';
        break;
        case "j": nameStr = 'sounds/snare.mp3';
    break;
        case "k": nameStr = 'sounds/crash.mp3';
    break;
        case "l": nameStr = 'sounds/kick-bass.mp3';
    break;
    default: console.log("messed up aint it?");
    }
var audio = new Audio (nameStr);
audio.play();

}
Array.from(btn).forEach(button => {   //ARRAY.FROM(BTN) CONVERTS BUTTON TO A ARRAY FROM COLLECTION
    button.addEventListener("click",
    function(){handleClick (button.innerHTML)
    }
    );
});
