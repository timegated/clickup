import { imageHandler } from './imageHandler';
import { featureHandler } from './featureHandler';
import { slidesHandler } from './slidesHandler';
import { slider } from './slider';
import container from './container';
import heroImg from '../images/image1.png';
import cardImg from '../images/image2.png';
import '../css/main.scss';

// targets are dom elements, features and slides are arrays
// used to generate dom elements
const { targets, features, slides } = container;
// hero images
imageHandler(targets.heroImgContainer, heroImg, 500, 250);
imageHandler(targets.heroCardImg, cardImg, 250, 250);

// feature grid
featureHandler(targets.featureGrid, features);

// slides
slidesHandler(targets.sliderContainer, slides);

const { nextSlide, prevSlide } = slider();

targets.next.addEventListener('click', nextSlide);
targets.prev.addEventListener('click', prevSlide);
