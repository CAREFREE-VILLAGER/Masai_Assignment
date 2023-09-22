document.addEventListener("DOMContentLoaded", () => {
    const orderButton = document.getElementById("orderButton");
    const foodItems = document.querySelectorAll(".foodCheckbox");
    const foodImages = {
        Burger: document.getElementById("burgerImage"),
        Fries: document.getElementById("friesImage"),
        Soda: document.getElementById("sodaImage"),
        // Add food images
    };
    const orderID = document.getElementById("orderID");

    orderButton.addEventListener("click", () => {
        const selectedItems = Array.from(foodItems)
            .filter(item => item.checked)
            .map(item => item.value);

        if (selectedItems.length === 0) {
            alert("Please select at least one food item.");
            return;
        }

        orderButton.disabled = true;
        orderButton.innerText = "Placing Order...";

        const randomDelay = Math.floor(Math.random() * 5000) + 1000;

        const orderPromise = new Promise(resolve => {
            setTimeout(() => {
                const randomItem = selectedItems[Math.floor(Math.random() * selectedItems.length)];
                const imageURL = `${randomItem.toLowerCase()}.jpg`;
                foodImages[randomItem].style.display = "block";
                const orderNum = Math.floor(Math.random() * 1000) + 1;
                orderID.innerText = `Order ID: ${orderNum}`;
                orderID.style.display = "block";
                resolve();
            }, randomDelay);
        });

        orderPromise.then(() => {
            orderButton.disabled = false;
            orderButton.innerText = "Order Food";
        });
    });
});
