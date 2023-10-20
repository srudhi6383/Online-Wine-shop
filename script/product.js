// import { createFilterItems } from "./filters.js";
import { createFilterFunction } from "./utils.js";

let baseServerUrl = `http://localhost:3000`;
let productUrl = `${baseServerUrl}/products`;

fetchData(productUrl);

export async function fetchData(apiUrl,quaryString) {
  try {
    let response = await fetch(`${apiUrl}?${quaryString}`);
    let data = await response.json();

    getFilterData(data);
    console.log(data)
    createCards(data);
  } catch (error) {
    console.log(error);
  }
}

// Usage
const filterTypes = createFilterFunction("type");
const filterCountryOfOrigin = createFilterFunction("countryOfOrigin");
const filterBrandName = createFilterFunction("brand");
const filterRegion = createFilterFunction("region");
const filterGrapeVariety = createFilterFunction("grapeVariety");
const filterVintageYear = createFilterFunction("vintageYear");
const filterSize = createFilterFunction("size");
const filterCatagory = createFilterFunction("catagory");
const filterBody = createFilterFunction("body");
const filterRating = createFilterFunction("rating");

function getFilterData(data) {
  // filters
  const bodyLists = document.getElementById('bodyList');
  const typeLists = document.getElementById('typeList');
  const categoryLists = document.getElementById('categoryList');
  const priceLists = document.getElementById('priceList');
  const ratingLists = document.getElementById('ratingList');
  const countryLists = document.getElementById('countryList');
  const brandLists = document.getElementById('brandList');
  const regionLists = document.getElementById('regionList');
  const grapeLists = document.getElementById('grapeList');
  const VintageYearList = document.getElementById('vintage-yearList');
  const sizeLists = document.getElementById('sizeList');

  const filterPrice = document.querySelector('.filter__price');
  const filterCatagorys = document.querySelector('.filter__category')
  const filterType = document.querySelector('.filter__type')
  const filterBodys = document.querySelector('.filter__body')
  const filterRatings = document.querySelector('.filter__rating')
  const filterCountry = document.querySelector('.filter__country')
  const filterBrand = document.querySelector('.filter__brand')
  const filterRegions = document.querySelector('.filter__region')
  const filterGrape = document.querySelector('.filter__grape')
  const filterVintageYears = document.querySelector('.filter__vintage-year')
  const filterSizes = document.querySelector('.filter__size')

  const price = [
    "Under - $10",
    "$11 - $15",
    "$16 - $20",
    "$21 - $25",
    "$26 - $30",
  ]



  // Example usage:
  const uniqueTypes = filterTypes(data);
  const uniqueOrigin = filterCountryOfOrigin(data);
  const uniqueBrandName = filterBrandName(data);
  const uniqueRegion = filterRegion(data);
  const uniqueGrapeVariety = filterGrapeVariety(data);
  const uniqueVintageYear = filterVintageYear(data);
  const uniqueSize = filterSize(data);
  const uniqueCatagory = filterCatagory(data);
  const uniqueBody = filterBody(data);
  const uniqueRating = filterRating(data);


  createFilterItems(price, priceLists, filterPrice)
  createFilterItems(uniqueCatagory, categoryLists, filterCatagorys)
  createFilterItems(uniqueTypes, typeLists, filterType)
  createFilterItems(uniqueBody, bodyLists, filterBodys)
  createFilterItems(uniqueRating, ratingLists, filterRatings)
  createFilterItems(uniqueOrigin, countryLists, filterCountry)
  createFilterItems(uniqueBrandName, brandLists, filterBrand)
  createFilterItems(uniqueRegion, regionLists, filterRegions)
  createFilterItems(uniqueGrapeVariety, grapeLists, filterGrape)
  createFilterItems(uniqueVintageYear, VintageYearList, filterVintageYears)
  createFilterItems(uniqueSize, sizeLists, filterSizes)
}

