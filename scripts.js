// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '9429e8c824msh9e04fba01062655p17a8afjsn2e1a873f2e6e',
// 		'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
// 	}
// };

// // Retrieve movie data from an API
// fetch('https://unogsng.p.rapidapi.com/genres',options)
//     .then(response => response.json())
//     .then(movies => {
//         //Sort movies by popularity ascending
//         let moviesAsc = movies.sort((a, b) => a.popularity - b.popularity);
//         //Sort movies by popularity descending
//         let moviesDesc = movies.sort((a, b) => b.popularity - a.popularity);
//         //Display sorted movie data on the website
//         displayMovies(moviesAsc, 'Ascending');
//         displayMovies(moviesDesc, 'Descending');

//     })
//     .catch(err => console.error(err));


// //function to display movies
// function displayMovies(movies, sortType) {
//     let movieList = document.createElement('div');
//     movieList.innerHTML = '<h2> ${sortType} Order </h2>';
//     movieList.setAttribute('class', 'movies');
//     for (let movie of movies) {
//         let movieItem = document.createElement('div');
//         movieItem.setAttribute('class', 'movie');
//         movieItem.innerHTML = '<h3>${movie.title}</h3> <p> Popularity: ${movie.popularity}</p>';
//             movieList.appendChild(movieItem);
//     }
//     document.getElementById('movies').appendChild(movieList);
// }

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