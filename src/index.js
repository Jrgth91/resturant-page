import { loadPage, loadAbout } from "./about";
import { contactModule, loadContact } from "./contact";
import { menuModule, loadMenu } from "./menu";




const mainContent = document.querySelector("#content")
const navMenuContent = document.querySelector("#navBar");
const navMenuContentTop = document.createElement("div")
const navMenuContentBot =document.createElement("div")
const button = document.getElementsByTagName("buttin")
const footer = document.createElement("footer")
const title = document.createElement("div")
title.innerHTML = "FORWARD CAFE";
title.className = "title"
footer.className = "footer"
footer.innerHTML = ""


    

const loadModules = function() {
    
    navMenuContentTop.appendChild(loadPage().aboutButton);
    navMenuContentTop.appendChild(menuModule().menuButton);
    navMenuContentTop.appendChild(contactModule().contactButton);
    navMenuContentTop.className = "navButtonsContainer"
    navMenuContentBot.appendChild(title);
    navMenuContent.append(navMenuContentTop);
    navMenuContent.appendChild(navMenuContentBot);


    document.body.appendChild(footer);
   
}

const clickEvents = function() {
    menu.addEventListener("click", function() {
        mainContent.innerHTML = "";
        mainContent.appendChild(loadMenu().menuHeader)
        mainContent.appendChild(loadMenu().menuContent)
    }); 

    contact.addEventListener("click", function() {
        mainContent.innerHTML = "";
        mainContent.appendChild(loadContact().contactContent)
    });

    about.addEventListener("click", function() {
        mainContent.innerHTML = "";
        mainContent.appendChild(loadAbout().aboutTitle.div)
        mainContent.appendChild(loadAbout().aboutContent)
    });
}

loadModules();
const menu = document.getElementById("menuButton");
const contact = document.getElementById("contactButton");
const about = document.getElementById("aboutButton")
mainContent.appendChild(loadAbout().aboutTitle.div)
mainContent.appendChild(loadAbout().aboutContent)

clickEvents();
console.log(loadMenu().menuHeader)
console.log(loadPage().aboutButton)
