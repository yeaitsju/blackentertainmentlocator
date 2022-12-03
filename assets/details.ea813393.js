import"./modulepreload-polyfill.c7c6310f.js";function o(){var s=document.getElementById("MainImg"),i=document.getElementsByClassName("small-img");i[0].onclick=function(){s.src=i[0].src},i[1].onclick=function(){s.src=i[1].src},i[2].onclick=function(){s.src=i[2].src},i[3].onclick=function(){s.src=i[3].src}}function t(s){let i=`https://www.apitutor.org/yelp/v3/businesses/${s}`;fetch(i).then(l=>l.json()).then(l=>{console.log(l),m(l)})}function n(s){let i=`https://www.apitutor.org/yelp/v3/businesses/${s}/reviews`;fetch(i).then(l=>l.json()).then(l=>{console.log(l),r(l)})}function m(s){const i=`
    <section class="container sbusiness my-5 pt-5">
        <div class="row mt-5">
            <div class="col-lg-5 col-md-12 col-12">
                <img class="img-fluid w-100 pb-1" src="${s.image_url}" id="MainImg" alt="">

                <div class="small-img-group">
                    <div class="small-img-col">
                        <img src="${s.photos[0]}" width="85px" height="85px" class="small-img" alt="">
                    </div>
                    <div class="small-img-col">
                        <img src="${s.photos[1]}" width="85px" height="85px" class="small-img" alt="">
                    </div>
                    <div class="small-img-col">
                        <img src="${s.image_url}" width="85px" height="85px" class="small-img" alt="">
                    </div>
                    <div class="small-img-col">
                        <img src="${s.photos[2]}" width="85px" height="85px" class="small-img" alt="">
                    </div>
                </div>
            </div>
            
            <div class="col-lg-6 col-md-12 col-12">
           
                <h3 class="py-4">${s.name}</h3>
                
                <h4>${s.location.address1}</h4>
                <h4>${s.location.address2}</h4>
                <h4>${s.location.city+", "+s.location.state+" "+s.location.zip_code}</h4>
                <h4>${s.display_phone}</h4>
                <span id="business-reviews"> </span>
            </div>
          
        </div>
    </section>`;document.querySelector("#business-detail").innerHTML=i,o(),n(c)}function r(s){console.log(s);const l=`
                <span>${s.reviews[0].text}</span>
            `;document.querySelector("#business-reviews").innerHTML=l}const e=new Proxy(new URLSearchParams(window.location.search),{get:(s,i)=>s.get(i)});let c="6lPfM2AJIC6CZddrTvFYnA";e.businessid&&(c=e.businessid);t(c);
