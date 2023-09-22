const payButton = document.getElementById("pay-button");
const processingUI = document.getElementById("processing-ui");
const statusDiv = document.getElementById("status");

payButton.addEventListener("click", () => {
    // Simulate payment processing with a Promise
    processingUI.style.display = "block";

    const paymentPromise = new Promise((resolve, reject) => {
        // Simulate asynchronous payment processing
        setTimeout(() => {
            const paymentSuccessful = Math.random() < 0.5; // 50% chance of success
            if (paymentSuccessful) {
                resolve();
            } else {
                reject();
            }
        }, 2000); // Simulate a 2-second processing time
    });

    paymentPromise
        .then(() => {
            processingUI.style.display = "none";
            statusDiv.innerText = "Payment successful!";
            statusDiv.style.color = "green";
        })
        .catch(() => {
            processingUI.style.display = "none";
            statusDiv.innerText = "Payment failed. Please try again.";
            statusDiv.style.color = "red";
        });
});
