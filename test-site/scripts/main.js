let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name, blue"); // On affiche un prompt pour y écrire le nom de l'user
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName); 
        myHeading.textContent = `Deepness is served, ${myName}`; 
    }
}

const myImage = document.querySelector("img");
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src")
    if (mySrc === "images/deepness.jpg") {
        myImage.setAttribute("src", "images/deepness2.jpg"); 
    } else {
        myImage.setAttribute("src", "images/deepness.jpg");
    }
}

if(!localStorage.getItem("name")) {
    setUserName(); // Si, quand on revient sur le site, le nom n'est toujours pas stockée dans la DB, alors on appelle la fonction setUserName()
} else {
    const storedName = localStorage.getItem("name"); // Si un nom est déjà stocké, on va le prendre dans la DB
    myHeading.textContent = `Deepness is served, ${storedName}`; // On assigne à h1 le nom que l'on a récupéré
}

myButton.onclick = () => {
    setUserName();
}
