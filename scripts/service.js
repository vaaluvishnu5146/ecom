// RENDER PRODUCTS INTO DOM
async function getDataFromJson() {
  return [
    {
      id: 1,
      productName: "boAt Rockerz 550",
      productPicture:
        "https://m.media-amazon.com/images/I/61ljxTBpTCL._SL1500_.jpg",
      productDescription:
        "Playback The mighty 500mAh battery capacity offers a superior playback time of up to 20 Hours Drivers",
      price: 1799,
      brandName: "Boat",
      size: "casual",
      insideBox: ["headphones", "warranty card"],
      warrantydetails: null,
    },
    {
      id: 3,
      productName: "boAt Airdopes 131",
      productPicture:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/viper-green_600x.png?v=1642405569",
      productDescription:
        "Wireless Earbuds with upto 60 Hours Playback, 13mm Drivers, IWP Technology, 650mAh Charging",
      price: 999,
      brandName: "Boat",
      size: "casual",
      insideBox: ["headphones", "warranty card"],
      warrantydetails: null,
    },
    {
      id: 2,
      productName: "boAt Rockerz 255 Pro+",
      productPicture:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/93b827fc-0108-4e8b-9ea9-e66fb1e7a362_600x.png?v=1625157890",
      productDescription:
        "Bluetooth Earphone with 10mm drivers, Up to 40H Nonstop Playback, Type-C charging, ASAP",
      price: 1098,
      brandName: "Boat",
      size: "casual",
      insideBox: ["headphones", "warranty card"],
      warrantydetails: null,
    },
  ];
}

async function renderProducts() {
  const container = document.getElementsByClassName("products-container")[0];
  const products = await getDataFromJson();
  const elements = [];
  products.forEach((data) => {
    const el = `<a href="product.html?product=${data.id}">
        <div class="product1">
          <img src="${data.productPicture}" alt="noimg" />
          <h1>${data.productName}</h1>
          <h1>Rs.${data.price}</h1>
        </div>
      </a>`;
    elements.push(el);
  });
  container.innerHTML = elements;
}
renderProducts();
