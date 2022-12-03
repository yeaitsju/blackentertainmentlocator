//this components job is to intialize the layout
import "../results.css";
//injects the entire html layout into the DOM
const initLayout = () => {
  document.querySelector("#app").innerHTML = `
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
        `;
};

//Making the function available to the other files
export { initLayout };
