const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const movieYearOfPublication = document.querySelector('.userInputPublication');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.FavoriteMovieTitle');
const year = document.querySelector('.movie-year');

let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let publicationInStorage = localStorage.getItem('publication');

if(titleInStorage && imageUrlInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(37, 37, 61, 0.5), rgba(77, 61, 61, 0.616)), 
    url('${imageUrlInStorage}')`;
    year.textContent = publicationInStorage;
}

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let yearOfPublicationInput = movieYearOfPublication.value;

    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('publication', yearOfPublicationInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    year.textContent = yearOfPublicationInput;
    container.style.backgroundImage = `linear-gradient(rgba(37, 37, 61, 0.5), rgba(77, 61, 61, 0.616)),
    url('${posterUrlInput}')`;
    movieTitle.value = '';
    moviePosterUrl.value = '';
    movieYearOfPublication.value = '';
})