let randomRestaurant = document.querySelector('#recommendation');

function recommendRest() {
    let restaurants = ["Abacus", "Graze", "Patacon", "Pop's"];
    let pickRestaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
    // console.log(pickRestaurant)
    alert(`You should visit ${pickRestaurant}!`)
}

randomRestaurant.addEventListener('click', recommendRest);