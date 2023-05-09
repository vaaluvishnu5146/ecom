// RENDER PRODUCTS INTO DOM
async function getDataFromJson() {
  const response = await fetch("../mocks/products.json");
  const data = await response.json();
  return data["data"];
}

async function renderProducts() {
  const container = document.getElementsByClassName("products-container")[0];
  const products = await getDataFromJson();
  console.log(products);
  const elements = [];
  products.forEach((data) => {
    const el = `<a href="item.html?product=${data.id}">
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
