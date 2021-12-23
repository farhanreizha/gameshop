var game = {
  Game: [
    {
      name: "Watchdogs Legion",
      image: "img/gameimage/game1.jpeg",
      edition: "Standard Edition",
      genre: "Action",
      platform: "PC",
      release: "2019",
      price: "Rp.284.000",
    },
    {
      name: "Grand Theft Auto V",
      image: "img/gameimage/game2.jpeg",
      edition: "Premium Edition",
      genre: "Action",
      platform: "PC",
      release: "2015",
      price: "Rp.148.000",
    },
    {
      name: "Red Dead Redemption 2",
      image: "img/gameimage/game3.jpeg",
      edition: "Standard Edition",
      genre: "Action",
      platform: "PC",
      release: "2019",
      price: "Rp.640.000",
    },
    {
      name: "Dead By Daylight",
      image: "img/gameimage/game4.jpeg",
      edition: "Standard Edition",
      genre: "Action",
      platform: "PC",
      release: "2016",
      price: "Rp.135.000",
    },
  ],
};

for (var key in game) {
  var judulGames = document.createElement("h2");
  judulGames.className = "text-center my-4";
  judulGames.innerHTML = key;
  document.getElementById("game").appendChild(judulGames);

  var cardGroupGames = document.createElement("div");
  cardGroupGames.className = "card-group";
  cardGroupGames.id = `${key}-game`;
  document.getElementById("game").appendChild(cardGroupGames);

  var rowGames = document.createElement("div");
  rowGames.className = "row";
  rowGames.id = `${key}-game`;
  document.getElementById("game").appendChild(rowGames);

  for (var i = 0; i < game[key].length; i++) {
    var nameGame = game[key][i].name;
    var imageGame = game[key][i].image;
    var editionGame = game[key][i].edition;
    var genreGame = game[key][i].genre;
    var platformGame = game[key][i].platform;
    var releaseGame = game[key][i].release;
    var priceGame = game[key][i].price;

    var colGames = document.createElement("div");
    colGames.className = "col-md-6 col-lg-3";
    colGames.innerHTML = `
    <div id="cards" class="card mx-2 my-3 bg-dark text-light">
      <img src="${imageGame}" class="card-img-top" alt="..." width="100" height="250"/>
      <div class="card-body">
      <h5 class="card-title">${nameGame}</h5>
      <h6 class="card-subtitle mb-3 text-muted">${editionGame}</h6>
      <p class="card-text d-flex justify-content-between">
        <span><i class="fa fa-desktop"></i> Platform</span>
        <span>${platformGame}</span>
      </p>
      <p class="card-text d-flex justify-content-between">
        <span>Genre</span>
        <span>${genreGame}</span>
      </p>
      <p class="card-text d-flex justify-content-between">
        <span>Release</span>
        <span>${releaseGame}</span>
      </p>
      <p class="card-text d-flex justify-content-between">
        <span><i class="fas fa-tag "></i> Price</span>
        <span>${priceGame}</span>
      </p>
      <a onclick="chatKeAdmin('${nameGame}','${editionGame}','${priceGame}')" class="btn btn-light d-block">Buy Product</a>
    </div>
    `;
    document.getElementById(`${key}-game`).appendChild(colGames);
  }
}

chatKeAdmin = (name, edition, price) => {
  var noHp = "+6287736688869";

  var message = `
  Halo Admin, saya ingin membeli game ${name} dengan harga ${price} yang ${edition}`;
  window.open(`https://wa.me/${noHp}?text=${message}`);
};
