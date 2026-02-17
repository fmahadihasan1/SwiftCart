const getCategoriesURL = "https://fakestoreapi.com/products/categories";

// fetch categories from api and display them in the page
const getCategories = async () => {
  const response = await fetch(getCategoriesURL);

  const categories = await response.json();

  displayCategories(categories);
  // displayCategoriesResponsive(categories);
};

// show categories in normal
const displayCategories = (categories) => {
  const liContainer = document.getElementById("categories-container");

  categories.forEach((category) => {
    const categoryElement = document.createElement("li");
    categoryElement.classList.add(
      "bg-gray-100",
      "rounded-lg",
      "px-4",
      "py-2",
      "font-semibold",
      "transition",
      "duration-300",
      "hover:bg-indigo-500",
      "hover:text-white",
      "cursor-pointer",
    );
    const a = document.createElement("a");
    a.className = "capitalize";
    a.innerText = category;

    a.addEventListener("click", () => {
      filterByCategory(category);
    });

    categoryElement.appendChild(a);

    liContainer.appendChild(categoryElement);
  });
};

// show categories in responsive
// const displayCategoriesResponsive = (categories) => {
//   const liContainerResponsive = document.getElementById(
//     "categories-container-respnsive",
//   );
//   categories.forEach((category) => {
//     const categoryElement = document.createElement("li");

//     categoryElement.innerHTML = `<a class="capitalize">${category}</a>`;
//     liContainerResponsive.appendChild(categoryElement);
//   });
// };

getCategories();
