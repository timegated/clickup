import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';
import image6 from '../images/image6.png';
import user1 from '../images/user1.jpg';
import user2 from '../images/user2.jpg';
import user3 from '../images/user3.jpg';
import user4 from '../images/user4.jpg';

const container = {
  targets: {
    heroImgContainer: document.querySelector('.hero__img--container'),
    heroCardImg: document.querySelector('.hero__card--img'),
    featureGrid: document.querySelector('.feature__grid'),
    sliderContainer: document.querySelector('.slider__container'),
    next: document.querySelector('.next'),
    prev: document.querySelector('.previous')
  },
  features: [
    {
      title: 'Search Data',
      img: image3,
      copy: 'Don\'t worry if your data is very large, the Data Warehouse provides a search engine, whic is useful for making it easier to find data effectively saving time.',
      btnTxt: 'Learn More'
    },
    {
      title: '24 Hours Access',
      img: image4,
      copy: 'Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.',
      btnTxt: 'Learn More'
    },
    {
      title: 'Print Out',
      img: image5,
      copy: 'Print out service gives you convenience if someday you need print data, just edit it all and just print it.',
      btnTxt: 'Learn More'
    },
    {
      title: 'Security Code',
      img: image6,
      copy: 'Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.',
      btnTxt: 'Learn More'
    },
  ],
  slides: [
    {
      name: 'John Fang',
      img: user1,
      website: 'wordfaang.com',
      copy: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
    },
    {
      name: 'Byron Johnson',
      img: user2,
      website: 'keeponrockininthefreeworld.com',
      copy: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
    },
    {
      name: 'Natalie Young',
      img: user3,
      website: 'whereisrachel.com',
      copy: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
    },
    {
      name: 'John Smith',
      img: user4,
      website: 'manbearpigisreal.com',
      copy: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
    },
    {
      name: 'John Smith',
      img: user4,
      website: 'manbearpigisreal.com',
      copy: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
    },
  ]
}

export default container;