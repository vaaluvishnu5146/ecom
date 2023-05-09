// RENDER PRODUCTS INTO DOM
async function getQueryParams() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  return params;
}
async function getFilteredDataFromJson() {
  const response = await fetch("../mocks/products.json", {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
    },
  });
  const data = await response.json();
  const { product } = await getQueryParams();
  return data["data"].find((d) => d.id == product);
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
