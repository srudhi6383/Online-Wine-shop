// ----------------------------------------------------------------------------------Fetching Data
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
    console.log(error);
  }
}

// ----------------------------------------------------------------------------------Displaying Data
function displayData(data) {
  let divContainer = document.getElementById("div2");
  divContainer.innerHTML = "";
  console.log(data.length);
  if (data.length === 0) {
    let div = document.createElement("div");
    div.setAttribute("class", "awesomeDiv");
    let sorry = document.createElement("h4");
    sorry.innerText = "No products found!!😭";
    div.append(sorry);
    divContainer.append(div);
  } else {
    data.forEach((wine) => {
      let div = document.createElement("div");

      let card1 = document.createElement("div");
      card1.setAttribute("class", "card1");
      let rating = document.createElement("p");
      rating.innerText = "★ " + wine.rating;

      let isFavorite = alreadyPresent(wine);
      let heartColor = isFavorite ? "red" : "lightgrey";

      let favBtn = document.createElement("button");
      favBtn.innerHTML = `<i class="fa-solid fa-heart" style="color: ${heartColor}"></i>`;

      favBtn.setAttribute("id", "addToFavBtn");
      favBtn.addEventListener("click", function () {
        toggleFav(wine, favBtn);
      });
      card1.append(rating, favBtn);

      let card2 = document.createElement("div");
      card2.setAttribute("class", "card2");
      let img = document.createElement("img");
      img.src = wine.image_url;
      img.addEventListener("click", () => {
        localStorage.setItem("details", JSON.stringify(wine));
        window.location.href = "./productDetails.html";
      });
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
      addBtn.innerText = "+";
      addBtn.setAttribute("id", "addToCartBtn");
      addBtn.addEventListener("click", function () {
        addToCart(wine);
      });
      card4.append(price, addBtn);

      div.append(card1, card2, card3, card4);
      divContainer.append(div);
    });
  }
}

// ---------------------------------------------------Toggling filter "+" and "-" signs and diplaying data
const toggleButtons = document.querySelectorAll(
  '.sub-filters > div[id^="toggle"]'
);
toggleButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const options = this.parentElement.nextElementSibling;

    options.style.display = options.style.display === "none" ? "block" : "none";
    this.innerText = options.style.display === "none" ? "+" : "-";
  });
});

// ---------------------------------------------------------------fetching data for selected checkbox..
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      const url = checkbox.getAttribute("data-url");
      getData(url);
    } else {
      main();
    }
  });
});
// ------------------------------------------------------------------------------sorting LTH and HTL
let lth = document.getElementById("lthSort");
lth.addEventListener("click", () => {
  let url = `https://wine-api.onrender.com/wines?_sort=price&_order=asc`;
  getData(url);
});

let htl = document.getElementById("htlSort");
htl.addEventListener("click", () => {
  let url = `https://wine-api.onrender.com/wines?_sort=price&_order=desc`;
  getData(url);
});
// ---------------------------------------------------------------------------------Add To Cart
var cartProduct = JSON.parse(localStorage.getItem("cart")) || [];

// function addToCart(wine) {
//     cartProduct.push(wine);
//     localStorage.setItem("cart", JSON.stringify(cartProduct));
// }

function addToCart(wine) {
  var isWinePresent = cartProduct.some(function (item) {
    return item.id === wine.id;
  });

  if (!isWinePresent) {
    let obj = { ...wine, qty: 1 };
    cartProduct.push(obj);
    localStorage.setItem("cart", JSON.stringify(cartProduct));
    alert("Wine added to the cart.");
  } else {
    alert("This Wine is already present in the cart.");
  }
}
// ---------------------------------------------------------------------------------Add To Favourites
var favouriteProduct = JSON.parse(localStorage.getItem("favourites")) || [];

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
  return favouriteProduct.some((favWine) => favWine.id === wine.id);
}
// if its present, removing it from LS.
function removeFav(wine, btn) {
  favouriteProduct = favouriteProduct.filter(
    (favWine) => favWine.id !== wine.id
  );
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
//updating herat btn color on adding it to favourites.
function updateHeartColor(wine, btn) {
  const heartIcon = btn.querySelector("i");
  if (heartIcon) {
    let isFavorite = alreadyPresent(wine);
    let heartColor = isFavorite ? "red" : "lightgrey";
    heartIcon.style.color = heartColor;
  }
}

// //----------------------------------------------------------------------------------------------pagination

// // -------------------------------------get data length for pagination-------------------------//

// let paginationDiv = document.getElementById("pagination");

// getLength();

// async function getLength() {
//   try {
//     let resLength = await fetch(`https://wine-api.onrender.com/wines`);
//     let dataLength = await resLength.json();

//     let totalPages = Math.ceil(dataLength.length / 9);
//     paginationPages(totalPages)
//     console.log(totalPages);

//   } catch (error) {
//     console.log(error);
//   }
// }

// // ---------------------------pagination function for creating buttons-------------------------//

// function paginationPages(pageNum) {
//   let buttonsArray = [];
//   for (var i = 1; i <= pageNum; i++) {
//     buttonsArray.push(`<button  class="pagination-button" data-page-number="${i}"> ${i} </button>`)
//   }

//   paginationDiv.innerHTML = buttonsArray.join(" ");

//   const all_buttons = document.querySelectorAll(".pagination-wrapper");
//   console.log(all_buttons)

//   all_buttons.forEach(function (btn) {
//     btn.addEventListener("click", handleClick);
//   });
//   function handleClick(e) {
//     console.log(e.target.innerText);
//     targetPageNo= e.target.innerText
//     console.log(targetPageNo)
//     main(pageNo=e.target.innerText);
//   }
// }

// let filterByQ= document.getElementById("fiterBy");
// filterByQ.addEventListener("click", ()=>{
//     let divC = document.getElementById("div2");
//     let divSubC= document.getElementById("div1")
//     divC.innerHTML="";
//     divC.append(divSubC);
// })
