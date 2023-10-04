const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const productContainer = document.querySelector(".product-list");

let products = [];

// Fetch products from the API
fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {
        products = data;
        displayProducts(products);
    })
    .catch(error => {
        console.error("Error fetching products:", error);
    });

// Event listeners for search and sort
searchInput.addEventListener("input", handleSearch);
sortSelect.addEventListener("change", handleSort);

// Display products on the DOM
function displayProducts(products) {
    productContainer.innerHTML = "";

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>Price: $${product.price}</p>
            <p>Category: ${product.category}</p>
        `;
        productContainer.appendChild(productCard);
    });
}

// Handle search input
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
}

// Handle sort selection
function handleSort() {
    const sortOption = sortSelect.value;
    let sortedProducts = [...products];

    if (sortOption === "price-asc") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    displayProducts(sortedProducts);
}
