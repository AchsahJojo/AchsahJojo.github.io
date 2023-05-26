//create a button elemnet
const button= document.createElement('button')
const audio = new Audio("http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a")
button.innerText='Music Button'
//event listener detects when a user clicks on the button
    button.addEventListener('click',()=>{
        audio.play();
        alert("Click again after 5 seconds to hear the audio again")
        //console.log("you have clicked me")
    })

document.body.appendChild(button)
 