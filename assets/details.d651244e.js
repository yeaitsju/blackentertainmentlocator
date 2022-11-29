import"./modulepreload-polyfill.c7c6310f.js";function c(){var l=document.getElementById("MainImg"),s=document.getElementsByClassName("small-img");s[0].onclick=function(){l.src=s[0].src},s[1].onclick=function(){l.src=s[1].src},s[2].onclick=function(){l.src=s[2].src},s[3].onclick=function(){l.src=s[3].src}}function o(){fetch("https://www.apitutor.org/yelp/v3/businesses/6lPfM2AJIC6CZddrTvFYnA").then(i=>i.json()).then(i=>{console.log(i),e(i)})}function t(){fetch("https://www.apitutor.org/yelp/v3/businesses/3en3UzByLjBDd0whFjYdTQ/reviews").then(i=>i.json()).then(i=>{console.log(i)})}function e(l){const s=`
    <section class="container sbusiness my-5 pt-5">
        <div class="row mt-5">
            <div class="col-lg-5 col-md-12 col-12">
                <img class="img-fluid w-100 pb-1" src="${l.image_url}" id="MainImg" alt="">

                <div class="small-img-group">
                    <div class="small-img-col">
                        <img src="${l.image_url}" width="85px" height="85px" class="small-img" alt="">
                    </div>
                    <div class="small-img-col">
                        <img src="${l.photos[0]}" width="85px" height="85px" class="small-img" alt="">
                    </div>
                    <div class="small-img-col">
                        <img src="${l.photos[1]}" width="85px" height="85px" class="small-img" alt="">
                    </div>
                    <div class="small-img-col">
                        <img src="${l.image_url}" width="85px" height="85px" class="small-img" alt="">
                    </div>
                </div>
            </div>

            <div class="col-lg-6 col-md-12 col-12">
                <h3 class="py-4">${l.name}</h3>
                <h4>${l.location.address1}</h4>
                <h4>${l.location.address2}</h4>
                <h4>${l.location.city+", "+l.location.state+" "+l.location.zip_code}</h4>
                <h4>${l.display_phone}</h4>
                <span>Gotta figure out what to put here. sigh.....</span>
            </div>
        </div>
    </section>`;document.querySelector("#business-detail").innerHTML=s,c()}o();t();
