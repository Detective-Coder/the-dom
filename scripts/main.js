// In your index.html file, add an h1 element with an id of #hello-container.
// In your JavaScript file, declare a new variable called greeting and give it a value of "Hello, world"
// Use document.querySelector to target your #hello-container
// User the .innerHTML property to insert the value of your greeting variable into your #hello-container element.
let greeting = "Hello, world";
let containerElement = document.querySelector("#hello-container");
containerElement.innerHTML = greeting;

let choresArray = ["take out trash", "feed the cats", "feed the dog", "scoop the litter boxes"];

// In your JavaScript file, declare a new letiable called choresArray. This should be an array of chores you do regularly.
// Loop through your choresArray. For each chore, create a new <li> element and insert it into the #chores-container element.
for (let i = 0; i < choresArray.length; i++) {
  document.querySelector("#chores-container").innerHTML += `<li>${choresArray[i]}</li>`;
}

// You should end up with a bulleted list of all your regular chores.