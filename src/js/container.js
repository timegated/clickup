import image4 from '../images/image4.png';
import image5 from '../images/image5.png';
import image6 from '../images/image6.jpg';
import image1 from '../images/image1.png';
import image3 from '../images/image3.png';
import image2 from '../images/image2.png';

const container = {
  targets: {
    heroImgContainer: document.querySelector('.hero__img--container'),
    heroCardImg: document.querySelector('.hero__card--img'),
    featureGrid: document.querySelector('.feature__grid')
  },
  features: [
    {
      title: 'Search Data',
      img: image3,
      copy: 'Don\'t worry if your data is very large, the Data Warehouse provides a search engine, whic is useful for making it easier to find data effectively saving time',
      btnTxt: 'Learn More'
    },
    {
      title: '24 Hours Access',
      img: image2,
      copy: 'Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.',
      btnTxt: 'Learn More'
    },
    {
      title: 'Print Out',
      img: image2,
      copy: 'Print out service gives you convenience if someday you need print data, just edit it all and just print it.',
      btnTxt: 'Learn More'
    },
    {
      title: 'Security Code',
      img: image5,
      copy: 'Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so onl you can open the file',
      btnTxt: 'Learn More'
    },
  ]
}

export default container;