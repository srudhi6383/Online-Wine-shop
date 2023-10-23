let product = JSON.parse(localStorage.getItem("details"));
console.log(product);

let prodName = document.getElementById("nameHeading");
prodName.innerText = product.name;

// ------------image append..
let imgDiv = document.getElementById("prodImgDiv");
let img = document.createElement("img");
img.src = product.image_url;

imgDiv.append(img);

// --------------------rating append..
let rating = document.getElementById("ratingDiv");
let rate = product.rating;
console.log(rate);

if (rate > 4.5) {
    rate = "★★★★★  " + rate;
    rating.append(rate);
} else {
    rate = "★★★★  " + rate;
    rating.append(rate);
}
// -------------add to fav the detailed product

var favouriteProduct = JSON.parse(localStorage.getItem("favourites")) || [];
let favDiv = document.getElementById("favouritesDiv");
let isFav = alreadyPresent(product);
let heartclr = isFav ? 'red' : 'lightgrey';
favDiv.innerHTML = `<i class="fa-solid fa-heart" style="color: ${heartclr}"></i>`;
favDiv.addEventListener("click", function () {
    console.log("clicked")
    toggleFav(product, favDiv);
})


//-------------------about product append
let colorDiv = document.getElementById("colorDiv");
let span1 = document.createElement("span");
span1.innerText = "Color:"
let colour = product.type;
colorDiv.append(span1, colour);

let typeDiv = document.getElementById("typeDiv");
let span2 = document.createElement("span");
span2.innerText = "Type:"
let type = "Dry";
typeDiv.append(span2, type);

let alcoholDiv = document.getElementById("alcoholDiv");
let span3 = document.createElement("span");
span3.innerText = "Alcohol:"
let alcohol = "13.5%";
alcoholDiv.append(span3, alcohol);

let regionDiv = document.getElementById("regionDiv");
let span4 = document.createElement("span");
span4.innerText = "Region:"
let region = product.region;
regionDiv.append(span4, region);

let countryDiv = document.getElementById("countryDiv");
let span5 = document.createElement("span");
span5.innerText = "Country:"
let country = product.country;
countryDiv.append(span5, country);

// -------------description of product..
let description = document.getElementById("description");
let prodDescription = product.details;
description.append(prodDescription);

// --------------------bottles left...
let bottles = document.getElementById("quantityDiv");
let bottleQuantity = product.quantity + " bottles left";
bottles.append(bottleQuantity);

// -----------price of product..
let price = document.getElementById("priceDiv");
let priceDetails = "$" + product.price;
price.append(priceDetails);

// -----------------More about wine
const toggleButtons = document.getElementById("toggleRating");
toggleButtons.addEventListener('click', function () {
    const options = this.parentElement.nextElementSibling;

    options.style.display = options.style.display === 'none' ? 'block' : 'none';
    this.innerText = options.style.display === 'none' ? '+' : '-';
});


// ----------------------display random data at the bottom of the page

main();

function main() {
    let url = `https://mock-api-template-wocn.onrender.com/wines`;
    let data = getData(url);
}
async function getData(url) {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        displayData(data);
    } catch (error) {
        console.log(error)
    }
}

function displayData(data) {
    let length = data.length;
    let arr = [];
    for (let i = 0; i < 4; i++) {
        let index = Math.floor(Math.random() * length);
        arr.push(data[index])
    }
    console.log(arr);

    let container = document.getElementById("randonProducts");
    arr.forEach((wine) => {
        let div = document.createElement("div");

        let card1 = document.createElement("div");
        card1.setAttribute("class", "card1");
        let rating = document.createElement("p");
        rating.innerText = "★ " + wine.rating;

        let isFavorite = alreadyPresent(wine);
        let heartColor = isFavorite ? 'red' : 'lightgrey';


        let favBtn = document.createElement("button");
        favBtn.innerHTML = `<i class="fa-solid fa-heart" style="color: ${heartColor}"></i>`;

        favBtn.setAttribute("id", "addToFavBtn")
        favBtn.addEventListener("click", function () {
            toggleFav(wine, favBtn);
        })
        card1.append(rating, favBtn)


        let card2 = document.createElement("div");
        card2.setAttribute("class", "card2");
        let img = document.createElement("img");
        img.src = wine.image_url;
        img.addEventListener("click", () => {
            localStorage.setItem("details", JSON.stringify(wine));
            window.location.href = "./productDetails.html"
        })
        let name = document.createElement("h4");
        name.innerText = wine.name;
        card2.append(img, name);

        let card3 = document.createElement("div");
        card3.setAttribute("class", "card3");
        let country = document.createElement("p");
        country.innerText = wine.country;
        let type = document.createElement("p");
        type.innerText = wine.type;
        card3.append(country, type);

        let card4 = document.createElement("div");
        card4.setAttribute("class", "card4");
        let price = document.createElement("p");
        price.innerText = "$" + wine.price;
        let addBtn = document.createElement("button");
        addBtn.innerText = "+"
        addBtn.setAttribute("id", "addToCartBtn");
        addBtn.addEventListener("click", function () {
            addToCart(wine);
        })
        card4.append(price, addBtn);


        div.append(card1, card2, card3, card4);
        container.append(div);
    })

}

// Add To Favourites


function toggleFav(wine, btn) {
    if (alreadyPresent(wine)) {
        removeFav(wine, btn);
    } else {
        addToFav(wine, btn);
    }
    updateHeartColor(wine, btn);
}
//checking if that particular wine is already present in the Local storage
function alreadyPresent(wine) {
    if (!wine || typeof wine.id === "undefined") {
        return false;
    }
    return favouriteProduct.some(favWine => favWine.id === wine.id);
}
// if its present, removing it from LS.
function removeFav(wine, btn) {
    favouriteProduct = favouriteProduct.filter(favWine => favWine.id !== wine.id);
    localStorage.setItem("favourites", JSON.stringify(favouriteProduct));
    // updateHeartColor(false, btn);
}
//if its not present, adding it to favourites.
function addToFav(wine, btn) {
    if (!alreadyPresent(wine)) {
        favouriteProduct.push(wine);
        localStorage.setItem("favourites", JSON.stringify(favouriteProduct));
        // updateHeartColor(true, btn);
    }
}
//updating heart btn color on adding it to favourites.
function updateHeartColor(wine, btn) {
    const heartIcon = btn.querySelector("i");
    if (heartIcon) {
        let isFavorite = alreadyPresent(wine);
        let heartColor = isFavorite ? 'red' : 'lightgrey';
        heartIcon.style.color = heartColor;
    }
}

// ---------------Add To Cart
var cartProduct = JSON.parse(localStorage.getItem("cart")) || [];

let cartBTN= document.getElementById("cartDiv");
cartBTN.addEventListener("click", ()=>{
    addToCart(product);
})

function addToCart(wine) {
    cartProduct.push(wine);
    localStorage.setItem("cart", JSON.stringify(cartProduct));
}

// --------------Quick order div
quickOrderDiv

let quickOrderBtn= document.getElementById("quickOrderDiv");
quickOrderBtn.addEventListener("click", ()=>{
    addToCart(product);
    window.location.href="./cart.html"
})

// --------------view all button

let viewAll= document.getElementById("viewAllBtn");
viewAll.addEventListener("click", ()=>{
    window.location.href="./catalog-screen.html"
})