const loadPage = function() {
    let aboutButton = document.createElement("div");
    aboutButton.id = "aboutButton";
    aboutButton.className = "button"
    aboutButton.innerHTML = "About"

    return {
        aboutButton
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

const loadAbout = function() {
    const aboutTitle = CreateItem("aboutTitle", "LEARN A LITTLE ABOUT US!")
    const aboutContent = document.createElement("div");
    aboutContent.className = "aboutContent"

    const aboutImage = CreateItem("aboutImage", "<img src='./images/about.png'>");

    const aboutInfo = CreateItem("aboutInfo", "Founded in 2024, we’ve quickly established ourselves as the go-to destination for food lovers seeking both nourishment and indulgence. Our doors open early for breakfast, welcoming the day with the aroma of freshly brewed coffee and warm pastries. As the day unfolds, our lunch offerings provide a midday retreat with a variety of healthy options that energize and satisfy. When evening arrives, our dinner menu blooms with hearty choices that comfort and delight.")
    aboutContent.appendChild(aboutImage.div)
    aboutContent.appendChild(aboutInfo.div);
    
    return {
        aboutTitle,
        aboutContent
    }
}

export { loadPage, loadAbout };