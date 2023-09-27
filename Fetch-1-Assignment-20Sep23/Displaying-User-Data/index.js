const fetchUsersBtn = document.getElementById('fetchUsersBtn');
const userDataDiv = document.getElementById('userDataDiv');


fetchUsersBtn.addEventListener('click', () => {
    
    fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(data => {
            
            displayUserData(data.data);
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
});


function displayUserData(users) {
    if (users.length === 0) {
        userDataDiv.innerHTML = 'No user data available.';
        return;
    }

    
    const userContainer = document.createElement('div');
    userContainer.classList.add('user-container');

    
    function decodeHTMLEntities(text) {
        const decoded = document.createElement('textarea');
        decoded.innerHTML = text;
        return decoded.value;
    }

    
    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');

        
        const decodedFirstName = decodeHTMLEntities(user.first_name);
        const decodedLastName = decodeHTMLEntities(user.last_name);
        const decodedEmail = decodeHTMLEntities(user.email);

        
        userCard.innerHTML = `
            <img src="${user.avatar}" alt="User Avatar">
            <h3>${decodedFirstName} ${decodedLastName}</h3>
            <p>Email: ${decodedEmail}</p>
        `;

        
        userContainer.appendChild(userCard);
    });

    
    userDataDiv.innerHTML = '';
    userDataDiv.appendChild(userContainer);
}
