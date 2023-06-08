$(document).ready(() => {
    //Refactoring
	let foods = ['pizza', 'tacos', 'biryani', 'kabob', 'manto']

	const foodState = {}

	foods.forEach((food) => {
		foodState[food] = 0
	})
 
	foodCounterContainer = $('<div></div>')
	const buttonContainer = $('<div></div>')

	$('#start').after(buttonContainer)
    $('#start').after(foodCounterContainer)
    
	foods.forEach((food) => {
        const foodCounter = getFoodCounterElement(food);
        foodCounterContainer.append(foodCounter);
        
		const foodButton = getButtonElement(food);
        buttonContainer.append(foodButton);
    })

    function getFoodCounterElement(food) {
        return $("<div></div>")
            .text(`${food}: 0`)
            .attr('id', `${food}-food-counter`);
    } 

    function getButtonElement(food) {
        return $("<button></button>")
            .text(food)
            .on('click', () => {
                foodState[food] += 1
                $(`#${food}-food-counter`).text(`${food}: ${foodState[food]}`)
            })
    }
    
})
