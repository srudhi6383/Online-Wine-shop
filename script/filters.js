import { fetchData } from "./product.js";
import { toggleHide, toggleCheckbox, filterItemsClicked } from "./utils.js";

let baseServerUrl = `http://localhost:3000`;
let productUrl = `${baseServerUrl}/products`;




const filterPrice = document.querySelector('.filter__price');
const filterCatagory = document.querySelector('.filter__category')
const filterType = document.querySelector('.filter__type')
const filterBody = document.querySelector('.filter__body')
const filterRating = document.querySelector('.filter__rating')
const filterCountry = document.querySelector('.filter__country')
const filterBrand = document.querySelector('.filter__brand')
const filterRegion = document.querySelector('.filter__region')
const filterGrape = document.querySelector('.filter__grape')
const filterVintageYear = document.querySelector('.filter__vintage-year')
const filterSize = document.querySelector('.filter__size')

filterCollection();

function filterCollection() {
     // Price

     const pricePlusIcon = document.querySelector('.filter__price .uil-plus');
     const priceLists = document.getElementById('priceList');
     const priceItem = priceLists.querySelectorAll('li');



     filterItemsClicked(priceItem)
     toggleHide(priceLists, pricePlusIcon, filterPrice);

     // Category

     const categoryPlus = document.querySelector('.filter__category .uil-plus');
     const categoryLists = document.getElementById('categoryList');
     const categoryItems = categoryLists.querySelectorAll('li');


     filterItemsClicked(categoryItems)
     toggleHide(categoryLists, categoryPlus, filterCatagory);

     // Type

     const typePlus = document.querySelector('.filter__type .uil-plus');
     const typeLists = document.getElementById('typeList');
     const typeItems = typeLists.querySelectorAll('li');

     filterItemsClicked(typeItems)
     toggleHide(typeLists, typePlus, filterType);


     const bodyPlus = document.querySelector('.filter__body .uil-plus');
     const bodyLists = document.getElementById('bodyList');
     const bodyItems = bodyLists.querySelectorAll('li');

     filterItemsClicked(bodyItems)
     toggleHide(bodyLists, bodyPlus, filterBody);



     const ratingPlus = document.querySelector('.filter__rating .uil-plus');
     const ratingLists = document.getElementById('ratingList');
     const ratingItems = ratingLists.querySelectorAll('li');

     filterItemsClicked(ratingItems)
     toggleHide(ratingLists, ratingPlus, filterRating);


     const countryPlus = document.querySelector('.filter__country .uil-plus');
     const countryLists = document.getElementById('countryList');
     const countryItems = countryLists.querySelectorAll('li');

     filterItemsClicked(countryItems)
     toggleHide(countryLists, countryPlus, filterCountry);


     const brandPlus = document.querySelector('.filter__brand .uil-plus');
     const brandList = document.getElementById('brandList');
     const brandItems = brandList.querySelectorAll('li');

     filterItemsClicked(brandItems)
     toggleHide(brandList, brandPlus, filterBrand);


     const regionPlus = document.querySelector('.filter__region .uil-plus');
     const regionLists = document.getElementById('regionList');
     const regionItems = regionLists.querySelectorAll('li');

     filterItemsClicked(regionItems)
     toggleHide(regionLists, regionPlus, filterRegion);



     const grapePlus = document.querySelector('.filter__grape .uil-plus');
     const grapeLists = document.getElementById('grapeList');
     const grapeItems = grapeLists.querySelectorAll('li');

     filterItemsClicked(grapeItems)
     toggleHide(grapeLists, grapePlus, filterGrape);


     const VintageYearPlus = document.querySelector('.filter__vintage-year .uil-plus');
     const VintageYearLists = document.getElementById('vintage-yearList');
     const VintageYearItems = VintageYearLists.querySelectorAll('li');

     filterItemsClicked(VintageYearItems)
     toggleHide(VintageYearLists, VintageYearPlus, filterVintageYear);


     const sizePlus = document.querySelector('.filter__size .uil-plus');
     const sizeList = document.getElementById('sizeList');
     const sizeItems = sizeList.querySelectorAll('li');

     filterItemsClicked(sizeItems)
     toggleHide(sizeList, sizePlus, filterSize);
}





