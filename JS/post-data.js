const wineName = [
     "Chardonnay Classic",
     "Cabernet Sauvignon",
     "Pinot Noir Reserve",
     "Sauvignon Blanc",
     "Prosecco Brut",
     "Merlot",
     "Riesling",
     "Malbec Reserve",
     "Zinfandel",
     "Rosé d'Anjou",
     "Chianti Classico",
     "Shiraz",
     "Chenin Blanc",
     "Tempranillo",
     "Sauvignon Blanc Blanc",
     "Champagne Brut",
     "Barbera d'Asti",
     "Moscato",
     "Cabernet Franc",
     "Gewürztraminer",
     "Pinot Grigio",
     "Prosecco Extra Dry",
     "Merlot Reserva",
     "Tempranillo Reserva",
     "Sauvignon Blanc Blanc",
];

const location = [
     "California, USA",
     "Bordeaux, France",
     "Oregon, USA",
     "Marlborough, NZ",
     "Veneto, Italy",
     "California, USA",
     "Mosel, Germany",
     "Mendoza, Argentina",
     "California, USA",
     "Loire Valley, France",
     "Tuscany, Italy",
     "Barossa Valley, Australia",
     "Stellenbosch, South Africa",
     "Rioja, Spain",
     "Loire Valley, France",
     "Champagne, France",
     "Piedmont, Italy",
     "Asti, Italy",
     "Loire Valley, France",
     "Alsace, France",
     "Friuli, Italy",
     "Veneto, Italy",
     "Central Valley, South Africa",
     "Rioja, Spain",
     "Loire Valley, France",
];

const price = [
     19.99, 29.99, 24.99, 17.99, 14.99, 21.99, 18.99, 26.99, 22.99, 16.99,
     25.99, 20.99, 15.99, 23.99, 18.99, 39.99, 27.99, 14.99, 26.99, 19.99,
     15.99, 17.99, 23.99, 21.99,29.99
];

const rating = [
     4.5, 4.2, 4.7, 4.0, 4.6, 4.4, 4.3, 4.5, 4.2, 4.1, 4.6, 4.4, 4.3, 4.2, 4.1,
     4.7, 4.5, 4.3, 4.1, 4.0, 4.2, 4.4, 4.5, 4.3, 4.2,
];

const type = [
     "Dry", "Semi-Dry", "Dry", "Semi-Dry", "Brut", "Semi-Sweet", "Semi-Sweet",
     "Dry", "Sweet", "Semi-Sweet", "Dry", "Sweet", "Dry", "Semi-Sweet", "Semi-Dry",
     "Brut", "Dry", "Sweet", "Semi-Dry", "Semi-Sweet", "Semi-Dry", "Brut", "Dry","Semi-Dry","Sweet"
];

const category = [
     "White Wine", "Red Wine", "Red Wine", "White Wine", "Sparkling Wine", "Red Wine",
     "White Wine", "Red Wine", "Red Wine", "Rose Wine", "Red Wine", "Red Wine", "White Wine",
     "Red Wine", "White Wine", "Sparkling Wine", "Red Wine", "White Wine", "Red Wine", "White Wine",
     "White Wine", "Sparkling Wine", "Red Wine", "Sparkling Wine","Red Wine"
];

const statusProduct = [
     "New", "Sale", "Sale", "", "Sale", "", "", "New", "Sale", "New",
     "Sale", "", "Sale", "New", "", "New", "Sale", "New", "", "New",
     "Sale", "New", "Sale", "", ""
];

console.log(wineName.length,location.length,price.length,rating.length,type.length,category.length,statusProduct.length);

// You can access the data from these arrays as needed for your website.

async function postProducts(apiUrl){
     try {
     
          let responce = await fetch(apiUrl,{
               method:"POST",

          })




     } catch (error) {
          console.log(error)
     }
     
}

