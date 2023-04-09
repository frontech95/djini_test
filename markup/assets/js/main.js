'use strict';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';


let header = document.querySelector('.header');


document.querySelector('.page').style.paddingTop = `${header.offsetHeight}px`;


const url = 'https://picsum.photos/v2/list?page=1&limit=9';

let pageNumber = 1;
const cardsPerPage = 8;
let isLoading = false;

function fetchData() {
isLoading = true;
fetch(`${url}?page=${pageNumber}&limit=${cardsPerPage}`)
    .then((response) => response.json())
    .then((data) => {
    renderCards(data);
    isLoading = false;
    pageNumber++;
    })
    .catch((error) => {
    console.error('Error:', error);
    isLoading = false;
    });
}

function renderCards(data) {
const cardContainer = document.querySelector('.card-container');
data.forEach((item) => {
    const card = createCard(item);
    cardContainer.appendChild(card);
});
}

function createCard(item) {
    const card = document.createElement('div');
    card.classList.add('card');
  
    const photo = document.createElement('div');
    photo.classList.add('card__photo');
  
    const img = document.createElement('img');
    img.src = item.download_url;
  
    const author = document.createElement('p');
    author.textContent = item.author;
  
    const dimensions = document.createElement('div');
    dimensions.classList.add('card__caption');
    dimensions.textContent = `Width: ${item.width}, Height: ${item.height}`;
  
    photo.appendChild(img);
    card.appendChild(photo);
    card.appendChild(author);
    card.appendChild(dimensions);
  
    return card;
  }
  

window.addEventListener('scroll', () => {
const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
if (scrollTop + clientHeight >= scrollHeight - 5 && !isLoading) {
    fetchData();
}
});

// загрузить первую страницу данных
fetchData();