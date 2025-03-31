const body = document.querySelector("body");

// Add a mousemove as a event listener
body.addEventListener("mousemove" , (event) => {

  // Get the mouse's current position
  // add distance to your current x to move to new position 
  const xPos = event.offsetX;  // I will get the position of my mouse 
  const yPos = event.offsetY;

  // create a new span  I will use this span as shape and asign my heart picture to this shap 

  const span = document.createElement("span");

  // Position the span based on mouse 
   // where is my mouse this is the place that I put my shape then my shape will move 
  // when I moved my mouse the shape of heart will be generated 
  // 10 px or 100 px it is  a pixel of the monitor and it means the  distance 
  span.style.left = xPos + "px";
  span.style.top = yPos + "px";

  // Give it a random size 
  const size = Math.random() * 100; // It generate random number between 0 (inclusive) 1 (exclusive)(0.66) * 100 = 66 pixels

  span.style.with = size + "px";
  span.style.height = size + "px";

  // Add (append) the heart to the body 
  body.appendChild(span);
  

  // bouncing ball or moving box we did not set time (infinity) 
  // set timer , after specific time remove the element and generated new one or disapear the event 
  setTimeout(() =>{
    span.remove();
  },3000)
  });
