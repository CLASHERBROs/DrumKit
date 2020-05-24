var btn = document.getElementsByClassName("drum");
console.log(btn.array);
function handleClick(){
    alert("lmao"); 

}
Array.from(btn).forEach(button => {   //ARRAY.FROM(BTN) CONVERTS BUTTON TO A ARRAY FROM COLLECTION
    button.addEventListener("click",
    handleClick );
});
