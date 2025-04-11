// function pilihDelivery(answer) {
//     if (answer === "dealer") {
//         document.getElementById("dealer").classList.remove("displayNone")
//         if (!document.getElementById("home").classList.contains("displayNone")) {
//             document.getElementById("home").classList.add("displayNone")
//         }
//     } else if (answer === "home") {
//         document.getElementById("home").classList.remove("displayNone")
//         if (!document.getElementById("dealer").classList.contains("displayNone")) {
//             document.getElementById("dealer").classList.add("displayNone")
//         }
//     } else {
//         document.getElementById("dealer").classList.add("displayNone")
//         document.getElementById("home").classList.add("displayNone")
//     }
// }

function filterCategory(category) {
    const allCards = document.querySelectorAll('.col');
    if (category === 'all') {
      allCards.forEach(card => {
        card.style.display = 'block';
      });
    } else {
      allCards.forEach(card => {
        if (card.classList.contains(category)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }
  }
  
  let databaseProduct = [
    {
      id: 1,
      merk: "honda", 
      img: "gambar/honda-beat.jpg", 
      altImg: "Motor Beat",
      productName: "Honda Beat 2024", 
      productPrice: 17000000, 
      productDesc: "Honda Beat 2024 kondisi masih prima dengan kilometer 15.000"},
    {
      id: 2, 
      merk: "honda", 
      img: "gambar/supra x.jpg", 
      altImg: "Motor Supra",
      productName: "Supra X 125", 
      productPrice: 18000000, 
      productDesc: "Honda Supra X 2024 kondisi mulus kilometer 10.000"},
    {
      id: 3, 
      merk: "yamaha", 
      img: "gambar/mio gear merah.jpg.png", 
      altImg: "Motor Mio Gear",
      productName: "Mio Gear", 
      productPrice: 19000000, 
      productDesc: "Yamaha Mio Gear 2023 kilometer 30.000 kondisi mulus seperti baru"},
    {
      id: 4, 
      merk: "yamaha", 
      img: "gambar/jupiter mx 150.jpg", 
      altImg: "Motor Jupiter",
      productName: "Jupiter 150", 
      productPrice: 16500000, 
      productDesc: "Yamaha Jupiter MX 150 2023 kilometer rendah di angka 20.000"},
    {
      id: 5, 
      merk: "suzuki", 
      img: "gambar/suzuki Nex Kuning.jpg", 
      altImg: "Motor Suzuki Next",
      productName: "Suzuki Nex", 
      productPrice: 15000000, 
      productDesc: "Motor keluaran suzuki terbaru memiliki tingkat efisien yang tinggi dengan kilometer 10.000"},
    {
      id: 6, 
      merk: "suzuki", 
      img: "gambar/suzuki smash biru.jpg", 
      altImg: "Motor Suzuki Smash",
      productName: "Suzuki Smash", 
      productPrice: 17800000, 
      productDesc: "Motor transmisi manual keluaran Suzuki terbaru tahun 2023 kilometer 25.000"},
    {
      id: 7, 
      merk: "kawasaki", 
      img: "gambar/2016_Kawasaki_ZX10-R.jpg", 
      altImg: "Motor ZX10",
      productName: "Kawasaki ZX10 - R", 
      productPrice: 261000000, 
      productDesc: "Motor Ninja buatan kawasaki tahun 2016 kilometer 100.000 mulus terawat"},
    {
      id: 8, 
      merk: "kawasaki", 
      img: "gambar/kawasaki 125.jpg", 
      altImg: "Motor Kawasaki 125",
      productName: "Kawasaki 125", 
      productPrice: 21000000, 
      productDesc: "Motor terobosan baru kawasaki dengan transmisi matic tahun 2025 kilometer 5.000"},
  ]
  
  let cardContent = document.getElementById("motors");
  
  //--- loop cards
  function dataContent() {
      let html = "";
    
      for (let i = 0; i < databaseProduct.length; i++) {
        html += `
          <div class="col ${databaseProduct[i].merk}">
            <div id="${databaseProduct[i].id}" class="card" style="width: 25;">
              <img src="${databaseProduct[i].img}" class="card-img-top" alt=${databaseProduct[i]}>
                <div class="card-body">
                <h5 class="card-title">${databaseProduct[i].productName}</h5>
                <h5>${databaseProduct[i].productPrice}</h6>
                <p class="card-text">${databaseProduct[i].productDesc}</p>
                <a href="#" class="btn btn-primary" onclick="addToCart(${databaseProduct[i].id})">Buy Now</a>
                </div>
            </div>
          </div>`;
      }
      cardContent.innerHTML = html;
    }
    dataContent();
  
  //--- pilihan  delivery
  function pilihDelivery(answer) {
    if (answer === "dealer") {
        document.getElementById("dealer").classList.remove("displayNone")
        if (!document.getElementById("home").classList.contains("displayNone")) {
            document.getElementById("home").classList.add("displayNone")
        }
    } else if (answer === "home") {
        document.getElementById("home").classList.remove("displayNone")
        if (!document.getElementById("dealer").classList.contains("displayNone")) {
            document.getElementById("dealer").classList.add("displayNone")
        }
    } else {
        document.getElementById("dealer").classList.add("displayNone")
        document.getElementById("home").classList.add("displayNone")
    }
  }
  
  
  //--- add ke database cart
  let databaseCart = []
  
  function addToCart(product) {
    let sudahDiCart = false
    for (let i = 0; i < databaseCart.length; i++) {
      if (databaseCart[i] === product) {
        sudahDiCart = true
      }
    }
    if (sudahDiCart) {
      productCartCard()
      alert("Motor sudah ditambahkan ke cart, coba yang lain!")
    } else {
    databaseCart.push(product)
    productCartCard()
    alert("Motor berhasil ditambahkan ke cart!")
    }
  }
  
  //--- menampilkan card produk yang dipilih
  let cartCards = document.getElementById("cartCards")
  
  function productCartCard() {
    let html = "";
    
    for (let i = 0; i < databaseProduct.length; i++) {
      for (let j = 0; j < databaseCart.length; j++) {
        if (databaseProduct[i].id == databaseCart[j]) {
            html += "<p>Ini sudah ditambah</p>"
            
            // html += `
            //     <div id="${databaseProduct[i].id}" class="card" style="width: 25;">
            //       <img src="${databaseProduct[i].img}" class="card-img-top" alt=${databaseProduct[i]}>
            //         <div class="card-body">
            //         <h5 class="card-title">${databaseProduct[i].productName}</h5>
            //         <h5>${databaseProduct[i].productPrice}</h6>
            //         </div>
            //     </div>`
          }
        }
      }
      cartCards.innerHTML = html;
    }
  