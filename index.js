const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];


let pasOne = document.getElementById("passwordOne")
let pasTwo = document.getElementById("passwordTwo")
function passwordGenerator(){

    let pasLength = Math.floor((Math.random()*8)+8)

    let passwordOne =""
    let passwordTwo =""
    
    

    for (let i=0; i<pasLength; i++){
        let randNumberOne = Math.floor(Math.random()*characters.length)
        passwordOne +=characters[randNumberOne]

        let randNumberTwo = Math.floor(Math.random()*characters.length)
        passwordTwo +=characters[randNumberTwo]

    } 

    pasOne.textContent=passwordOne
    pasTwo.textContent=passwordTwo

}

function copyPasswordOne() {
    /* Get the text field */
    var copyText = pasOne.textContent;
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }