// import './style.css'
//using all the other files and initializing them
import { initLayout } from "./layout.js";
import { businessSearch, updateList } from "./business-search.js";

//here is where business search gets called/envoked

//intitializes the layout
initLayout();
//everytime dropdown menu is changed invokes the update list function
document.querySelector("#location").addEventListener("change", updateList);
document.querySelector("#category").addEventListener("change", updateList);
//kicks off the search so that it display whatever buisnesses in the city
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
let city = "Phoenix, Az";
let category = "";
if (params.city) {
  city = params.city;
}
if (params.category) {
  category = params.category;
}
params.city; //there may or may not be a URL query string for city
console.log(params.city);
console.log(params.category); //there may or may not be a URL query string for city
//   const $select = document.querySelector('#mySelect');
//   $select.value = 'steve'
document.querySelector("#location").value = city;
//what is being held in this is all of the categories
const categoriesoptions = document.querySelectorAll("#category option");
if (category == "restaurant") {
  categoriesoptions[1].selected = "selected";
}
if (category == "events") {
  categoriesoptions[2].selected = "selected";
}
if (category == "coffeeShop") {
  categoriesoptions[3].selected = "selected";
}
if (category == "healthBeauty") {
  categoriesoptions[4].selected = "selected";
}
if (category == "nightlife") {
  categoriesoptions[5].selected = "selected";
}
if (category == "museums") {
  categoriesoptions[6].selected = "selected";
}

city = document.querySelector("#location").value;
category = document.querySelector("#category").value;

console.log(category, city);
businessSearch(category, city);

{
  /* <select name="video type" id="category" required>
<option value="">All</option>
<option value="caribbean,bbq,soulfood,seafood">Restaurants</option>
<option value="unofficialyelpevents,yelpevents,musicvenues">Events</option>
<option value="coffeeshops,coffee">Coffee Shops</option>
<option value="healthtrainers,beautysvc">Health & Beatuy</option>
<option value="nightlife">Nightlife</option>
<option value="museums">Museum</option>
</select> */
}
