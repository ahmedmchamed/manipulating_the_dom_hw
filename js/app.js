// const RemoveNode = require('./removetest.js');

document.addEventListener('DOMContentLoaded', () => {
    // console.log('JavaScipt has loaded');    
    const destinyOneExpansionsNumber = document.querySelector('#destiny-1-expansion-fields');
    destinyOneExpansionsNumber.addEventListener('click', destinyExpansionsAddFields);
})

let counter = 0;

const destinyExpansionsAddFields = function () {
    const destinyOneDiv = document.querySelector('#destiny-1-expansions');
    
    if (counter < 3) {

        const destinyOneExpansionField = document.createElement('input');
        destinyOneExpansionField.setAttribute('type', Text)
        destinyOneExpansionField.setAttribute('id', 'destiny-one-field' + counter)
        destinyOneDiv.appendChild(destinyOneExpansionField);

        const detinyOneExpansionDelete = document.createElement('a');
        detinyOneExpansionDelete.textContent = 'remove field';
        detinyOneExpansionDelete.href = "";
        detinyOneExpansionDelete.onclick = function (event) {
            event.preventDefault()
            destinyOneExpansionField.parentNode.removeChild(destinyOneExpansionField);
            detinyOneExpansionDelete.parentNode.removeChild(detinyOneExpansionDelete);
        }

        
        destinyOneDiv.insertBefore(detinyOneExpansionDelete, destinyOneExpansionField.nextSibling)

        counter++;
    }
    else {
        alert('Can\'t add more fields, sorry');
    }
    
}