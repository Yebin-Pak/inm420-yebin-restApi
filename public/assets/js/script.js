
// getGrades = (student) => {
//     randomGrade = Math.floor(Math.random() * 100);
//     console.log(`${student} has a grade of ${randomGrade}.`);
// };

// // getGrades(students[0]);

// students.forEach(student => getGrades(student));

// let person = {
//     name : "Peter Parker",
//     age : 19,
//     address : {
//         city : "Manhattan",
//         state : "New York",
//         country : "US"
//     }
// }



// Merriam-Webster Dictionary API 
const merriamSection = document.createElement('section');
const merriam_api_key = "48dd227b-c100-49d8-a0b2-175129d261c5";

fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/umpire?key=${merriam_api_key}`)
    .then(response => response.json())
    .then(data => {
        let firstDefinition = data[0].shortdef[0];

        merriamSection.innerHTML = `
            <h1>Merriam-Webster Dictionary - Thesaurus</h1>
            <h3>umpire</h3>
            <p>${firstDefinition}</p>
        `;
        document.body.appendChild(merriamSection);
    })
    .catch(error => console.log("Wrong direction!" + error));

