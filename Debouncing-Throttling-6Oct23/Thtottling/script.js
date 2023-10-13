document.addEventListener('DOMContentLoaded', function () {
    const API_KEY = '1'; 

    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    const searchRecipe = async (query) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/${API_KEY}/search.php?s=${query}`);
            const data = await response.json();
            return data.meals || [];
        } catch (error) {
            console.error('Error fetching recipes:', error);
            return [];
        }
    };

    const renderSearchResults = (recipes) => {
        searchResults.innerHTML = '';

        if (recipes.length === 0) {
            searchResults.innerHTML = '<p>No results found</p>';
        } else {
            const ul = document.createElement('ul');
            recipes.forEach((recipe) => {
                const li = document.createElement('li');
                li.textContent = recipe.strMeal;
                ul.appendChild(li);
            });
            searchResults.appendChild(ul);
        }
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

    const throttledSearch = debounce(async (query) => {
        if (query) {
            const recipes = await searchRecipe(query);
            renderSearchResults(recipes);
        } else {
            searchResults.innerHTML = '';
        }
    }, 300);

    searchInput.addEventListener('input', () => {
        throttledSearch(searchInput.value);
    });
});
