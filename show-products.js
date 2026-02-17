const productsContainer = document.getElementById("products-container");

const productsUrl = "https://fakestoreapi.com/products";

const allProductsContainer = document.getElementById("all-products-container");

let allProducts = [];

// fetch products from api and display them in the page
const getProducts = async () => {
  const response = await fetch(productsUrl);
  const products = await response.json();
  displayProducts(products);
  allProducts = products;

  const trendingProducts = products.filter(
    (product) => product.rating.rate >= 4.5,
  );
  displayTrendingProducts(trendingProducts.splice(0, 3));
};

// show products in normal
const displayProducts = (products) => {
  allProductsContainer.innerHTML = ""; // clear old content

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    const card = document.createElement("div");
    card.className = "card bg-base-100 shadow-md";

    card.innerHTML = `
      <figure class="h-48 bg-gray-100 flex items-center justify-center p-2">
        <img src="${product.image}" class="h-full object-contain" />
      </figure>

      <div class="card-body flex flex-col p-2">

        <div class="flex justify-between items-center text-xs">
          <span class="badge badge-outline badge-primary truncate max-w-[120px]">
            ${product.category}
          </span>

          <span>
            <i class="fa-solid fa-star text-yellow-500"></i>
             ${product.rating.rate} (${product.rating.count})
          </span>
        </div>

        <h3 class="text-sm font-semibold mt-2 text-justify">
          ${product.title}
        </h3>

        <p class="font-bold text-lg mt-2">$${product.price}</p>

        <div class="mt-auto grid grid-cols-2 gap-2">
        <button 
            onclick="openProductModal(${product.id})"
            class="btn btn-outline w-full btn-sm px-1 btn-xs"> 
          <i class="fa-solid fa-eye"></i>
           Details
        </button>

        <button onclick="addToCart(${product.id})" class="btn btn-primary text-white w-full btn-sm">
        <i class="fa-solid fa-cart-shopping"></i>
          Add to Cart
        </button>
        </div>

      </div>
    `;

    allProductsContainer.appendChild(card);
  }
};

const filterByCategory = (category) => {
  if (category === "all") {
    displayProducts(allProducts);
  } else {
    const filteredProducts = allProducts.filter(
      (product) => product.category === category,
    );

    displayProducts(filteredProducts);
  }
};

getProducts();
