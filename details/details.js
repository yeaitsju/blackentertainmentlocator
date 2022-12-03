import "./details.css";
import "./footer.css";

// Image carousel
function makeCarousel() {
  var MainImg = document.getElementById("MainImg");
  var smallimg = document.getElementsByClassName("small-img");

  smallimg[0].onclick = function () {
    MainImg.src = smallimg[0].src;
  };
  smallimg[1].onclick = function () {
    MainImg.src = smallimg[1].src;
  };
  smallimg[2].onclick = function () {
    MainImg.src = smallimg[2].src;
  };
  smallimg[3].onclick = function () {
    MainImg.src = smallimg[3].src;
  };
}

function getBusinessDetails(businessid) {
  //let businessId = "3en3UzByLjBDd0whFjYdTQ";
  let url = `https://www.apitutor.org/yelp/v3/businesses/${businessid}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayBusiness(data);
    });
}

function getBusinessReviews(businessid) {
  // let businessId = "3en3UzByLjBDd0whFjYdTQ";
  let url = `https://www.apitutor.org/yelp/v3/businesses/${businessid}/reviews`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayReviews(data);
    });
}
function displayBusiness(businessData) {
  const template = `
    <section class="container sbusiness my-5 pt-5">
        <div class="row mt-5">
            <div class="col-lg-5 col-md-12 col-12">
                <img class="img-fluid w-100 pb-1" src="${
                  businessData.image_url
                }" id="MainImg" alt="">

                <div class="small-img-group">
                    <div class="small-img-col">
                        <img src="${
                          businessData.photos[0]
                        }" width="85px" height="85px" class="small-img" alt="">
                    </div>
                    <div class="small-img-col">
                        <img src="${
                          businessData.photos[1]
                        }" width="85px" height="85px" class="small-img" alt="">
                    </div>
                    <div class="small-img-col">
                        <img src="${
                          businessData.image_url
                        }" width="85px" height="85px" class="small-img" alt="">
                    </div>
                    <div class="small-img-col">
                        <img src="${
                          businessData.photos[2]
                        }" width="85px" height="85px" class="small-img" alt="">
                    </div>
                </div>
            </div>
            
            <div class="col-lg-6 col-md-12 col-12">
           
                <h3 class="py-4">${businessData.name}</h3>
                
                <h4>${businessData.location.address1}</h4>
               
                <h4>${
                  businessData.location.city +
                  ", " +
                  businessData.location.state +
                  " " +
                  businessData.location.zip_code
                }</h4>
                <h4>${businessData.display_phone}</h4>
                <span id="business-reviews"> </span>
            </div>
          
        </div>
    </section>`;
  document.querySelector("#business-detail").innerHTML = template;
  makeCarousel();
  getBusinessReviews(businessid);
}
// function displayReviews(reviewsData) {
//   console.log(reviewsData);
//   const review = reviewsData.reviews[0];
//   const template = `
//                 <span>${review.text}</span>
//             `;
//   document.querySelector("#business-reviews").innerHTML = template;
// }
function displayReviews(reviewsData) {
  console.log(reviewsData);
  const review = reviewsData.reviews[0];
  const review2 = reviewsData.reviews[1];
  const review3 = reviewsData.reviews[2];
  const template = `
                <br>
                <h3>CUSTOMER REVIEWS</h3>
                <hr>
                <br>
                <span>1. ${review.text}</span>
                <br>
                <br>
                <span>2. ${review2.text}</span>
                <br>
                <br>
                <span>3. ${review3.text}</span>
            `;
  document.querySelector("#business-reviews").innerHTML = template;
}

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
let businessid = "6lPfM2AJIC6CZddrTvFYnA";

if (params.businessid) {
  businessid = params.businessid;
}

getBusinessDetails(businessid);

// {/* <aside>
// <img id="ad" src="/public/images/AD.jpg" />
// <h1>Your <br>Ad <br>Here</h1>
// </aside> */}

{
  /* <span>${review.text}-${review.rating}</span> */
}
