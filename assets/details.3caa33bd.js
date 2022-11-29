import"./modulepreload-polyfill.c7c6310f.js";function t(){var l=document.getElementById("MainImg"),i=document.getElementsByClassName("small-img");i[0].onclick=function(){l.src=i[0].src},i[1].onclick=function(){l.src=i[1].src},i[2].onclick=function(){l.src=i[2].src},i[3].onclick=function(){l.src=i[3].src}}function e(l){let i=`https://www.apitutor.org/yelp/v3/businesses/${l}`;fetch(i).then(s=>s.json()).then(s=>{console.log(s),m(s)})}function n(l){let i=`https://www.apitutor.org/yelp/v3/businesses/${l}/reviews`;fetch(i).then(s=>s.json()).then(s=>{console.log(s)})}function m(l){const i=`
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
    </section>`;document.querySelector("#business-detail").innerHTML=i,t()}const o=new Proxy(new URLSearchParams(window.location.search),{get:(l,i)=>l.get(i)});let c="6lPfM2AJIC6CZddrTvFYnA";o.businessid&&(c=o.businessid);e(c);n(c);
