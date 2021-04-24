export const slider = () => {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  const moveSlides = (index) => {
    console.log(index);
    if (index > 0) {
      slides[index].classList.add('active');
      slides[index + 1].classList.remove('active');
      slides[index - 1].classList.remove('active')
    } else if (index < 3) {
      slides[index].classList.add('active');
      slides[index + 1].classList.remove('active');
      slides[index - 1].classList.remove('active');
    }
    
  };
  // start first slide
  slides[0].classList.add('active');

  const nextSlide = () => {
    currentSlide = currentSlide >= slides.length - 1 ? 0 : currentSlide + 1;
    moveSlides(currentSlide)
  }

  const prevSlide = () => {
    currentSlide = currentSlide <= 0 ? slides.length - 1 : currentSlide - 1;
    moveSlides(currentSlide);
  }

  
  return {
    nextSlide,
    prevSlide
  }
};


