import { imageHandler } from './imageHandler';
import { featureHandler, featureBackground } from './featureHandler';
import { slidesHandler } from './slidesHandler';
import { slider } from './slider';
import container from './container';
import heroImg from '../images/image1.png';
import cardImg from '../images/image2.png';
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';
import blob1 from '../images/blob1.png';
import blob2 from '../images/blob2.png';
import blob3 from '../images/blob3.png';
import '../css/main.scss';

// targets are dom elements, features and slides are arrays
// used to generate dom elements
const { targets, features, slides } = container;
// hero images
imageHandler(targets.heroImgContainer, heroImg, 885, 468);
imageHandler(targets.heroCardImg, cardImg, 477, 504);
imageHandler(targets.logoImageOne, logo1, 20, 20);
imageHandler(targets.logoImageTwo, logo2, 20, 35);
imageHandler(targets.footerImageOne, logo1, 20, 20);
imageHandler(targets.footerImageTwo, logo2, 20, 35);

// feature grid
featureHandler(targets.featureGrid, features);

// feature backgrounds
const featureCards = document.querySelectorAll('.feature__grid > section > .content');

featureCards[1].style = `
  background-image:url(${blob1});
  background-position: 70% 100%;
  background-repeat: no-repeat;
`;

featureCards[2].style = `
  background-image:url(${blob3});
  background-position: 80% 20%;
  background-repeat: no-repeat;
`;

featureCards[3].style = `
  background-image:url(${blob2});
  background-position: 30% 30%;
  background-repeat: no-repeat;
`;
// slides
slidesHandler(targets.sliderContainer, slides);

const { nextSlide, prevSlide } = slider();

targets.next.addEventListener('click', nextSlide);
targets.prev.addEventListener('click', prevSlide);
