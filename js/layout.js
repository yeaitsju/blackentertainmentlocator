//this components job is to intialize the layout
import "../results.css";
//injects the entire html layout into the DOM
const initLayout = () => {
  document.querySelector("#app").innerHTML = `
        <main class="container">
        <img id="logo1" src="BELlogo1.png" />
        <div class="topnav">
          <div id="search_box">
              <div id="search"></div>
              <span id="cabe"></span>
          </div>
       
        <!-- "Once you've captured a visitor, you need to guide them through your website with ease so their user experience is pleasant. Your HTML links are vitat to guiding your user from one page on your website to another. -->

        <!-- Good HTML links increase a user's session time and can lead to more pages visited per session — two metrics that are important to web analytics." Semrush -->
        <!-- Examples of a href -->
        <!-- <a href="url">Link text or object</a> -->
        <!-- <a href="https://www.semrush.com/">Visit Semrush!</a> -->
        <a class="active" href="#home">Home</a>
        <!-- <a href="#photos">Photos</a> -->
        <a href="index.html#contact">Contact</a>
        <a href="index.html#about">About</a>

        <!-- <a href="#Photos">Photos</a> -->
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
       

              <footer id="colophon" class="site-footer" role=""contentinfo">
 
              <div class="social-wrapper">
                  <ul>
                      <li>
                          <a href="#" target="_blank">
                          <i class="fa-brands fa-twitter"></i>
                          </a>
                      </li>
                      <li>
                          <a href="#" target="_blank">
                          <i class="fa-brands fa-instagram"></i> 
                          </a> 
                      </li>
                      <li>
                          <a href="#" target="_blank">
                          <i class="fa-brands fa-linkedin"></i>
                          </a>
                      </li>
                      <li>
                          <a href="#" target="_blank">
                          <i class="fa-brands fa-facebook"></i>
                          </a>
                      </li>
                      <li>
                          <a href="#" target="_blank">
                          <i class="fa-brands fa-tiktok"></i>
                          </a>
                      </li>
                  </ul>
              </div> 
              <nav class="footer-nav" role="navigation">
                  <p>
                      Copyright &copy; 2022 Black Innovators. All rights reserved.
                  </p>
              </nav>
          </footer>
</main>
        `;
};

//Making the function available to the other files
export { initLayout };
