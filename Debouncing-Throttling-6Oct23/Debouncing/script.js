document.addEventListener('DOMContentLoaded', function () {
    const API_KEY = '637048d';  

    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResults = document.getElementById('searchResults');

    const searchMovies = async (query) => {
        const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
        const data = await response.json();
        console.log(data);
        return data.Search || [];
    };

    const renderSearchResults = (movies) => {
        searchResults.innerHTML = '';
    
        if (movies.length === 0) {
            searchResults.innerHTML = '<p>No results found</p>';
        } else {
            const ul = document.createElement('ul');
            movies.forEach((movie) => {
                const li = document.createElement('li');
                li.textContent = movie.Title;
                li.addEventListener('click', () => {
                    // Display movie details when a result is clicked
                    displayMovieDetails(movie.imdbID);
                });
                ul.appendChild(li);
            });
            searchResults.appendChild(ul);
        }
    };
    
    // Function to display movie details
    const displayMovieDetails = async (imdbID) => {
        const response = await fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`);
        const data = await response.json();
    
        const movieTitle = document.getElementById('movieTitle');
        const moviePoster = document.getElementById('moviePoster');
        const movieYear = document.getElementById('movieYear');
        const moviePlot = document.getElementById('moviePlot');
        const movieDetails = document.getElementById('movieDetails');
    
        movieTitle.textContent = data.Title;
        moviePoster.src = data.Poster;
        movieYear.textContent = `Year: ${data.Year}`;
        moviePlot.textContent = data.Plot;
    
        // Display the movie details container
        movieDetails.style.display = 'block';
    };

    const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                func(...args);
            }, delay);
        };
    };

    const debouncedSearch = debounce(async (query) => {
        if (query) {
            const movies = await searchMovies(query);
            renderSearchResults(movies);
        } else {
            searchResults.innerHTML = '';
        }
    }, 300);
    
    searchInput.addEventListener('input', () => {
        debouncedSearch(searchInput.value);
    });
    
    searchButton.addEventListener('click', () => {
        console.log('Button clicked');
        const query = searchInput.value;
        if (query) {
            searchMovies(query).then(movies => {
                renderSearchResults(movies);
            }).catch(error => {
                console.error('Error fetching movies:', error);
            });
        } else {
            searchResults.innerHTML = '';
        }
    });
});

function renderSearchResults(movies) {
    searchResults.innerHTML = '';

    if (movies.length === 0) {
        searchResults.innerHTML = '<p>No results found</p>';
    } else {
        const ul = document.createElement('ul');
        movies.forEach((movie) => {
            const li = document.createElement('li');
            li.textContent = movie.Title;
            ul.appendChild(li);
        });
        searchResults.appendChild(ul);
    }
}