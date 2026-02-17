const openProductModal = (id) => {
  getProductDetails(id); // fetch product
  document.getElementById("modal").showModal(); // open modal
};

const getProductDetails = async (productId) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${productId}`,
  );
  const product = await response.json();
  displayProductDetails(product);
};

const displayProductDetails = (product) => {
  const container = document.getElementById("product-details-container");
  container.innerHTML = `
    <div class="card bg-base-100 shadow-md">
      <figure class="h-64 bg-gray-100 flex items-center justify-center p-4">
        <img src="${product.image}" class="h-full object-contain" />
      </figure> 
        <div class="card-body flex flex-col p-4">
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
            <p class="mt-2 text-justify">${product.description}</p>
            <div class="mt-auto grid grid-cols-2 gap-2">
                <button class="btn btn-danger w-full btn-sm px-1 btn-xs" onclick="document.getElementById('modal').close()"> 
                    <i class="fa-solid fa-xmark"></i>
                    close
                </button>
                <button onclick="addToCart(${product.id})" class="btn btn-primary text-white w-full btn-sm">
                    <i class="fa-solid fa-cart-shopping"></i>
                    Add to Cart
                </button>
            </div>
        </div>
    </div>
  `;
};

const cartItems = document.getElementById("cart-items");

let cart = [];

const addToCart = (productId) => {
  const product = allProducts.find((p) => p.id === productId);

  if (product) {
    cart.push(product);
    alert("Product added to the cart!");
    if (cart.length > 0) {
      const span = document.createElement("span");
      span.className = "indicator-item badge badge-primary badge-sm";
      span.innerText = cart.length;
      cartItems.appendChild(span);
    }
  } else {
    alert("Product not found!");
  }
  console.log(cart.length);
};
