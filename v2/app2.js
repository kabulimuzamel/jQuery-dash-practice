$(document).ready(() => {
    let foods = ['pizza', 'tacos', 'biryani', 'kabob', 'Manto'];

    const foodState = {}

    foods.forEach(food => {
        foodState[food] = 0;
    })
    //It creates an element of div and add it as a sibling to h1, and then inside it, names of food inside button are added.
    foodCounterContainer = $("<div></div>");
    
    foods.forEach(food => {
        const foodCounter = $("<div></div>")
            .text(`${food}: 0`)
            .attr('id', `${food}-food-counter`)
        foodCounterContainer.append(foodCounter);
    })


    //It creates an element of div and add it as a sibling after h1 and then inside it, names of food are added with colon and 0
    const buttonContainer = $("<div></div>");
    $("#start").after(buttonContainer);
    
    foods.forEach(food => {
        const foodButton = $("<button></button>")
            .text(food)
            .on('click', () => {
                foodState[food] += 1;
                $(`#${food}-food-counter`).text(`${food}: ${foodState[food]}`)
        })
        
        buttonContainer.append(foodButton);
    })
    
    $("#start").after(foodCounterContainer);



});





































// let foods = ['Pizza', 'Tacos', 'Biryani', 'Kabob'];

// let counter = {}

// foods.forEach(food => {
//     counter[food] = 0;
// })

// console.log(counter);