var voucher = {
  Topup: [
    {
      name: "300 UC",
      image: "img/voucher/voucher1.jpeg",
      sub: "PUBG Mobile",
      price: "Rp.50.000",
    },
    {
      name: "300 Point",
      image: "img/voucher/voucher2.jpeg",
      sub: "Valorant",
      price: "Rp.50.000",
    },
    {
      name: "257 Diamond",
      image: "img/voucher/voucher3.jpeg",
      sub: "Mobile Legends",
      price: "Rp.50.000",
    },
    {
      name: "355 Diamond",
      image: "img/voucher/voucher4.jpeg",
      sub: "Free Fire",
      price: "Rp.50.000",
    },
  ],
};

for (var key in voucher) {
  var judul = document.createElement("h2");
  judul.className = "text-center my-4";
  judul.innerHTML = key;
  document.getElementById("voucher").appendChild(judul);

  var cardGroup = document.createElement("div");
  cardGroup.className = "card-group";
  cardGroup.id = `${key}-voucher`;
  document.getElementById("voucher").appendChild(cardGroup);

  var row = document.createElement("div");
  row.className = "row";
  row.id = `${key}-voucher`;
  document.getElementById("voucher").appendChild(row);

  for (var i = 0; i < voucher[key].length; i++) {
    var nameVoucher = voucher[key][i].name;
    var imageVoucher = voucher[key][i].image;
    var subVoucher = voucher[key][i].sub;
    var priceVoucher = voucher[key][i].price;

    var col = document.createElement("div");
    col.className = "col-md-6 col-lg-3";
    col.innerHTML = `
    <div class="card mx-2 my-3 bg-dark text-light">
      <img src="${imageVoucher}" class="card-img-top" alt="..." width="100" height="250"/>
      <div class="card-body">
      <h5 class="card-title">${nameVoucher}</h5>
      <h6 class="card-subtitle mb-3 text-muted">${subVoucher}</h6>
      <p class="card-text d-flex justify-content-between">
        <span>Price</span>
        <span>${priceVoucher}</span>
      </p>
      <a onclick="chatToAdmin('${nameVoucher}','${subVoucher}','${priceVoucher}')" class="btn btn-light d-block">Buy Product</a>
    </div>
    `;
    document.getElementById(`${key}-voucher`).appendChild(col);
  }
}

chatToAdmin = (name, sub, price) => {
  var noHp = "+6287736688869";

  var message = `Halo Admin, saya ingin membeli ${name} ${sub} dengan harga ${price}`;
  window.open(`https://wa.me/${noHp}?text=${message}`);
};
