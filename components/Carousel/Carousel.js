/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const Carousel = () => {
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const mountains = document.createElement('img');
  const computer = document.createElement('img');
  const trees = document.createElement('img');
  const turntable = document.createElement('img');
  const rightButton = document.createElement('div');

  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  leftButton.textContent = ' < ';
  rightButton.textContent = ' > ';
  mountains.src = '../assets/carousel/mountains.jpeg';
  computer.src = '../assets/carousel/computer.jpeg';
  trees.src = '../assets/carousel/trees.jpeg';
  turntable.src = '../assets/carousel/turntable.jpeg';

  mountains.style.display = 'block';


  carousel.append(leftButton, mountains, computer, trees, turntable, rightButton);

  const images = carousel.querySelectorAll('img');
  let index = 0;
  images.forEach(image => image.style.opacity = 0);
  gsap.to(mountains, { opacity: 1, duration: 2 });

  leftButton.addEventListener('click', () => {
    hideImage(images[index]);
    
    index--;
    if (index < 0) index = 3;
    
    showImage(images[index]);
  });

  rightButton.addEventListener('click', () => {
    hideImage(images[index]);
    
    index++;
    if (index > 3) index = 0;
    
    showImage(images[index]);
  });

  return carousel;
}

const hideImage = (img) => {
  gsap.to(img, {opacity: 0, duration: 1 });
  setTimeout(() => img.style.display = 'none', 1000);

}

const showImage = (img) => {
  setTimeout(() => {
    img.style.display = 'block';
    gsap.to(img, { opacity: 1, duration: 1 });
  }, 1000);
}

document.querySelector('.carousel-container').appendChild(Carousel());