(()=>{"use strict";const e=function(){let e=document.createElement("div");return e.id="aboutButton",e.className="button",e.innerHTML="About",{aboutButton:e}},n=function(e,n){const t=document.createElement("div");return t.className=e,t.innerHTML=n,{div:t}},t=function(){const e=n("aboutTitle","LEARN A LITTLE ABOUT US!"),t=document.createElement("div");t.className="aboutContent";const d=n("aboutImage","<img src='./images/about.png'>"),i=n("aboutInfo","Founded in 2024, we’ve quickly established ourselves as the go-to destination for food lovers seeking both nourishment and indulgence. Our doors open early for breakfast, welcoming the day with the aroma of freshly brewed coffee and warm pastries. As the day unfolds, our lunch offerings provide a midday retreat with a variety of healthy options that energize and satisfy. When evening arrives, our dinner menu blooms with hearty choices that comfort and delight.");return t.appendChild(d.div),t.appendChild(i.div),{aboutTitle:e,aboutContent:t}},d=function(e,n){const t=document.createElement("div");return t.className=e,t.innerHTML=n,{div:t}},i=function(e,n){const t=document.createElement("div");return t.className=e,t.innerHTML=n,{div:t}},a=function(){let e=document.createElement("div");e.innerHTML="Below you will find today's delicious specials!",e.id="menuHeader",e.className="menuHeader";let n=document.createElement("div");n.className="menuContent";const t=i("mealTimeTitle","BREAKFAST"),d=i("mealTimeTitle","LUNCH"),a=i("mealTimeTitle","DINNER"),o=i("mealGrid",""),l=i("mealGrid",""),c=i("mealGrid",""),r=i("mealBox","Two Eggs Over Easy with Buttered White Toast"),u=i("mealBox","Orgainic Steel Cut Oats with Blueberries and Sliced Almonds"),m=i("mealBox","Chocolate Chip Protien Pancakes with a drizzle of Sugar Free Maple Syrup"),s=i("foodImage","<img src='./images/breakfast1.jpg'>"),p=i("foodImage","<img src='./images/breakfast2.jpg'>"),h=i("foodImage","<img src='./images/breakfast3.jpg'>"),v=i("foodImage","<img src='./images/lunch1.jpg'>"),C=i("foodImage","<img src='./images/lunch2.jpg'>"),g=i("foodImage","<img src='./images/lunch3.jpg'>"),f=i("mealBox","Garlic Sauted 8oz Filet Minon with Choice Of Side"),b=i("mealBox","Open Faced Rib Eye Steak Sandwich with Choice Of Side"),B=i("mealBox","Steamed King Crab Dinner Pot"),T=i("foodImage","<img src='./images/dinner1.jpg'>"),M=i("foodImage","<img src='./images/dinner2.jpg'>"),y=i("foodImage","<img src='./images/dinner3.jpg'>"),E=i("mealBox","Grilled Chicken Chipotle Bowl"),H=i("mealBox","Ribeye / Angus Blend 8Oz Cheese Burger Deluxe"),L=i("mealBox","12 Bone In Fried Chicken Wings with Medium Hot Sauce");return n.appendChild(t.div),t.div.appendChild(o.div),o.div.appendChild(r.div),r.div.appendChild(s.div),o.div.appendChild(u.div),u.div.appendChild(p.div),o.div.appendChild(m.div),m.div.appendChild(h.div),d.div.appendChild(l.div),l.div.appendChild(E.div),E.div.appendChild(v.div),l.div.appendChild(H.div),H.div.appendChild(C.div),l.div.appendChild(L.div),L.div.appendChild(g.div),a.div.appendChild(c.div),c.div.appendChild(f.div),f.div.appendChild(T.div),c.div.appendChild(b.div),b.div.appendChild(M.div),c.div.appendChild(B.div),B.div.appendChild(y.div),n.appendChild(d.div),n.appendChild(a.div),{menuHeader:e,menuContent:n}},o=document.querySelector("#content"),l=document.querySelector("#navBar"),c=document.createElement("div"),r=document.createElement("div"),u=(document.getElementsByTagName("buttin"),document.createElement("footer")),m=document.createElement("div");m.innerHTML="FORWARD CAFE",m.className="title",u.className="footer",u.innerHTML="",c.appendChild(e().aboutButton),c.appendChild(function(){let e=document.createElement("div");return e.id="menuButton",e.className="button",e.innerHTML="Menu",{menuButton:e}}().menuButton),c.appendChild(function(){let e=document.createElement("div");return e.id="contactButton",e.className="button",e.innerHTML="Contact",{contactButton:e}}().contactButton),c.className="navButtonsContainer",r.appendChild(m),l.append(c),l.appendChild(r),document.body.appendChild(u);const s=document.getElementById("menuButton"),p=document.getElementById("contactButton"),h=document.getElementById("aboutButton");o.appendChild(t().aboutTitle.div),o.appendChild(t().aboutContent),s.addEventListener("click",(function(){o.innerHTML="",o.appendChild(a().menuHeader),o.appendChild(a().menuContent)})),p.addEventListener("click",(function(){o.innerHTML="",o.appendChild(function(){const e=d("contactTitle","Hours Of Operation"),n=document.createElement("div");n.className="contactContent";const t=document.createElement("div");return t.innerHTML="Monday: 8AM - 8PM <br> Tuesday: 8AM - 8PM <br> Wednesday: 8AM - 8PM <br> Thursday: 8AM - 8PM <br> Friday: 8AM - 8PM <br> Saturday: 6AM - 11PM <br> Sunday: 8AM - 8PM",d("contactInfo","Hours of Operation"),n.appendChild(e.div),n.appendChild(t),{contactTitle:e,contactContent:n}}().contactContent)})),h.addEventListener("click",(function(){o.innerHTML="",o.appendChild(t().aboutTitle.div),o.appendChild(t().aboutContent)})),console.log(a().menuHeader),console.log(e().aboutButton)})();