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

let movieSchedule = [
  {
    title: "Ralph Breaks the Internet",
    rating: "PG",
    currentlyPlaying: true,
    poster: "https://lumiere-a.akamaihd.net/v1/images/r_ralphbreakstheinternet_header_ddt-17403_08ef6d92.jpeg?region=0,0,1024,1274&optimize=true"
  },
  {
    title: "The Grinch",
    rating: "G",
    currentlyPlaying: true,
    poster: "https://images-na.ssl-images-amazon.com/images/I/71vgX4VFdiL._SY679_.jpg"
  },
  {
    title: "A Star is Born",
    rating: "R",
    currentlyPlaying: false,
    poster: "https://images-na.ssl-images-amazon.com/images/I/718zWbDKmvL._SY606_.jpg"
  },
   {
    title: "Bohemian Rhapsody",
    rating: "PG-13",
    currentlyPlaying: true,
    poster: "https://www.snhrc.com/wp-content/uploads/2018/09/Image-Coming-Soon.png"
  },
  {
    title: "Fantastic Beasts: The Crimes of Grindlewald",
    rating: "PG-13",
    currentlyPlaying: true,
    poster: "https://images-na.ssl-images-amazon.com/images/I/716fk%2BBZ-NL._SY606_.jpg"
  },
  {
    title: "Robin Hood",
    rating: "PG-13",
    currentlyPlaying: false,
    poster: "https://images-na.ssl-images-amazon.com/images/I/61K%2BTyGjsCL.jpg"
  },
  {
    title: "Spider-Man: Into the Spider-Verse",
    rating: "PG-13",
    currentlyPlaying: true,
    poster: "https://www.snhrc.com/wp-content/uploads/2018/09/Image-Coming-Soon.png"
  }
]

// Use a for loop to loop through the movies, build an HTML representation of each movie, and insert it into the #movie-schedule container in the DOM.
for (let i = 0; i < movieSchedule.length; i++) {
  if (movieSchedule[i].currentlyPlaying && movieSchedule[i].rating === "G") {
    document.querySelector("#movie-schedule").innerHTML += `<div class="green-border movie-card"><h2>${movieSchedule[i].title}</h2> <h3>${movieSchedule[i].rating}</h3> <h3>Showings today? ${movieSchedule[i].currentlyPlaying}</h3> <img src="${movieSchedule[i].poster}"></div>`;
  } else if (movieSchedule[i].currentlyPlaying && movieSchedule[i].rating === "PG") {
    document.querySelector("#movie-schedule").innerHTML += `<div class="yellow-border movie-card"><h2>${movieSchedule[i].title}</h2> <h3>${movieSchedule[i].rating}</h3> <h3>Showings today? ${movieSchedule[i].currentlyPlaying}</h3> <img src="${movieSchedule[i].poster}"></div>`;
  } else if (movieSchedule[i].currentlyPlaying && movieSchedule[i].rating === "PG-13") {
    document.querySelector("#movie-schedule").innerHTML += `<div class="orange-border movie-card"><h2>${movieSchedule[i].title}</h2> <h3>${movieSchedule[i].rating}</h3> <h3>Showings today? ${movieSchedule[i].currentlyPlaying}</h3> <img src="${movieSchedule[i].poster}"></div>`;
  } else {
    document.querySelector("#movie-schedule").innerHTML += `<div class="red-border movie-card"><h2>${movieSchedule[i].title}</h2> <h3>${movieSchedule[i].rating}</h3> <h3>Showings today? ${movieSchedule[i].currentlyPlaying}</h3> <img src="${movieSchedule[i].poster}"></div>`;
  } 
}
// You can use any elements you like in your HTML string as long as all the data in the movieSchedule object is included.

// Revisit your movie schedule exercise from above.
// Add a conditional so that you only print movies where the currentlyPlaying property is equal to true.
// Use flexbox to arrange your movie schedule side by side on your web page.
// If a movie does not have a poster property, give it a placeholder image like this
// Give all G-rated movies a dotted green border that's 2px wide.
// Give all PG-rated movies a dotted yellow border that's 2px wide.
// Give all PG-13 movies a dotted orange border that's 2px wide.
// Give all R-rated movies a dotted red border that's 2px wide.

let cohort1 = {
  name: "Cohort One",
  startDate: "January 15, 2018",
  endDate: "July 12, 2019",
  instructors: ["Kim", "Josh", "Jordan"],
  techStack: ["HTML", "CSS", "JavaScript", "React", "C#", ".NET"]
}

let cohort2 = {
 name: "Cohort Two",
 startDate: "August 15, 2019",
 endDate: "Feb 10, 2020",
 instructors: ["Tommy", "Jordan"],
 techStack: ["HTML", "CSS", "JavaScript", "React", "C#", ".NET"]
}

let cohort3 = {
 name: "Cohort Three",
 startDate: "April 6, 2020",
 endDate: "August 20, 2020",
 instructors: ["Tommy", "Jordan"],
 techStack: ["HTML", "CSS", "JavaScript", "React", "C#", ".NET"]
}

function buildHtmlString(cohortObjectParameter){
  // YOUR CODE GOES HERE
  let htmlString = `<h1>${cohortObjectParameter.name}</h1> <h3>${cohortObjectParameter.startDate}</h3> <h3>${cohortObjectParameter.endDate}</h3>`;
  let instructorsHtmlString = '';
  for (let i = 0; i < cohortObjectParameter.instructors.length; i++) {
    instructorsHtmlString += `<li>${cohortObjectParameter.instructors[i]}</li>`;
  }

  htmlString += `<ul>${instructorsHtmlString}</ul>`;

  let techstackHtmlString = '';
  for (let j = 0; j < cohortObjectParameter.techStack.length; j++) {
    techstackHtmlString += `<li>${cohortObjectParameter.techStack[j]}</li>`
  }

  htmlString += `<ul>${techstackHtmlString}</ul>`;
  
  return htmlString;
}

let newHtmlString = buildHtmlString(cohort3);
console.log(newHtmlString);

function printHtmlString(htmlStringParameter, elementIdParameter){
  // YOUR CODE GOES HERE
}

// The buildHtmlString function should take a cohort object as a parameter and return an HTML string with the following elements:
// An h1 of the cohort's name
// An h3 for the start date
// An h3 for the end date
// An unordered list of instructors
// An unordered list of technologies learned