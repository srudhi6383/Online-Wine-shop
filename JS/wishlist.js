let cartItems = JSON.parse(localStorage.getItem("favourites"));
console.log(cartItems);

let mainContainer = document.getElementById("display-div");
let sum = 0
displayData(cartItems);

function displayData(cartItems) {
    mainContainer.innerHTML = "";
    if(cartItems.length===0){
        mainContainer.textContent= "Sip, savor, and elevate your moments - shop our fine wines today! "
        mainContainer.style.padding= "50px"
    }else{
        cartItems.map((elm) => {
            let container = document.createElement("div");
    
            let imageDiv = document.createElement("div");
            imageDiv.setAttribute("id", "image-div")
    
            let img = document.createElement("img");
            img.src = elm.image_url
            imageDiv.append(img);
    
            let divName = document.createElement("div");
            divName.setAttribute("id", "name-div");
            let name = document.createElement("h5");
            name.textContent = elm.name;
            divName.append(name);
    
            let priceDiv = document.createElement("div");
            priceDiv.setAttribute("id", "price-div");
            let price = document.createElement("h5");
            price.textContent = "$" + elm.price;
            priceDiv.append(price)
    
            let deleteDiv = document.createElement("div");
            deleteDiv.setAttribute("id", "delete-div");
            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Remove";
            deleteDiv.append(deleteBtn)
            deleteBtn.addEventListener("click", () => {
                const index = cartItems.findIndex((item) => item.name === elm.name);
                if (index !== -1) {
                    cartItems.splice(index, 1);
                }
                localStorage.setItem("favourites", JSON.stringify(cartItems));
                displayData(cartItems);
    
            })
            
            container.append(imageDiv, divName, priceDiv, deleteDiv)
            mainContainer.append(container);
    
        })
    }
}