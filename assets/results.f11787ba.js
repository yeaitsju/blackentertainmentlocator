import"./modulepreload-polyfill.c7c6310f.js";const f=()=>{document.querySelector("#app").innerHTML=`
        <main class="container">
        <img id="logo1" src="../images/BELlogo1.png" />
        <div class="topnav">
          <div id="search_box">
              <div id="search"></div>
              <span id="cabe"></span>
          </div>
      
        <a class="active" href="../index.html#home">Home</a>
        <a href="../index.html#contact">Contact</a>
        <a href="../index.html#about">About</a>

      </div>
             

              <div class="searchForm">
                  <label for="browse">Select a City:</label>
                  <div class="select" style="width:200px;">
                        <select name="video type" id="location" required>
                            <option value="Phoenix, Az">Phoenix, Az</option>
                            <option value="Tampa, FL">Tampa, FL</option>
                            <option value="Chicago, IL">Chicago, IL</option>
                            <option value="Charlotte, NC">Charlotte, NC</option>
                        </select>
                  </div> 

                  <label for="browse">Category:</label>
                  <div class="select" style="width:200px;">
                          <select name="video type" id="category" required>
                              <option value="">All</option>
                              <option value="caribbean,bbq,soulfood,seafood">Restaurants</option>
                              <option value="unofficialyelpevents,yelpevents,musicvenues">Events</option>
                              <option value="coffeeshops,coffee">Coffee Shops</option>
                              <option value="healthtrainers,beautysvc">Health & Beatuy</option>
                              <option value="nightlife">Nightlife</option>
                              <option value="museums">Museum</option>
                          </select>
                  </div> 
              </div>

  

              <section class="list">list of businesses will go here</section>
              <section class="map" id="my_map"></section>
       

              <footer id="colophon" class="site-footer" role="contentinfo">
      <div class="social-wrapper">
        <ul>
          <li>
            <i class="fa-brands fa-twitter"></i>
          </li>
          <li>
            <i class="fa-brands fa-instagram"></i>
          </li>
          <li>
            <i class="fa-brands fa-linkedin"></i>
          </li>
          <li>
            <i class="fa-brands fa-facebook"></i>
          </li>
          <li>
            <i class="fa-brands fa-tiktok"></i>
          </li>
        </ul>
      </div>
      <nav class="footer-nav" role="navigation">
        <p id="footerp">
          Copyright &copy; 2022 Black Innovators. All rights reserved.
        </p>
      </nav>
    </footer>
  </body>
</html>

</main>
        `},r=["XxCPLbqy28fHQOywluzewA","uxrgAuu7Ifnn3OD3O4EBMQ","Sd5S6jtUbWGaEjNp4-6Ujg","DJRX-VM9TiIru6iq251AYQ","2MdRF3tS4pMEvxWBnX1QgQ","w0lcP2ngFaUpBGi5yzlYDw","a1esN1yBrh8c8jra-7WcXw","3PgXBoDzQNje8alccd2F3w","6HFVZzJu4VgazgmV73lQZA","0X_s2KTHYEMVxiqzFosYGA","jfuygC5obXthzRmcHc1uFA","s4nlPf6kXz97uk0yerqmHg","oMTXtSJzEiHudUY3T68sPg","uo_WEAEV7Q0nE_vqFY61Qw","mNGXU8LTMm9bAAAo-8LEQw","Djg4suxDMaSwmR_RkrxYBw","XBYalnLmnJH5OPNacRJIAA","VBoaaajtqB5vyyouPU2gAw","rQTIivOhjTa0mdGh1H4Jkg","H-3k7-4pQxoTmsjjAEET6w","yl_gnP_iQp2TaOTnMPHh0w","MjWEpStpfjfRYlJ0oHvRYA","CNGvDhh7PtdmMAJdsMfcFQ","6lPfM2AJIC6CZddrTvFYnA","9pCBrYwR5qBl0oThOyPJoA","MP7vvPXjScuNYG1AHJiJ5A","3en3UzByLjBDd0whFjYdTQ","QrQzUlYeFf_DIfX6M8UmdQ","vur1O8qz6oDGTy_0ktuTEA","M9mmqhzfzlGcNdu3ab-E-A","vejarta_y5__enmIHK_SLg","9u0UuZHOoPI5DhSGU9C_FQ","AkNKuz7LvwJcJN-ib-e8JA","K4ibWLIMnbqwLzVkAlHFzA","a-sBt0t2q_mwiD3jfxSvsQ","48Dt_W9zvvRWQoS7fH9RfA","teD-TIRExFu6KnWZpSle-w","SxsTH6pPcBv8V3Wv1r70gQ","ROdrl_sP6O-_d4rVZgPs4g","cydzZL5xw01hmSY1hU-sRQ","DM511Iy6SQo8r6UTf1fiyw","b1y6Hc10mYAgI4bhM1cfPQ","NhyfgaABV54xtSs23IDJdw","fC06KIrwhj3ou47VHG13GQ","Xx8GoYjEc0_2Ga37MHp5MA","CLDsoNSbHdhi_YuaeDXbpg","PIvyGEQsLq_BG8rg4h141w","aO1gAp41n8w8zpxTiHdLNA","MtzjOi57BkQrqF8wqNOyHg","PvGyzCh1PTga4ePE2-iB2Q","IVbvOKxV9mN1OuZBl-3_rA","x0HomuiWem4A49W9n8wrmg","zIELz5s9LknJgaawrwg0Zg","c-vfELJqRfUiGtSz0yVb_A","UuSg6Y3438tkXblGAfj0pQ","OyVe3FGLMUid268FSOYpAA","HyOQLCh019-Pf7jJaoEDsA"];let s;const h=e=>{s&&s.remove&&(s.off(),s.remove());const t=[e.businesses[0].coordinates.latitude,e.businesses[0].coordinates.longitude];s=L.map("my_map").setView(t,10),L.tileLayer.provider("Stamen.TonerLite").addTo(s);for(const o of e.businesses){let a="gray";r.includes(o.id)&&(a="#eed95b"),console.log(o.id,o.name);const p=`
  background-color: ${a};
  width: 3rem;
  height: 3rem;
  display: block;
  left: -1.5rem;
  top: -1.5rem;
  position: relative;
  border-radius: 3rem 3rem 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`,m=L.divIcon({className:"my-custom-pin",iconAnchor:[0,24],labelAnchor:[-6,0],popupAnchor:[0,-36],html:`<span style="${p}" />`});L.marker([o.coordinates.latitude,o.coordinates.longitude],{icon:m}).addTo(s).bindPopup(`
        <h3>${o.name}</h3>
        <img src="${o.image_url}" />
        <p>${o.display_phone}</p>
        <a href="${o.url}">More Info...</a>
    `)}};function d(e,t){let o=`https://www.apitutor.org/yelp/v3/businesses/search?location=${t}&categories=${e}&limit=50&term=black owned`;e=="museums"&&(o=`https://www.apitutor.org/yelp/v3/businesses/search?location=${t}&categories=${e}&limit=50`),console.log(o),fetch(o).then(a=>a.json()).then(a=>{a.businesses.length==0?alert("No BOB. Why?!?!"):(g(a),h(a))})}const g=e=>{console.log(e);const t=e.businesses.map(o=>(console.log(o.name,o.rating),v(o)));document.querySelector(".list").innerHTML=t.join("")};function v(e){let t="result";return r.includes(e.id)&&(t="result black-owned"),`
  <section class="${t}">
     <img src= "${e.image_url}"/>
     <div> 
          <h3>${e.name} </h3>
          <p>${e.display_phone}</p>
          <a href= "../details/index.html?businessid=${e.id}">More</a>
      </div>
  </section>
 `}function u(){const e=document.querySelector("#category").value,t=document.querySelector("#location").value;d(e,t)}f();document.querySelector("#location").addEventListener("change",u);document.querySelector("#category").addEventListener("change",u);const l=new Proxy(new URLSearchParams(window.location.search),{get:(e,t)=>e.get(t)});let c="Phoenix, Az",i="";l.city&&(c=l.city);l.category&&(i=l.category);l.city;console.log(l.city);console.log(l.category);document.querySelector("#location").value=c;const n=document.querySelectorAll("#category option");i=="restaurant"&&(n[1].selected="selected");i=="events"&&(n[2].selected="selected");i=="coffeeShop"&&(n[3].selected="selected");i=="healthBeauty"&&(n[4].selected="selected");i=="nightlife"&&(n[5].selected="selected");i=="museums"&&(n[6].selected="selected");c=document.querySelector("#location").value;i=document.querySelector("#category").value;console.log(i,c);d(i,c);
