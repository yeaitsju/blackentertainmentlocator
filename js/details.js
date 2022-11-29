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

function getBusinessDetails() {
  let businessId = "6lPfM2AJIC6CZddrTvFYnA";
  //let businessId = "3en3UzByLjBDd0whFjYdTQ";
  let url = `https://www.apitutor.org/yelp/v3/businesses/${businessId}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayBusiness(data);
    });
}

function getBusinessReviews() {
  let businessId = "3en3UzByLjBDd0whFjYdTQ";
  let url = `https://www.apitutor.org/yelp/v3/businesses/${businessId}/reviews`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //   displayBusiness(data);
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
                          businessData.image_url
                        }" width="85px" height="85px" class="small-img" alt="">
                    </div>
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
                </div>
            </div>

            <div class="col-lg-6 col-md-12 col-12">
                <h3 class="py-4">${businessData.name}</h3>
                <h4>${businessData.location.address1}</h4>
                <h4>${businessData.location.address2}</h4>
                <h4>${
                  businessData.location.city +
                  ", " +
                  businessData.location.state +
                  " " +
                  businessData.location.zip_code
                }</h4>
                <h4>${businessData.display_phone}</h4>
                <span>Gotta figure out what to put here. sigh.....</span>
            </div>
        </div>
    </section>`;
  document.querySelector("#business-detail").innerHTML = template;
  makeCarousel();
}

getBusinessDetails();
getBusinessReviews();
