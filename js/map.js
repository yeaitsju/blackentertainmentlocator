import {blackBusinesses} from "./config";
let mymap;
// console.log (blackBusinesses);
const initMap=(myJson)=>{

//if a map exist it will be destroyed. Each time we init map we build a brand new map and remove current arrows and builds a new one with new arrows
    if (mymap && mymap.remove) {
        mymap.off();
        mymap.remove();
      }
      
    // document.querySelector(".map").innerHTML="map goes here";
    //initialize map:
// 33.4478679,-112.0550887,17z
const center = [myJson.businesses[0].coordinates.latitude, myJson.businesses[0].coordinates.longitude]
 mymap = L.map('my_map').setView(center, 10);

//initialize tiles (there are many options):
L.tileLayer.provider('Stamen.TonerLite').addTo(mymap);
// L.tileLayer.provider('Stamen.Watercolor').addTo(mymap);
// L.tileLayer.provider('Stamen.Terrain').addTo(mymap);
// L.tileLayer.provider('Stamen.TerrainBackground').addTo(mymap);
// L.tileLayer.provider('Stamen.Toner').addTo(mymap);
// L.tileLayer.provider('Stamen.TonerBackground').addTo(mymap);
// L.tileLayer.provider('Stamen.TonerHybrid').addTo(mymap);
// L.tileLayer.provider('Stamen.TonerLines').addTo(mymap);
// L.tileLayer.provider('Stamen.TonerLabels').addTo(mymap);
// https://www.digitalocean.com/community/tutorials/for-loops-for-of-loops-and-for-in-loops-in-javascript#for-of-loop
for (const business of myJson.businesses) {
    // make the marker:
    // console.log (business);
    // console.log (business.coordinates);
    // console.log ([business.coordinates.latitude, business.coordinates.longitude])
    let myCustomColour = 'gray'
    if(blackBusinesses.includes(business.id)){
        myCustomColour= '#eed95b'
    }
    console.log (business.id, business.name);


const markerHtmlStyles = `
  background-color: ${myCustomColour};
  width: 3rem;
  height: 3rem;
  display: block;
  left: -1.5rem;
  top: -1.5rem;
  position: relative;
  border-radius: 3rem 3rem 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`

const myIcon = L.divIcon({
  className: "my-custom-pin",
  iconAnchor: [0, 24],
  labelAnchor: [-6, 0],
  popupAnchor: [0, -36],
  html: `<span style="${markerHtmlStyles}" />`
})

    const marker = L.marker(
        [business.coordinates.latitude, business.coordinates.longitude],
        {icon: myIcon}
    ).addTo(mymap);
    // make the popup:
    marker.bindPopup(`
        <h3>${business.name}</h3>
        <img src="${business.image_url}" />
        <p>${business.display_phone}</p>
        <a href="${business.url}">More Info...</a>
    `);

}
}
export {initMap};