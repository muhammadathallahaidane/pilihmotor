
// home page function
//--- input local storage
function handleSubmit(e) {
  e.preventDefault();

  let userName = document.getElementById("inputUsernameReg").value;
  let email = document.getElementById("inputEmailReg").value;
  let password = document.getElementById("inputPasswordReg").value;

  localStorage.setItem("userName", userName)
  localStorage.setItem("email", email)
  localStorage.setItem("password", password)
}

//---  cek validasi register
function handleRegister() {
  let userName = document.getElementById("inputUsernameReg").value;
  let email = document.getElementById("inputEmailReg").value;
  let password = document.getElementById("inputPasswordReg").value;
  let confirmPassword = document.getElementById("confirmPasswordReg").value

  if (!userName) {
    alert("Nama tidak boleh kosong")
  } else if (!email) {
    alert("Email tidak boleh kosong")
  } else if (password.length < 6) {
    alert("Password tidak sesuai")
  } else if (password !== confirmPassword) {
    alert("Password tidak sesuai")
  } else {
    window.location.assign("productPage.html")
  }
}

// main page function

function changePageUserName () {
    let userNameElement = document.getElementById("liUserName"); // Ditemukan di productPage.html
    let cartUserElement = document.querySelector(".judul h4"); // Ditemukan di cartPage.html
    let userName = localStorage.getItem("userName");
  
    // Update di productPage (jika element ada)
    if (userNameElement) {
      userNameElement.innerHTML = `Halo, ${userName}!`;
    }
  
    // Update di cartPage (jika element ada)
    if (cartUserElement && userName) {
      cartUserElement.textContent = `Hai ${userName}, Yuk review cart kamu!`; 
    }
  }
  //---- Versi 1
  // let inPageUserName = document.getElementById("liUserName").innerHTML
  // let userName = localStorage.getItem("userName");
  // if (inPageUserName !== userName) {
  //   document.getElementById("liUserName").innerHTML = `Halo, ${userName}!`
  // }

changePageUserName()

//--- filter product
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
  // dataContent()
  if (window.location.pathname.includes("productPage.html")) {
    dataContent();
  }

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
function addToCart(productId) {
  let storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  if (!storedCart.includes(productId)) {
    storedCart.push(productId);
    localStorage.setItem('cart', JSON.stringify(storedCart));
    alert("Motor berhasil ditambahkan ke cart!");
    // Memperbarui tampilan cart langsung setelah produk ditambahkan
    productCartCard();
  } else {
    alert("Motor sudah ada di cart!");
  }
}
// let databaseCart = []

// function addToCart(product) {
//   let sudahDiCart = false
//   for (let i = 0; i < databaseCart.length; i++) {
//     if (databaseCart[i] === product) {
//       sudahDiCart = true
//     }
//   }
//   if (sudahDiCart) {
//     productCartCard()
//     alert("Motor sudah ditambahkan ke cart, coba yang lain!")
//   } else {
//   databaseCart.push(product)
//   productCartCard()
//   alert("Motor berhasil ditambahkan ke cart!")
//   }
// }

//--- menampilkan card produk yang dipilih

function productCartCard() {
  let html = `
  <table class="table">
  <tbody>
  `;
  
  let storedCart = JSON.parse(localStorage.getItem('cart')) || [];

  storedCart.forEach(productId => {
    let product = databaseProduct.find(item => item.id === productId);
    if (product) {
      html += `
      <tr>
      <td>${product.productName}</td>
      <td><button type="button" class="btn btn-danger btn-sm" onclick="deleteCartItem(this)">Delete</button></td>
      </tr>`;
      }
    });
    
    html += `
    </tbody>
    </table>
    `;
    
    document.getElementById("cartCards").innerHTML = html;
    changePageUserName();
  }

//--- Menghapus item dari cart
function deleteCartItem(button) {
  // Mengambil row dari tombol yang diklik dan menghapusnya
  let row = button.closest("tr");
  row.remove();
}

// function deleteCartItem() {
  //   let element = document.querySelector("div#cartCards div");
  //   element.remove()
// }


//--- Menampilkan alert setelah checkout
function checkout() {
    alert("Terima kasih sudah berbelanja di pilihMotor");
  }


// function readData() {
//   let template = ""
//   let containerData = document.getElementById("container-data")

//   for (let i = 0; i < databaseProduct.length; i++) {
//       const perObj = databaseProduct[i]; 

//       template += `<tr>
//           <td>${i + 1}</td>
//           <td>${perObj.productName}</td>
//           <td>${perObj.productPrice}</td>
//           <td>${perObj.productDesc}</td>
//       </tr>`
//   }
//   containerData.innerHTML = template
// }
// // readData()
// console.log(readData());


// let carsContent = document.getElementById("motors");

// function dataContent() {
//     let html = "";
  
//     for (let i = 0; i < databaseProduct.length; i++) {
//       let harga = formatRupiah(databaseProduct[i].productPrice);
//       html += `
//         <div class="col">
//           <div class="card h-100 shadow card-hover-effect">
//             <img src="${databaseProduct[i].img}" class="card-img-top" alt="">
//             <div class="card-body">
//               <h5 class="card-title">${databaseProduct[i].productName}
              
//               <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              
//               <h5 style="color:black;margin-bottom:1em;">${harga}</h5>
              
//               <a href="#" class="btn btn-warning test-drive" data-video-id="${databaseProduct[i].videoId}">
//                 <i class="bi bi-fast-forward-circle"></i> Preview
//               </a>
              
//               <a href="#" class="btn btn-success add-to-cart" data-index="${i}">
//                 <i class="bi bi-cart-plus"></i> Add to Cart
//               </a>
//             </div>
//           </div>
//         </div>
//       `;
//     }
  
//     carsContent.innerHTML = html;
//   }

//   function formatRupiah(angka) {
//     return new Intl.NumberFormat('id-ID', {
//         style: 'currency',
//         currency: 'IDR',
//         minimumFractionDigits: 0
//     }).format(angka);
// }



