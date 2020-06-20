document.addEventListener('DOMContentLoaded', () => {

    const destinyOneExpansionsNumber = document.querySelector('#destiny-1-expansion-fields');
    destinyOneExpansionsNumber.addEventListener('click', destinyExpansionsAddFields);
    
    // const destinyOneExpansionsField = document.querySelector('#destiny-one-field-0');
    // destinyOneExpansionsField.addEventListener('input', destinyOneFieldEntry);
})

let destinyOneFieldsCounter = 0;

const destinyExpansionsAddFields = function (clickEvent) {
    const destinyOneDiv = document.querySelector('#destiny-1-expansions');
    
    if (destinyOneFieldsCounter < 4) {
        //adding the new field and pushing it to the div container
        const destinyOneExpansionField = document.createElement('input');
        destinyOneExpansionField.setAttribute('type', Text)
        destinyOneExpansionField.setAttribute('id', 'destiny-one-field' + '-' + destinyOneFieldsCounter)
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
        clickEvent.reset();
    }
    
}

// const destinyOneFieldEntry = function (event) {

// }