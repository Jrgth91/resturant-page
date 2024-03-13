

const menuModule = function() {
    let menuButton = document.createElement("div");
    menuButton.id = "menuButton";
    menuButton.className = "button"
    menuButton.innerHTML = "Menu"

    return {
        menuButton
    }
}

const CreateItem = function(classn, inner) {
    const div = document.createElement("div")
    div.className = classn;
    div.innerHTML = inner

    return {
        div
    }

}

const loadMenu = function() {
    let menuHeader = document.createElement("div")
    menuHeader.innerHTML = "Below you will find today's delicious specials!"
    menuHeader.id = "menuHeader"
    menuHeader.className = "menuHeader"

    let menuContent = document.createElement("div")
    menuContent.className = "menuContent"

    const breakfastTitle = CreateItem("mealTimeTitle", "BREAKFAST")
    const lunchTitle = CreateItem("mealTimeTitle", "LUNCH")
    const dinnerTitle = CreateItem("mealTimeTitle", "DINNER")
    const mealGridOne  = CreateItem("mealGrid", "")
    const mealGridTwo  = CreateItem("mealGrid", "")
    const mealGridThree  = CreateItem("mealGrid", "")
    const breakfastOne = CreateItem("mealBox", "Two Eggs Over Easy with Buttered White Toast")
    const breakfastTwo = CreateItem("mealBox", "Orgainic Steel Cut Oats with Blueberries and Sliced Almonds")
    const breakfastThree = CreateItem ("mealBox", "Chocolate Chip Protien Pancakes with a drizzle of Sugar Free Maple Syrup")
    const breakfastOneImage = CreateItem("foodImage", "<img src='./images/breakfast1.jpg'>")
    const breakfastTwoImage = CreateItem("foodImage","<img src='./images/breakfast2.jpg'>" )
    const breakfastThreeImage = CreateItem("foodImage", "<img src='./images/breakfast3.jpg'>")
    const lunchOneImage = CreateItem("foodImage", "<img src='./images/lunch1.jpg'>")
    const lunchTwoImage = CreateItem("foodImage", "<img src='./images/lunch2.jpg'>")
    const lunchThreeImage = CreateItem("foodImage", "<img src='./images/lunch3.jpg'>")

    const dinnerOne = CreateItem("mealBox","Garlic Sauted 8oz Filet Minon with Choice Of Side" )
    const dinnerTwo = CreateItem("mealBox","Open Faced Rib Eye Steak Sandwich with Choice Of Side" )
    const dinnerThree = CreateItem("mealBox","Steamed King Crab Dinner Pot")

    const dinnerOneImage = CreateItem("foodImage", "<img src='./images/dinner1.jpg'>")
    const dinnerTwoImage = CreateItem("foodImage", "<img src='./images/dinner2.jpg'>")
    const dinnerThreeImage = CreateItem("foodImage", "<img src='./images/dinner3.jpg'>")
    
    const lunchOne = CreateItem("mealBox", "Grilled Chicken Chipotle Bowl")
    const lunchTwo = CreateItem("mealBox", "Ribeye / Angus Blend 8Oz Cheese Burger Deluxe")
    const lunchThree = CreateItem("mealBox", "12 Bone In Fried Chicken Wings with Medium Hot Sauce")


    menuContent.appendChild(breakfastTitle.div)

    breakfastTitle.div.appendChild(mealGridOne.div)

    mealGridOne.div.appendChild(breakfastOne.div)
    breakfastOne.div.appendChild(breakfastOneImage.div)
    mealGridOne.div.appendChild(breakfastTwo.div)
    breakfastTwo.div.appendChild(breakfastTwoImage.div)
    mealGridOne.div.appendChild(breakfastThree.div)
    breakfastThree.div.appendChild(breakfastThreeImage.div)

    lunchTitle.div.appendChild(mealGridTwo.div)
    mealGridTwo.div.appendChild(lunchOne.div)
    lunchOne.div.appendChild(lunchOneImage.div)
    mealGridTwo.div.appendChild(lunchTwo.div)
    lunchTwo.div.appendChild(lunchTwoImage.div)
    mealGridTwo.div.appendChild(lunchThree.div)
    lunchThree.div.appendChild(lunchThreeImage.div)

    dinnerTitle.div.appendChild(mealGridThree.div)
    mealGridThree.div.appendChild(dinnerOne.div)
    dinnerOne.div.appendChild(dinnerOneImage.div)
    mealGridThree.div.appendChild(dinnerTwo.div)
    dinnerTwo.div.appendChild(dinnerTwoImage.div)
    mealGridThree.div.appendChild(dinnerThree.div)
    dinnerThree.div.appendChild(dinnerThreeImage.div)

    menuContent.appendChild(lunchTitle.div)
    menuContent.appendChild(dinnerTitle.div)

    return {
        menuHeader,
        menuContent
    }
}

export { menuModule, loadMenu };