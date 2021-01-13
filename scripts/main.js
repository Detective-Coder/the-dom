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

let movieObject = {
  title: "Star Wars: A New Hope",
  genre: "Science Fiction",
  releaseDate: "May 25, 1977"
}

// Use document.querySelector() to grab a reference to each element in your HTML.
let title = document.querySelector("#title");
let genre = document.querySelector("#genre");
let releaseDate = document.querySelector("#release-date");

//Use the .innerHTML property to set the text of each element to the matching value in your object. (For example, the h1 with the id of "title" should contain the title property of your movieObject, etc).
title.innerHTML = `${movieObject.title}`;
genre.innerHTML = `${movieObject.genre}`;
releaseDate.innerHTML = `${movieObject.releaseDate}`;

let downtownRestaurants = ["Backyard Pizza and Raw Bar", "The Bodega", "Surin of Thailand", "Bahnhof", "Jim's Steak and Spaghetti House", "The Peddler", "Jewel City Seafood Market", "Black Sheep Burritos & Brews", "La Famiglia", "Le Bistro", "Charlie Graingers", "The Cellar Door"];

// Loop over the downtownRestaurants array.
for (let i = 0; i < downtownRestaurants.length; i++) {
  document.querySelector("#restaurants-list").innerHTML += `<li>${downtownRestaurants[i]}</li>`;
}

// Use the loop to create an <li> element for each item in the array.
// Use document.querySelector and .innerHTML to add each new <li> element to the #restaurants-list container.
// You should see a bulleted list of restaurants in the DOM.

let sandwichToppings = ["pickles", "extra cheese", "lettuce", "tomatoes", "avocado", "bacon", "mayo", "mustard"];

// Write a function that does the following things:
// Loop through sandwichToppings
// Build an <li> element for each item in the array.
// Use document.querySelector and .innerHTML to print your HTML string to the "#sandwich-container".
// Call the function. You should see a bulleted list of all the sandwich toppings in the DOM.

function listToppings() {
  for (let i = 0; i < sandwichToppings.length; i++) {
    document.querySelector("#sandwich-container").innerHTML += `<li>${sandwichToppings[i]}</li>`;
  }
}

listToppings();