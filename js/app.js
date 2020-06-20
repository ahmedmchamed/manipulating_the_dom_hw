document.addEventListener('DOMContentLoaded', () => {

    //creating the select (favourite characters) tag for the form
    createFavouriteCharactersSelect();
    //creating the select (favourite raids) tag for the form


    const destinyFavouriteCharactersForm = document.querySelector('#destiny-favourites-form');
    destinyFavouriteCharactersForm.addEventListener('submit', destinyFavouritesCharactersSubmit);

    const destinyOneExpansionsNumber = document.querySelector('#destiny-1-expansion-fields');
    destinyOneExpansionsNumber.addEventListener('click', destinyExpansionsAddFields);

})

const createFavouriteCharactersSelect = function () {
    const destinyFormWrapper = document.querySelector('#destiny-form-characters');

    const characters = ['Xur', 'Petra Venj', 'Shaxx', 'Variks'];

    const charactersList = document.createElement('select');
    charactersList.setAttribute('id', 'favourite-characters');

    characters.forEach((character) => {
        let characterOption = document.createElement('option');
        characterOption.value = character.replace(/\s/g, '-').toLowerCase();
        characterOption.textContent = character;
        charactersList.appendChild(characterOption);
    })

    destinyFormWrapper.appendChild(charactersList);
};

const createFavouriteRaidsSelect = function () {
    const destinyFormWrapper = document.querySelector('#destiny-form-raids');

    const raids = ['Vault of Glass', 'King\'s Fall', 'Leviathan', 'Last Wish'];

    const raidsList = document.createElement('select');

    raids.forEach((raid) => {
        let raidOption = document.createElement('option');
        raidOption.textContent = raid;
        raidOption.value = raid.replace(/\s/g, '-').toLowerCase();
        raidsList.appendChild(raidOption);
    })

    destinyFormWrapper.appendChild(raidsList);

};

const destinyFavouritesCharactersSubmit = function (event) {
    
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