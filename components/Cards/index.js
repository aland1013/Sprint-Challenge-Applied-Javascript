// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const articleData = axios.get('https://lambda-times-backend.herokuapp.com/articles');

console.log('articleData', articleData);

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    const articlesArray = Object.keys(response.data.articles);
    articlesArray.forEach(articleType => {
      response.data.articles[articleType].forEach(article => {
        createNewCard(article);
      })
    })
  });

const articleCreator = (obj) => {
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const image = document.createElement('img');
  const byline = document.createElement('span');
  
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  headline.textContent = `${obj.headline}`;
  image.src = obj.authorPhoto;
  byline.textContent = `By ${obj.authorName}`;

  imgContainer.appendChild(image);
  author.append(imgContainer, byline);
  card.append(headline, author);

  return card;
}

const createNewCard = (data) => {
  const newCard = articleCreator(data);
  document.querySelector('.cards-container').appendChild(newCard);
}
