// RENDER PRODUCTS INTO DOM
async function getQueryParams() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  return params;
}
function getDataFromJson() {
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
async function getFilteredDataFromJson() {
  const data = getDataFromJson();
  console.log(data);
  const { product } = await getQueryParams();
  return data.find((d) => d.id == product);
}

async function getSelectedData() {
  const data = await getFilteredDataFromJson();
  const productImage = document.getElementById("product-image");
  const productName = document.getElementById("product-name");
  const productDecription = document.getElementById("product-description");
  const productPrice = document.getElementById("product-price");
  const productSize = document.getElementById("product-size");
  const productBrand = document.getElementById("product-brand");
  productImage.setAttribute("src", data.productPicture);
  productName.innerText = data.productName;
  productPrice.innerText = data.price;
  productDecription.innerText = data.productDescription;
  productBrand.innerText = data.brandName;
  productSize.innerText = data.size;
}
getSelectedData();
