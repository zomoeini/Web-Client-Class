const fruits = ["Apple","Orange","Kiwi","Bananna"];

// function querySelector() 
// javaScript asks querySelector to search in html file(document) and find the element, class , Id that 
// matches the specific CSS selector  

const container = document.querySelector(".container");

// inside the container add button , add image 
fruits.forEach((fruit) => {
    // generate these elenment 
    const btn = document.createElement("button");
    // add css style to the element that I created
    btn.classList.add("btn");
    btn.innerText = fruit;

    // I created the element but I forgot to add to container 
    // hey container you should keep element in your tag 
    container.appendChild(btn);
});

const cities = ["Toronto", "Montreal","Ottawa","Calgary"];

// assignment  slect container in document 
// in javaScript dynamicaly create elements to show the name of cities h2

cities.forEach((city) => {
    const h2 = document.createElement("h2");
    h2.classList.add();
    h2.innerText = city;

    container.appendChild(h2);
});