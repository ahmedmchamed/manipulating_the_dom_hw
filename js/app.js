document.addEventListener('DOMContentLoaded', () => {
    // console.log('JavaScipt has loaded');    
    const destinyOneExpansionsNumber = document.querySelector('#destiny-1-expansion-fields');
    destinyOneExpansionsNumber.addEventListener('click', destinyExpansionsAddFields);
})

// const removeCreatedField = function (elementId) {
    
//     removeElementLink = document.createElement('a');

// }


let counter = 0;

const destinyExpansionsAddFields = function () {
    const destinyOneDiv = document.querySelector('#destiny-1-expansions');

    // let destinyOneHtmlInput = '<input type="text">' + ' ' + '<a href="/something">click here</a>'
    // destinyOneDiv.innerHTML += destinyOneHtmlInput;
    // let destinyOneExpansionNodes = document.querySelectorAll('')
    if (counter < 5) {
        const destinyOneExpansionField = document.createElement('input');
        destinyOneExpansionField.setAttribute('type', Text)
        destinyOneExpansionField.setAttribute('id', 'destiny-one-field' + counter)

        destinyOneDiv.appendChild(destinyOneExpansionField);

        counter++;
    }
    else {
        alert('Can\'t add more fields, sorry');
    }
    
}