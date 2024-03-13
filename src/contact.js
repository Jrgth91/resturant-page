const contactModule = function() {
    let contactButton = document.createElement("div");
    contactButton.id = "contactButton";
    contactButton.className = "button"
    contactButton.innerHTML = "Contact"

    return {
        contactButton
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


const loadContact = function() {
    const contactTitle = CreateItem("contactTitle", "Hours Of Operation")
    const contactContent = document.createElement("div");
    contactContent.className = "contactContent"

    const contactHours = document.createElement("div")
    contactHours.innerHTML = "Monday: 8AM - 8PM <br> Tuesday: 8AM - 8PM <br> Wednesday: 8AM - 8PM <br> Thursday: 8AM - 8PM <br> Friday: 8AM - 8PM <br> Saturday: 6AM - 11PM <br> Sunday: 8AM - 8PM"

    const contactInfo = CreateItem("contactInfo", "Hours of Operation")
    contactContent.appendChild(contactTitle.div)
    contactContent.appendChild(contactHours);

    
    return {
        contactTitle,
        contactContent
    }
}



export { contactModule, loadContact };