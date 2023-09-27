// Function to retrieve data from Local Storage or initialize an empty array
function getStoredData() {
    const storedData = JSON.parse(localStorage.getItem('userData')) || [];
    return storedData;
}

// Function to display stored data in the table
function displayStoredData() {
    const userData = getStoredData();
    if (userData.length > 0) {
        const table = document.createElement('table');
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                ${userData.map(data => `
                    <tr>
                        <td>${data.name}</td>
                        <td>${data.age}</td>
                    </tr>
                `).join('')}
            </tbody>
        `;
        userDataDiv.innerHTML = '';
        userDataDiv.appendChild(table);
    } else {
        userDataDiv.innerHTML = 'No data found in Local Storage.';
    }
}

// Get references to HTML elements
const userInfoForm = document.getElementById('userInfoForm');
const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const userDataDiv = document.getElementById('userDataDiv');
const displayDataBtn = document.getElementById('displayDataBtn');

// Event listener for form submission
userInfoForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting normally

    // Get user input
    const name = nameInput.value;
    const age = ageInput.value;

    // Retrieve existing data or initialize an empty array
    const userData = getStoredData();

    // Add new data to the array
    userData.push({ name, age });

    // Store the updated array in Local Storage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Clear form inputs
    nameInput.value = '';
    ageInput.value = '';
});

// Event listener for displaying stored data
displayDataBtn.addEventListener('click', () => {
    displayStoredData();
});
