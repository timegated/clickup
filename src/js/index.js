import { imageHandler } from './imageHandler';
import { featureHandler, featureBackground } from './featureHandler';
import { slidesHandler } from './slidesHandler';
import { slider } from './slider';
import container from './container';
import heroImg from '../images/image1.png';
import cardImg from '../images/image2.png';
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';
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


// slides
slidesHandler(targets.sliderContainer, slides);

const { nextSlide, prevSlide } = slider();

targets.next.addEventListener('click', nextSlide);
targets.prev.addEventListener('click', prevSlide);
