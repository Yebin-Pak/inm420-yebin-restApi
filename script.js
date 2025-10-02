// create a list of student
let students = ["Yebin", "Kai", "Andres", "Jochebed", "Monica"];

// Create a no args function that will return a random number between 0 and 100
// update the function to include a parameter that takes a student's name
// and instead of returning the random no. print out the following message
// e.g. Alice has a grade of 85.

getGrades = (student) => {
    randomGrade = Math.floor(Math.random() * 100);
    console.log(`${student} has a grade of ${randomGrade}.`);
};

// getGrades(students[0]);

students.forEach(student => getGrades(student));



// create an object person with the properties
// name, age, address(city, province, country)

let person = {
    name : "Peter Parker",
    age : 19,
    address : {
        city : "Manhattan",
        state : "New York",
        country : "US"
    }
}




const newSection = document.createElement('section');

const ACCESS_KEY = "MSY5dFitzZb5kbg7RTFKyehZuw3nUDLDmnoYOyc_Sys";

fetch(`https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`)
    .then(response => response.json())
    .then(data => {
        // console.log(data.id);
        // console.log(data.user.name);
        // console.log(data.urls.regular);
        newSection.innerHTML = `
            <h1>${data.id}</h1>
            <p>${data.user.name}</p>
            <img src="${data.urls.regular}" alt="random photo" width=500px />
        `;
        document.body.appendChild(newSection);
    })
    .catch(error => console.log("What happened?!" + error));



// Merriam-Webster Dictionary API 
fetch("https://www.dictionaryapi.com/api/v3/references/thesaurus/json/umpire?key=your-api-key")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("Wrong direction!" + error));

// Current Weather