function createFilterItems(data, filterItemsContainer, filterElement) {

  filterItemsContainer.innerHTML = "";

  const elementText = filterElement.textContent.trim();
  data.forEach(item => {
    const list = document.createElement('li');
    const itemText = document.createElement('p');
    const squareIcon = document.createElement('i');
    const checked = document.createElement('i');

    squareIcon.classList.add('uil', 'uil-glass-martini-alt');
    checked.classList.add('uil', 'uil-check','hide');

    itemText.appendChild(squareIcon);
    itemText.innerHTML += ` ${item}`;
    list.append(itemText, checked);

    filterItemsContainer.appendChild(list);
    

    list.addEventListener('click', (e) => {
      e.stopPropagation();

      filterFunctionlity(item, 'Catagory', elementText)
      filterFunctionlity(item, 'Type', elementText)
      filterFunctionlity(item, 'Body', elementText)
      filterFunctionlity(item, 'Brand', elementText)
      filterFunctionlity(item, 'Region', elementText)
      filterFunctionlity(item, 'Size', elementText)

      filterSeperate(item,elementText)

      // filterFunctionlity(item, 'Country of origin', elementText)
      // filterFunctionlity(item, 'Grape varitry', elementText)
      // filterFunctionlity(item, 'Vintage year', elementText)

      checked.classList.toggle('hide')
      checked.style.color = 'green'
      list.classList.toggle('color-toggle')
      // console.log(checked)
      // filter 

    });
  });
}
function filterFunctionlity(item, filter, element) {
  if (element === filter) {
    fetchData(productUrl,`${filter.toLowerCase()}=${item}`)
    alert("working")
  }
}

function filterSeperate(item,  element){
  if(element === 'Country of origin'){
    fetchData(productUrl,`countryOfOrigin=${item}`)
    alert("Country of origin working")
  }else if(element === 'Grape varitry'){
    fetchData(productUrl,`grapeVariety=${item}`)
    alert("Grape varitry working")
  }else if(element === 'Vintage year'){
    fetchData(productUrl,`vintageYear=${item}`)
    alert("Grape varitry working")
  }else{
    if (item === 'Under - $10') {
      fetchData(productUrl, `price_lte=9`);
    } else if (item === '$11 - $15') {
      fetchData(productUrl, `price_lte=14&price_gte=11`);
    } else if (item === '$16 - $20') {
      fetchData(productUrl, `price_lte=20&price_gte=16`);
    } else if (item === '$21 - $25') {
      fetchData(productUrl, `price_lte=25&price_gte=21`);
    } else if (item === '$26 - $30') {
      fetchData(productUrl, `price_lte=30&price_gte=26`);
    }
  }
}

// create cards

const mainContainer = document.querySelector('.products__container');


function createCards(data){
    mainContainer.innerHTML = '';

    const productCard = document.createElement('div');
    productCard.classList.add('products')
    data.forEach(item=>{
      const card = document.createElement('div');
      card.classList.add('product')

      const firstSection = document.createElement('div');
      firstSection.classList.add('first-section');

      const firstDiv = document.createElement('div')

      const starIcon = document.createElement('i');
      starIcon.classList.add('uis','uis-favorite')


      const rating = document.createElement('span');
      rating.innerHTML = item.rating;

      const productCode = document.createElement('p');
      productCode.innerHTML = `Product Code: ${item.productCode}`

      const secondDiv = document.createElement('div')

      const balancedIcons = document.createElement('i');
      balancedIcons.classList.add('uil',item.compare)

      const likeIcon = document.createElement('i');
      likeIcon.classList.add('uil',item.favorites)


      firstDiv.append(starIcon,rating,productCode)
      secondDiv.append(balancedIcons,likeIcon)

      firstSection.append(firstDiv,secondDiv);

      const secondSection = document.createElement('div');
      secondSection.classList.add('second-section');

      const productImage = document.createElement('div');
      productImage.classList.add('product-image');

      const photo = document.createElement('img');
      photo.src = baseServerUrl + item.image

      productImage.append(photo)
      secondSection.append(productImage);

      const thirdSection = document.createElement('div');
      thirdSection.classList.add('third-section')

      const title = document.createElement('h4');
      title.innerHTML = `${item.name}, ${item.location}`

      thirdSection.append(title)

      const fourSection = document.createElement('div');
      fourSection.classList.add('four-section','flex-jsbetween')

      



      card.append(firstSection,secondSection,thirdSection);

      productCard.append(card);
    })
    mainContainer.append(productCard)
}

