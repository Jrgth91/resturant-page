

function component() {
    const element = document.getElementById("content")
    element.innerHTML = "Hello"

    return element;
}

document.body.appendChild(component());

 