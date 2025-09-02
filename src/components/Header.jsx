function Header() {
  return (
<header>
<div className="container">
  <div className="row">

    <div className="col-25">
      <div id="logo-header">
        <img src="src/assets/img/dc-logo.png" />
      </div>
    </div>

    <div className="col-75">
      <div id="menu">
        <li><a href="#">Characters</a></li>
        <li><a href="#">Comics</a></li>
        <li><a href="#">Movies</a></li>
        <li><a href="#">Tv</a></li>
        <li><a href="#">Games</a></li>
        <li><a href="#">Collectibles</a></li>
        <li><a href="#">Videos</a></li>
        <li><a href="#">Fans</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Shop</a></li>
      </div>
    </div>
  </div>
</div>

</header>

  );
}

export default Header;