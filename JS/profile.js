const signOutBtn = document.getElementById("signout-btn");
signOutBtn.addEventListener("click",()=>{
      window.location.href="./signUp.html"
})




const profile = document.getElementById("profile");
profile.addEventListener("click",gotodetails);

function gotodetails(){
   window.location.href="./profile.html"
}

const myorders = document.getElementById("myorders");
myorders.addEventListener("click",gotoorders);

function gotoorders(){
   window.location.href="./Myorders.html"
}

const wines = document.getElementById('wines');
const itemCount = 3; // Number of items to fetch and append

async function fetchData() {
  try {
    const response = await fetch('https://wine-api.onrender.com/wines');
    const data = await response.json();

    // Iterate over the first 'itemCount' items in the data array
    for (let i = 0; i < itemCount; i++) {
      const { name, id, image_url, price } = data[i];

      const itemDiv = document.createElement('div');
      itemDiv.id="item"

      const imgDiv=document.createElement("div");
      imgDiv.id="imgDiv"

      const container=document.createElement("div");
      container.id="container"


      // Create separate elements for Name, ID, Price, and Image
      const nameElement = document.createElement('p');
      nameElement.textContent = `${name}`;

      const idElement = document.createElement('p');
      idElement.textContent = `product code : ${id}`;
      idElement.id="code";

      const priceElement = document.createElement('p');
      priceElement.textContent = `${price} $`;

      const imageElement = document.createElement('img');
      imageElement.src = image_url;
      imageElement.alt = name;

      // Append the separate elements to the item div
      imgDiv.appendChild(imageElement);
      itemDiv.appendChild(nameElement);
      itemDiv.appendChild(idElement);
      itemDiv.appendChild(priceElement);
      
      container.append(imgDiv,itemDiv)
      // Append the item div to the main div
      wines.appendChild(container);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();

let myData = JSON.parse(localStorage.getItem("userinfo"));
let usrname =document.getElementById("user");
let profileName=document.getElementById("username")
if (Array.isArray(myData) && myData.length > 0) {
   
   usrname.textContent = myData[0].username;
   profileName.textContent= myData[0].username;
   console.log(usrname)
   
 } else {
   console.log("No array found in local storage or it is empty.");
 }

 let wishlist=document.getElementById("wishlist");
 wishlist.addEventListener("click",gotowishlist);
 function gotowishlist(){
   window.location.href="./wishlist.html";
 }