$(document).ready(() => {
    //Grabs the element with ID starting-point
    const startingElement = $("#starting-point");
    //Creates a new div
    const siblingElement = $("<div></div>");
    //Add text to the new div
    siblingElement.text("This is the next part");
    //Appends the new div to startingElement
    startingElement.after(siblingElement);

    const favoriteFoods = $("#favorite-foods")
        .css('background-color', 'brown');
    console.log((favoriteFoods[0].innerHTML))
    // const favFoods = ["pizza", "falafel", "bolani", "hot dog"];

    // favFoods.forEach(food => {
    //     favoriteFoods.after($("<div></div>").text(food));
    // })

    const favs = [
        { food: 'pizza', color: 'green' },
        { food: 'falafel', color: 'yellow' },
        { food: 'bolani', color: 'red' },
        { food: 'burger', color: 'orange' },
    ]

    // favs.forEach(set => {
    //     let food = $('<div></div>').text(set.food).css('background-color', set.color);

    //     favoriteFoods.after(food)
    // })

    // favoriteFoods.after(foodBox);
    
    // foodBox.append(foodName);
    // foodBox.append(count);
    
    let totalCounter = 0;
    const orderCounter = $("<div></div>").text(`Total Quantity: ${totalCounter}`);

    $('#starting-point').after(orderCounter)




    favs.forEach(set => {
        const foodBox = $("<div></div>").css('border-style', 'solid').css('background-color', set.color);
        const foodName = $("<div></div>").text(set.food);
        let itemCounter = 0;

        const count = $("<div></div>").text(`Quantity: ${itemCounter}`);
        const addbutton = $('<button>Add Item</button>')
					.on('click', () => {
						itemCounter += 1;
						count.text(`Quantity: ${itemCounter}`)
                        totalCounter += 1
                        orderCounter.text(`Total Quantity: ${totalCounter}`);
					})
					.css('padding', '3px')
					.css('border', 'none')
					.css('border-radius', '20%')
					.css('font-family', 'Italic')
					.css('background-color', 'white');

        const removeButton = $('<button>Remove Item</button>')
					.on('click', () => {
						if (itemCounter > 0) {
							itemCounter -= 1;
                            totalCounter -= 1;
						}
						count.text(`Quantity: ${itemCounter}`)
                        orderCounter.text(`Total Quantity: ${totalCounter}`);
					})
					.css('padding', '3px')
					.css('border', 'none')
					.css('border-radius', '20%')
					.css('font-family', 'Italic')
					.css('background-color', 'white');

        foodBox.append(foodName);
        foodBox.append(count);
        foodBox.append(addbutton);
        foodBox.append(removeButton);
        favoriteFoods.after(foodBox);
    });

})
