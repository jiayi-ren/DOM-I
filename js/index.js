const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// nav links
let navLinks = document.querySelectorAll('nav a');
const links = Object.values(siteContent["nav"]);
for(let i = 0; i < navLinks.length ; i++){
  navLinks[i].textContent = links[i];
  navLinks[i].style.color = "green";
}
// add two new links using APPENDCHILD , PREPEND
let newLink1 = document.createElement("a");
newLink1.setAttribute("href", "#");
newLink1.textContent = "Append";

let newLink2 = document.createElement("a");
newLink2.setAttribute("href", "#");
newLink2.textContent = "Prepend";

document.querySelector("nav").appendChild(newLink1);
document.querySelector("nav").prepend(newLink2);

// cta
let cta = document.querySelector("section.cta");
cta.querySelector("h1").textContent = siteContent["cta"]["h1"];
cta.querySelector("button").textContent = siteContent["cta"]["button"];

cta.querySelector("h1").style.letterSpacing = "15px";

// cta img
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

// main content
let topContent = document.querySelectorAll("section.main-content .top-content .text-content");
topContent[0].querySelector("h4").textContent = siteContent["main-content"]["features-h4"];
topContent[0].querySelector("p").textContent = siteContent["main-content"]["features-content"];
topContent[1].querySelector("h4").textContent = siteContent["main-content"]["about-h4"];
topContent[1].querySelector("p").textContent = siteContent["main-content"]["about-content"];

let bottomContent = document.querySelectorAll("section.main-content .bottom-content .text-content");
bottomContent[0].querySelector("h4").textContent = siteContent["main-content"]["services-h4"];
bottomContent[0].querySelector("p").textContent = siteContent["main-content"]["services-content"];
bottomContent[1].querySelector("h4").textContent = siteContent["main-content"]["product-h4"];
bottomContent[1].querySelector("p").textContent = siteContent["main-content"]["product-content"];
bottomContent[2].querySelector("h4").textContent = siteContent["main-content"]["vision-h4"];
bottomContent[2].querySelector("p").textContent = siteContent["main-content"]["vision-content"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// contact
let contact = document.querySelector("section.contact");
contact.querySelector("h4").textContent = siteContent["contact"]["contact-h4"];
contact.querySelectorAll("p")[0].textContent = siteContent["contact"]["address"];
contact.querySelectorAll("p")[1].textContent = siteContent["contact"]["phone"];
contact.querySelectorAll("p")[2].textContent = siteContent["contact"]["email"];

////////////// STRETCH ////////////////
////////////// Update Button /////////////////
let button = document.createElement("button");
button.textContent = "Update";
contact.append(button);
button.addEventListener('click', (event) => {

  // button text, background color toggle
  if (event.target.innerHTML === "Update") {
    event.target.textContent = "Revert";
    event.target.style.backgroundColor = "Yellow";
  } else {
    event.target.textContent = "Update";
    event.target.style.backgroundColor = "transparent";
  }
  
  // change h1 text
  cta.querySelector("h1").textContent = "DOM IS NOT AWESOME";
  
  // hide p elements
  let pContent = document.getElementsByTagName("p");
  for (let i = 0; i < pContent.length; i++){
    pContent[i].toggleAttribute('hidden');
  }
})

// footer
let footer = document.querySelector("footer");
footer.querySelector("p").textContent = siteContent["footer"]["copyright"];