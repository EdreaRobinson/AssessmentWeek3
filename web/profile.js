

let favColorButton = document.querySelector('#color');
let favPlaceButton = document.querySelector('#place');
let favRitualButton = document.querySelector('#ritual');

function favColor() {
    alert("My favorite color is orange!")
}

function favPlace() {
    alert("My favorite place is Malibu!")
}

function favRitual() {
    alert("My favorite ritual is our anniversary road trip.")
}

favColorButton.addEventListener('click', favColor);
favPlaceButton.addEventListener('click', favPlace);
favRitualButton.addEventListener('click', favRitual);
