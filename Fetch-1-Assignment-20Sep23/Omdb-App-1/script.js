
const movieTitleInput = document.getElementById('movieTitle');
const searchButton = document.getElementById('searchButton');
const resultsContainer = document.getElementById('resultsContainer');
const paginationContainer = document.getElementById('paginationContainer');
const prevPageButton = document.getElementById('prevPageButton');
const nextPageButton = document.getElementById('nextPageButton');


let currentPage = 1;
const itemsPerPage = 5;
const apiKey = '637048d'; //  API key


searchButton.addEventListener('click', () => {
    const movieTitle = movieTitleInput.value.trim();

    
    if (movieTitle === '') {
        alert('Please enter a movie title.');
        return;
    }

    
    resultsContainer.innerHTML = '';
    paginationContainer.innerHTML = '';

    
    fetchMovieData(movieTitle);
});


prevPageButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        fetchMovieData(movieTitleInput.value.trim());
    }
});


nextPageButton.addEventListener('click', () => {
    currentPage++;
    fetchMovieData(movieTitleInput.value.trim());
});


nextPageButton.addEventListener('click', () => {
    currentPage++;
    fetchMovieData(movieTitleInput.value.trim());
});


function fetchMovieData(movieTitle) {
    
    const apiUrl = `http://www.omdbapi.com/?s=${encodeURIComponent(movieTitle)}&apikey=${apiKey}&page=${currentPage}`;

    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
           
            if (data.Response === 'True') {
               
                displayMovieData(data);
                displayPagination(data.totalResults);
            } else {
                
                resultsContainer.innerHTML = '<p>No movies found.</p>';
                paginationContainer.innerHTML = '';
            }
        })
        .catch(error => {
            console.error('Error fetching movie data:', error);
        });
}


function displayMovieData(movieData) {
    movieData.Search.forEach(movie => {
        
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const titleElement = document.createElement('h2');
        titleElement.textContent = movie.Title;

        const yearElement = document.createElement('p');
        yearElement.textContent = `Year: ${movie.Year}`;

        const posterElement = document.createElement('img');
        posterElement.src = movie.Poster;
        posterElement.alt = `Poster for ${movie.Title}`;

        
        movieContainer.appendChild(titleElement);
        movieContainer.appendChild(yearElement);
        movieContainer.appendChild(posterElement);
        resultsContainer.appendChild(movieContainer);
    });
}


function displayPagination(totalResults) {
    const totalPages = Math.ceil(totalResults / itemsPerPage);

    
    const pageInfo = document.createElement('p');
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    paginationContainer.innerHTML = '';
    paginationContainer.appendChild(pageInfo);

    
    if (currentPage > 1) {
        paginationContainer.appendChild(prevPageButton);
    }

    
    if (currentPage < totalPages) {
        paginationContainer.appendChild(nextPageButton);
    }
}
