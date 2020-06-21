document.addEventListener('DOMContentLoaded', () => {

    //creating the select (favourite characters) tag for the form
    createFavouriteCharactersSelect();
    //creating the select (favourite raids) tag for the form
    createFavouriteRaidsSelect();

    const destinyFavouriteCharactersForm = document.querySelector('#destiny-favourites-form');
    destinyFavouriteCharactersForm.addEventListener('submit', destinyFavouritesCharactersSubmit);

    const destinyOneExpansionsNumber = document.querySelector('#destiny-1-expansion-fields');
    destinyOneExpansionsNumber.addEventListener('click', destinyExpansionsAddFields);

    // const destinyWeaponsRadio = document.querySelector('#destiny-form-weapons');
    // destinyWeaponsRadio.addEventListener('change', destinyWeaponsRadioSelect);

})

const createFavouriteCharactersSelect = function () {
    const destinyFormWrapper = document.querySelector('#destiny-form-characters');

    const characters = ['Xur', 'Petra Venj', 'Shaxx', 'Variks'];

    const charactersList = document.createElement('select');
    charactersList.setAttribute('id', 'favourite_characters');

    const disabledSelected = document.createElement('option');
    disabledSelected.disabled = true;
    disabledSelected.selected = true;
    disabledSelected.value = 'expand-characters';
    disabledSelected.textContent = 'Expand characters';
    charactersList.appendChild(disabledSelected);

    characters.forEach((character) => {
        let characterOption = document.createElement('option');
        characterOption.value = character; //.replace(/\s/g, '-').toLowerCase();
        characterOption.textContent = character;
        charactersList.appendChild(characterOption);
    })

    destinyFormWrapper.appendChild(charactersList);
};

const createFavouriteRaidsSelect = function () {
    const destinyFormWrapper = document.querySelector('#destiny-form-raids');

    const raids = ['Vault of Glass', 'King\'s Fall', 'Leviathan', 'Last Wish'];

    const raidsList = document.createElement('select');
    raidsList.setAttribute('id', 'favourite_raids');

    const disabledSelected = document.createElement('option');
    disabledSelected.disabled = true;
    disabledSelected.selected = true;
    disabledSelected.value = 'expand-raids';
    disabledSelected.textContent = 'Expand raids';
    raidsList.appendChild(disabledSelected);

    raids.forEach((raid) => {
        let raidOption = document.createElement('option');
        raidOption.textContent = raid;
        raidOption.value = raid; //.replace(/\s/g, '-').toLowerCase();
        raidsList.appendChild(raidOption);
    })

    destinyFormWrapper.appendChild(raidsList);
};

// const destinyWeaponsRadioSelect = function (event) {
//     console.log(event.target.value);
// }

const destinyFavouritesCharactersSubmit = function (event) {
    event.preventDefault();
    // console.dir(event);

    const resultParagraph = document.querySelector('#destiny-favourites-form-result-paragraph');
    const resultUnorderedList = document.querySelector('#destiny-favourites-form-result-list');
    const resultListSummaryCharacters = document.createElement('li');
    const resultListLinkCharacters = document.createElement('li');
    const resultListLinkRaids = document.createElement('li');
    
    //creating anchor and img for chosen character
    const resultAnchorCharacters = document.createElement('a');
    resultAnchorCharacters.href = "#";
    resultAnchorCharacters.textContent = `Click for more info on ${event.target.favourite_characters.value}`;
    resultAnchorCharacters.onclick = function () {
        const resultImgCharacters = document.createElement('img');
        resultImgCharacters.src = `public/${event.target.favourite_characters.value.replace(/\s/g, '-').replace(/\'/g, '').toLowerCase()}.png`
        resultAnchorCharacters.appendChild(resultImgCharacters);
    }
    resultListLinkCharacters.appendChild(resultAnchorCharacters);

    //creating anchor and img for chosen raid
    const resultAnchorRaids = document.createElement('a');
    resultAnchorRaids.href = "#";
    resultAnchorRaids.textContent = `Click for more info on ${event.target.favourite_raids.value}`;
    resultAnchorRaids.onclick = function () {
        const resultImgRaids = document.createElement('img');
        resultImgRaids.src = `public/${event.target.favourite_raids.value.replace(/\s/g, '-').replace(/\'/g, '').toLowerCase()}.png`
        resultAnchorRaids.appendChild(resultImgRaids);
    }
    resultListLinkRaids.appendChild(resultAnchorRaids);

    resultParagraph.textContent = `
    You chose ${event.target.favourite_characters.value} as your favourite character and 
    ${event.target.favourite_raids.value} as your favourite raid.`
    resultListSummaryCharacters.appendChild(resultParagraph);

    const destinyWeaponsRadio = document.getElementsByName('destiny-weapons');
    destinyWeaponsRadio.forEach((radio) => {
        if (radio.checked) {
            console.log(radio.value);
        }
    })
    
    //appending the each li for the characters and raids links to the ul
    resultUnorderedList.appendChild(resultListSummaryCharacters);
    resultUnorderedList.appendChild(resultListLinkCharacters);
    resultUnorderedList.appendChild(resultListLinkRaids);
};

let destinyOneFieldsCounter = 0;

const destinyExpansionsAddFields = function () {
    const destinyOneDiv = document.querySelector('#destiny-1-expansions');
    
    if (destinyOneFieldsCounter < 4) {
        //adding the new field and pushing it to the div container
        const destinyOneExpansionField = document.createElement('input');
        destinyOneExpansionField.setAttribute('type', Text)
        destinyOneExpansionField.setAttribute('id', 'destiny-one-field-' + destinyOneFieldsCounter)
        destinyOneDiv.appendChild(destinyOneExpansionField);

        //adding the remove-field link, to remove the newly created field above
        const detinyOneExpansionDelete = document.createElement('a');
        detinyOneExpansionDelete.textContent = 'remove field';
        detinyOneExpansionDelete.href = "";
        detinyOneExpansionDelete.onclick = function (event) {
            event.preventDefault()
            destinyOneExpansionField.parentNode.removeChild(destinyOneExpansionField);
            detinyOneExpansionDelete.parentNode.removeChild(detinyOneExpansionDelete);
        }

        //adding the anchor after the newly created field, using nextSibling.
        destinyOneDiv.insertBefore(detinyOneExpansionDelete, destinyOneExpansionField.nextSibling)

        destinyOneFieldsCounter++;
    }
    else {
        alert('Destiny 1 only had 4 expansions, nerd.');
    }

    const destinyOneExpansionsField = document.querySelectorAll('#destiny-1-expansions');
    
    destinyOneExpansionsField.forEach((newField) => {
        newField.oninput = function (event) { //why does oninput work(?) here versus event listener?
            if (event.target.value === "xur") {
                const xurLink = document.createElement('a');
                xurLink.textContent = `${event.target.value}'s link for more info`;
                xurLink.href = "";
                destinyOneResultsDiv = document.querySelector('#destiny-1-expansions-result');
                destinyOneResultsDiv.appendChild(xurLink);
            }
        }
    })
};