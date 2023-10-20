const navbar = () => {
    return ` <div id="navbar">
    <div id="upper">
    <p id="content"><span id="ua">UA</span>|EN 0 800 123 456</p>
    <div id ="symbols">
        <a class="logos" href="./signin.html"><i class="fa-regular fa-user"></i></i></a>
        <a class="logos" href="./products.html"><i class="fa-solid fa-scale-unbalanced"></i></a>
        <a class="logos" href="./wishlist.html"><i class="fa-regular fa-heart"></i></a>
        <a class="logos" href="./cart.html"> <i class="fa-solid fa-bag-shopping"></i></a>
    </div> 
  </div>
<hr id="hr">
<div class="main-header">
    <div class="header-main-div">
        <h2 onclick="window.location.href='./index.html';" style="cursor:pointer">Mine Wine</h2>
    </div>
    <div class="header-options-div">
        <a href="./products.html"><p>RED</p></a>
        <a href="./products.html"><p>WHITE</p></a>
        <a href="./products.html"><p>ROSE</p></a>
        <a href="./products.html"><p>SPARKLING</p></a>
        <a href="./products.html"><p>PROMOTIONS</p></a>
        <a href="./products.html"><p>SETS & GIFTS</p></a>
    </div>
    <div class="start-typing-to-search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="TYPE TO SEARCH ...">
    </div>
</div>
<hr id="hr">
<div class="header-options-div-two">
    <a href="./products.html"><p>RED</p></a>
    <a href="./products.html"><p>WHITE</p></a>
    <a href="./products.html"><p>ROSE</p></a>
    <a href="./products.html"><p>SPARKLING</p></a>
    <a href="./products.html"><p>PROMOTIONS</p></a>
    <a href="./products.html"><p>SETS & GIFTS</p></a>
</div>
<hr id="hr" class="invisible-hr">
 `
  }
export default navbar