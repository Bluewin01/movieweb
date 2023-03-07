const movieList = document.querySelector('#movie-list');
const popularitySort = document.querySelector('#popularity-sort');

popularitySort.addEventListener('change', (event) => {
    const sortOrder = event.target.value;
    const movies = Array.from(movieList.children);
    movies.sort((a, b) => {

        const aPopularity = parseFloat(a.querySelector('.popularity').textContent);
        const bPopularity = parseFloat(b.querySelector('.popularity').textContent);

        if (sortOrder === 'ascending') {
            return aPopularity - bPopularity;
        } else {
            return bPopularity - aPopularity;
        }
    });
    movieList.innerHTML = '';
    movies.forEach((movie) => {
        movieList.appendChild(movie);
    });
});