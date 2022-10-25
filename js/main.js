function init() {
    let firstCard = document.getElementById('main-card');
    let secondCard = document.getElementById('main-card-2');
    let thirdCard = document.getElementById('main-card-3');

    firstCard.addEventListener("click", onCardClick, false);
    secondCard.addEventListener("click", onCardClick, false);
    thirdCard.addEventListener("click", onCardClick, false);

    // Data imported from json
    localStorage.setItem("characters", JSON.stringify(data));
    fillCardSpecies();
    fillCardNames();
    fillCardStatus();
}

document.addEventListener("DOMContentLoaded", init, false);

function fillCardSpecies() {
    const characters = JSON.parse(localStorage.getItem("characters"));

    characters.forEach((character, index) => {
        const textElement = document.getElementById(`specie-${index + 1}`);
        textElement.append(character.specie);
    });
}

function fillCardNames() {
    const characters = JSON.parse(localStorage.getItem("characters"));

    characters.forEach((character, index) => {
        const textElement = document.getElementById(`name-${index + 1}`);
        textElement.append(character.name);
    });
}

function fillCardStatus() {
    const characters = JSON.parse(localStorage.getItem("characters"));

    characters.forEach((character, index) => {
        const textElement = document.getElementById(`status-${index + 1}`);
        textElement.append(character.status);
    });
}

function onCardClick(event) {
    let cardId = event.currentTarget.id;
    let descriptionElement = document.getElementById('card-description');
    descriptionElement.textContent = '';
    const characters = JSON.parse(localStorage.getItem("characters"));

    const firstCardText = characters[0].description;
    const secondCardText = characters[1].description;
    const thirdCardText = characters[2].description;

    switch (cardId) {
        case "main-card":
            descriptionElement.append(firstCardText);
            break;
        case "main-card-2":
            descriptionElement.append(secondCardText);
            break;
        case "main-card-3":
            descriptionElement.append(thirdCardText);
            break;
    }
}
