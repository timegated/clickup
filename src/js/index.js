import { imageHandler } from './imageHandler';
import { featureHandler } from './featureHandler';
import { slidesHandler } from './slidesHandler';
import { slider } from './slider';
import container from './container';
import heroImg from '../images/image1.png';
import cardImg from '../images/image2.png';
import featureImg from '../images/image3.png';
import '../css/main.scss';

const { targets, features, slides } = container;
imageHandler(targets.heroImgContainer, heroImg, 500, 250);
imageHandler(targets.heroCardImg, cardImg, 250, 250);
featureHandler(targets.featureGrid, features);
slidesHandler(targets.sliderContainer, slides);

const { nextSlide, prevSlide } = slider();

targets.next.addEventListener('click', nextSlide);
targets.prev.addEventListener('click', prevSlide);
