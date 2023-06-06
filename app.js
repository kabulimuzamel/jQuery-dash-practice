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
})