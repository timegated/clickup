import { imageHandler } from './imageHandler';
import container from './container';
import heroImg from '../images/image1 1.png';
import cardImg from '../images/image2 .png';
import featureImg from '../images/image3 1.png';
import '../css/main.scss';

const { targets } = container;

imageHandler(targets.heroImgContainer, heroImg, 500, 250);
imageHandler(targets.heroCardImg, cardImg, 250, 250);
