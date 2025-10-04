
// Merriam-Webster Dictionary API 
const merriamSection = document.createElement('section');
const merriam_api_key = "48dd227b-c100-49d8-a0b2-175129d261c5";

fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/umpire?key=${merriam_api_key}`)
    .then(response => response.json())
    .then(data => {
        merriamSection.innerHTML = `
            <h1>Merriam-Webster Dictionary - Thesaurus</h1>
            <h3>${data[0].hwi.hw}</h3>
            <div>
                <button id="umpire-${data[0].fl}-btn">${data[0].fl}</button>
                <button id="umpire-${data[1].fl}-btn">${data[1].fl}</button>
            </div>
            <img src="./assets/images/AdobeStock_107611917.jpeg" alt="umpire_image" />
            <p id="umpire-${data[0].fl}"><span>[${data[0].fl}]</span>  ${data[0].shortdef[0]}</p>
            <p id="umpire-${data[1].fl}"><span>[${data[1].fl}]</span>  ${data[1].shortdef[0]}</p>
        `;
        document.body.appendChild(merriamSection);

        // button -> showing the definition
        let button_1 = document.getElementById(`umpire-${data[0].fl}-btn`);
        let button_2 = document.getElementById(`umpire-${data[1].fl}-btn`);
        let def_1 = document.getElementById(`umpire-${data[0].fl}`);
        let def_2 = document.getElementById(`umpire-${data[1].fl}`);

        button_1.addEventListener("click", () => {
            if (def_1.style.display === 'none') {
                def_1.style.display = 'block';
            } else {
                def_1.style.display = 'none';
            }
        });

        button_2.addEventListener("click", () => {
            if (def_2.style.display === 'none') {
                def_2.style.display = 'block';
            } else {
                def_2.style.display = 'none';
            }
        });
    })
    .catch(error => console.log("Wrong direction!" + error));

