$(document).ready(() => {
    //Grabs the element with ID starting-point
    const startingElement = $("#starting-point");
    //Creates a new div
    const siblingElement = $("<div></div>");
    //Add text to the new div
    siblingElement.text("This is the next part");
    //Appends the new div to startingElement
    startingElement.after(siblingElement);

    const favoriteFoods = $("#favorite-foods");
    console.log((favoriteFoods[0].innerHTML))
    const favFoods = ["pizza", "falafel", "bolani", "hot dog"];

    favFoods.forEach(food => {
        favoriteFoods.after($("<div></div>").text(food));
    })

    const favs = [
        { food: 'pizza', color: 'green' },
        { food: 'falafel', color: 'yellow' },
        { food: 'bolani', color: 'red' },
        { food: 'hot dog', color: 'orange' },
    ]

    favs.forEach(obj => {
        let favFood = $('<div></div>')
        .text(obj.favFood)
        .css('background-color', 'red',obj.color );
        favoriteFoods.after(favFood)
    })
})