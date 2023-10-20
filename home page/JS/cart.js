let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cartItems);

let mainContainer = document.getElementById("display-div");
// let sum = 0;
displayData(cartItems);
let totalItems = document.getElementById("total-items");
let priceTotal = document.getElementById("price-total");

function displayData(cartItems) {
    mainContainer.innerHTML = "";
    cartItems.map((elm, i) => {
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

        let quantityDiv = document.createElement("div");
        quantityDiv.setAttribute("id", "quantity-div");



        let inputtext = document.createElement("input");
        inputtext.value = elm.qty;
        inputtext.style.textAlign = "center"
        inputtext.setAttribute("id", "input-area");

        let minusBtn = document.createElement("button");
        minusBtn.innerText = "-";
        minusBtn.setAttribute("id", "minusbtn");
        minusBtn.addEventListener("click", function () {
            if (elm.qty > 1) {
                elm.qty--;
                price.textContent = "$" + (elm.price*elm.qty);
                inputtext.value = elm.qty;
                cartItems[i].qty= elm.qty;
                localStorage.setItem("cart",JSON.stringify(cartItems));
                totalPriceShow()

// need to work
                
            } else {
                alert("Quantity cannot be 0")
            }
        });

        let plusBtn = document.createElement("button");
        plusBtn.innerText = "+";
        plusBtn.setAttribute("id", "plusbtn");
        let totalBottles = elm.quantity;
        plusBtn.addEventListener("click", function () {
            if (elm.qty<= totalBottles) {
                console.log(elm.qty)
                elm.qty++;
                price.textContent = "$" + (elm.price*elm.qty);
                inputtext.value = elm.qty;
                cartItems[i].qty= elm.qty;
                localStorage.setItem("cart",JSON.stringify(cartItems));
                totalPriceShow()
                
// need to work
            } else {
                alert("Out of Stock")
            }
        });

        quantityDiv.append(minusBtn, inputtext, plusBtn)

        let priceDiv = document.createElement("div");
        priceDiv.setAttribute("id", "price-div");
        let price = document.createElement("h5");
        price.setAttribute("id", "price-inside-div")
        price.textContent = "$" + (elm.price*elm.qty);
        // sum += elm.price;
        priceDiv.append(price)

        let deleteDiv = document.createElement("div");
        deleteDiv.setAttribute("id", "delete-div");
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteDiv.append(deleteBtn)
        deleteBtn.addEventListener("click", () => {
// delete Functionality
deleteFun(elm, i);

        })

        container.append(imageDiv, divName, quantityDiv, priceDiv, deleteDiv)
        mainContainer.append(container);

    })
}
// console.log(sum);



document.getElementById("checkoutBtn").addEventListener("click", () => {
    window.location.href = "#";
})

function totalPriceShow(){
    let arr= JSON.parse(localStorage.getItem("cart")) || [];
    let sum = arr.reduce((ac, elem)=>{
        return Number(ac) + Number(elem.price * elem.qty);
        console.log(ac, elem);
    },0)
    console.log(sum);
    
    priceTotal.innerText = sum;
}

totalPriceShow()
totalItems.innerText = "(" + cartItems.length + " items)";
// priceTotal.innerText = sum;

function deleteFun(elm, i){
    cartItems.splice(i, 1);
    localStorage.setItem("cart",JSON.stringify(cartItems));
    displayData(cartItems)
    totalItems.innerText = "(" + cartItems.length + " items)";
    totalPriceShow()
}