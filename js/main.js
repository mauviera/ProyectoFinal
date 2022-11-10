async function init() {
    // Data imported from Rick and Morty api
    let allCharacters = await fetchAllCharacters();

    let firstCard = document.getElementById('main-card-0');
    let secondCard = document.getElementById('main-card-1');
    let thirdCard = document.getElementById('main-card-2');
    let fourthCard = document.getElementById('main-card-3');

    firstCard.addEventListener("click", onCardClick, false);
    secondCard.addEventListener("click", onCardClick, false);
    thirdCard.addEventListener("click", onCardClick, false);
    fourthCard.addEventListener("click", onCardClick, false);

    // Modify to grab different sets (4 only, up to 20)
    const SLICE_START = 16;
    const SLICE_END = 20;

    // Lodash to use only first 4 characters
    const characters = _.slice(allCharacters, [start=SLICE_START], [end=SLICE_END]);

    fillCardSpecies(characters);
    fillCardNames(characters);
    fillCardStatus(characters);
    fillCardImages(characters);
}

async function fetchAllCharacters() {
    let data = await fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
    return data.results;
}

async function fetchCharacterData(characterIndex) {
    let data = await fetch(`https://rickandmortyapi.com/api/character/${characterIndex}`)
        .then(response => response.json());
    return data;
}

document.addEventListener("DOMContentLoaded", init, false);

function fillCardSpecies(characters) {
    characters.forEach((character, index) => {
        const textElement = document.getElementById(`specie-${index}`);
        textElement.append(character.species);
    });
}

function fillCardNames(characters) {
    characters.forEach((character, index) => {
        const textElement = document.getElementById(`name-${index}`);
        textElement.append(character.name);
    });
}

function fillCardStatus(characters) {
    characters.forEach((character, index) => {
        const status = character.status;
        const textElement = document.getElementById(`status-${index}`);
        switch(status) {
            case "Alive":
                textElement.style.background = '#36b37e';
                break;
            case "Dead":
                textElement.style.background = '#ff5630';
                break;
            case "Missing":
                textElement.style.background = '#3a3a3a';
                break;
            default:
                textElement.style.background = '#f1f509';
                break;
        }
        textElement.append(status);
    });
}

function fillCardImages(characters) {
    characters.forEach((character, index) => {
        const imageElement = document.getElementById(`card-img-${index}`);
        const imageUrl = character.image;
        imageElement.style.backgroundImage = `url(${imageUrl})`;
    });
}

async function onCardClick(event) {
    // Get character index from id
    const characterIndex = parseInt(event.currentTarget.id.split('-').pop() + 1);
    const character = await fetchCharacterData(characterIndex);
    const characterLocation = character.location.name;
    let locationElement = document.getElementById('card-location');
    locationElement.textContent = '';
    locationElement.append(characterLocation);
}
