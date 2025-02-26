// 4 instruments in array 
const kits =["crash","kick","snare","tom"];
// I want to spot my kits in html
 // querySelector(): A method that returns the first element 
 // within the document that matches the specific CSS class selector
const containerClass = document.querySelector(".container");
// another solution
//const containerId = document.getElementById("kits");

// for each instrument in my kits 
// create button element + add background image 
// create audio sound add sound source 

kits.forEach(instrument => {
    
    // create button element 
    const btn = document.createElement("button");
    //<button></button>
    // add css style to the element that I created 
    btn.classList.add("btnStyle")
    //<button class="btnStyle"></button>
    btn.innerText = instrument;
     //<button class="btnStyle">crash/kick</button>

     // btn style add backgroundImage 
     //url("images/ tom  .png")
     //<button class="btnStyle">crash/kick<img src=""></button>
     btn.style.backgroundImage = "url(images/" + instrument + ".png)";

    // append the element to the document or html file 
    // add element that I created to the html file 

    containerClass.appendChild(btn);

    // I want to add audio hint : still in for loop 
    const audio = document.createElement("audio");
    audio.src = "sounds/" + instrument + ".mp3";

    // add to the html file 
    containerClass.appendChild(audio);

    // by clicking on the buttons sounds should be played 
    // by clicking on the buttons the event (playing sound) should be triggred

    btn.addEventListener("click", () =>{
        audio.play();
    });

});