
//to remove DOM 'main#main'
const mainElement = document.querySelector('main#main');
if (mainElement) {
  mainElement.remove();  // removes the main element from DOM
}

// to create h1 element and assigning it to newHeader
const newHeader = document.createElement('h1');

//newheader variable that points to h1 has id of victory
newHeader.id = "victory";

//new h1 element with id of victory contains text of my name
newHeader.innerHTML = "Sandra is the champion";



