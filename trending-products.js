const trendingProducts = [
  {
    id: "tr1",
    title: "Fjallraven - Foldsack Backpack",
    category: "Men's Clothing",
    price: 109.95,
    rating: 3.9,
    reviews: 120,
    image:
      "https://img.freepik.com/free-vector/school-bag-accessory-icon_24877-83260.jpg?semt=ais_user_personalization&w=740&q=80",
  },
  {
    id: "tr2",
    title: "Mens Casual Premium T-Shirts",
    category: "Men's Clothing",
    price: 22.3,
    rating: 4.1,
    reviews: 259,
    image:
      "https://shop.detshirts.com/cdn/shop/files/PREMIUM_SILK_TSHIRT_NAVY5.jpg?v=1690453636",
  },
  {
    id: "tr3",
    title: "Mens Cotton Jacket",
    category: "Men's Clothing",
    price: 55.9,
    rating: 4.7,
    reviews: 360,
    image:
      "https://m.media-amazon.com/images/I/61bMppUtfqL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "tr4",
    title: "Smart Fitness Watch for Men",
    category: "Electronics",
    price: 149.99,
    rating: 4.6,
    reviews: 500,
    image:
      "https://hips.hearstapps.com/hmg-prod/images/apple-watch-ultra-2-68247ae15a028.jpg?crop=1.00xw:1.00xh;0,0&resize=1120:*",
  },
];

const displayTrendingProducts = (products) => {
  const container = document.getElementById("trending-products-container");

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("card", "shadow-sm");
    productCard.innerHTML = `
  <figure class="h-56 w-full bg-gray-100 flex items-center justify-center">
    <img 
      src="${product.image}" 
      alt="${product.title}'s photo"
      class="h-full object-contain"
    />
  </figure>

  <div class="card-body flex flex-col flex-grow">
    
    <h4 class="flex justify-between text-xs">
      <span class="badge badge-outline badge-primary bg-purple-50 font-bold">${product.category}</span>
      <span>
        <i class="fa-solid fa-star text-yellow-500"></i>
        ${product.rating} (${product.reviews})
      </span>
    </h4>
    
    <div class="my-3">
      <h3 class="card-title">${product.title}</h3>
      <h4 class="font-bold">$${product.price}</h4>
    </div>

    <div class="mt-auto">
      <div class="grid grid-cols-2 gap-2 w-full">
        <button class="btn btn-outline w-full"> <i class="fa-solid fa-eye"></i> Details</button>
        <button class="btn btn-primary text-white w-full">
        <i class="fa-solid fa-cart-shopping"></i>
          Add to Cart
        </button>
      </div>
    </div>

  </div>
`;

    container.appendChild(productCard);
  });
};

displayTrendingProducts(trendingProducts.splice(1, 4));
