
function getStoredData() {
    const storedData = JSON.parse(localStorage.getItem('userData')) || [];
    return storedData;
}


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


const userInfoForm = document.getElementById('userInfoForm');
const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const userDataDiv = document.getElementById('userDataDiv');
const displayDataBtn = document.getElementById('displayDataBtn');


userInfoForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    
    const name = nameInput.value;
    const age = ageInput.value;

    
    const userData = getStoredData();

    
    userData.push({ name, age });

    
    localStorage.setItem('userData', JSON.stringify(userData));

    
    nameInput.value = '';
    ageInput.value = '';
});


displayDataBtn.addEventListener('click', () => {
    displayStoredData();
});
