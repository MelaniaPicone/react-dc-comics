function Header() {
const menu = [ {
  id: 1,
label: "Characters",
active: false,
href:"#"},

{ id: 2,
label: "Comics",
active: true,
href:"#"},

{ id: 3,
label: "Movies",
active: false,
href:"#"},

{ id: 4,
label: "TV",
active: false,
href:"#"},

{ id: 5,
label: "Games",
active: false,
href:"#"},

{ id: 6,
label: "Collectibles",
active: false,
href:"#"},

{ id: 7,
label: "Videos",
active: false,
href:"#"},

{ id: 8,
label: "Fans",
active: false,
href:"#"},

{ id: 9,
label: "News",
active: false,
href:"#"},

{ id: 10,
label: "Shop",
active: false,
href:"#"}
]



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