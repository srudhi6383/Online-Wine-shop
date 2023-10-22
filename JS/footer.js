function footerAdd() {
  let foot = document.getElementById("wrapper");

  foot.innerHTML = `<div id="bottom">
        <div id="main">
          <div class="inner">
            <h2>CATALOG</h2>
            <p>Red wine</p>
            <p>White wine</p>
            <p>Rose wine</p>
            <p>Sparkling wine</p>
            <p>Promotions</p>
            <p>Sets and Gifts</p>
          </div>
          <div class="inner">
            <h2>SUPPORT</h2>
            <p>FAQ</p>
            <p>Terms of use</p>
            <p>Privacy Policy</p>
            <p>Delivery and payment</p>
            <p>Return and exchange</p>
          </div>
          <div class="inner">
            <h2>OUR COMPANY</h2>
            <p>About us</p>
            <p>Contact us</p>
            <p>Reviews</p>
            <p>Blog and news</p>
            <p>Loyalty Program</p>
            <p>Wine subscription</p>
          </div>

          <div class="inner">
            <h2>CONTACT</h2>
            <p>0 800 123 456</p>
            <p>info@minewine.com</p>

            <h2>ADDRESS:</h2>
            <p>Ukraine</p>
            <p>Kyiv.Bazhana St, 17</p>

            <h2>WORKING HOURS</h2>
            <p>Mon-Fri 9:00-20:00</p>
            <p>Sat-Sun 10:00-18:00</p>

            <div class="pic">
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>

          <div>
            <h2>Subscribe to our newsletter</h2>
            <p>and get 20% on your first order</p>
            <input type="text" placeholder="example@gmail.com" />
          </div>
        </div>

        <div class="lastFooterDiv">
          <h1>Mine Wine</h1>
          <div>
            <p>we only sell alcohol to adult</p>
            <p>@Mine Wine 2023 All rights reserved.</p>
          </div>
        </div>
      </div>`;
}
footerAdd();
export default footerAdd;
