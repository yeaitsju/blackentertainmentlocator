import { blackBusinesses } from "./config";
import { initMap } from "./map.js";
//responsible for building all of the results
// step 1 go out & get info from yelp
//Go to the internet and get the info
function businessSearch(category, location) {
  let url = `https://www.apitutor.org/yelp/v3/businesses/search?location=${location}&categories=${category}&limit=50&term=black owned`;
  if (category == "museums") {
    url = `https://www.apitutor.org/yelp/v3/businesses/search?location=${location}&categories=${category}&limit=50`;
  }
  console.log(url);
  // const url = `https://www.apitutor.org/yelp/v3/businesses/search?location=${location}&categories=${category}&limit=50`;
  //going out to get this data from address above
  //7-8 once it gets the response it pulls down the json data. Final .then is now down and it will show the user in a card essentially
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      //once data comes back use it to display a list & make a map using that data Loops through
      if (myJson.businesses.length == 0) {
        alert("No BOB. Why?!?!");
      } else {
        displayBusinessList(myJson);
        //display map here
        initMap(myJson);
      }
    });
}

const displayBusinessList = (myJson) => {
  console.log(myJson);
  // let myCustomColour = 'gray'
  //   if(blackBusinesses.includes(business.id)){
  //       myCustomColour= '#eed95b'
  //   }
  //converting a list of json objects representing the businesses
  //and a list of html tags that we can display in our browser
  const sections = myJson.businesses.map((business) => {
    console.log(business.name, business.rating);

    return buildCard(business);
  });
  document.querySelector(".list").innerHTML = sections.join("");
};

function buildCard(business) {
  let className = "result";
  if (blackBusinesses.includes(business.id)) {
    className = "result black-owned";
  }
  return `
  <section class="${className}">
     <img src= "${business.image_url}"/>
     <div> 
          <h3>${business.name} </h3>
          <p>${business.display_phone}</p>
          <a href= "../details/index.html?businessid=${business.id}">More</a>
      </div>
  </section>
 `;
}
//this function is invoked on the location drop downs on the locations change event
//Requeries when someone changes the dropdown menu
function updateList() {
  const category = document.querySelector("#category").value;
  //reaching into the DOM and getting whatever the location the user just selected
  const location = document.querySelector("#location").value;
  businessSearch(category, location);
}

//Make both functions available to other files
export { businessSearch, updateList };
