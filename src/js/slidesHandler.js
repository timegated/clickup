export const slidesHandler = (target, arr) => {
  target.innerHTML = `
    ${arr.map(item => {
      return `
        <section class="slide">
        <div class="slide__content">
          <div class="slide__content--row">
            <div class="slide__content--image">
              <img src=${item.img} alt="The user icon"/>
            </div>
            <div class="slide__content--title">
              <span>${item.name}</span>
              <a href="#">${item.website}</a>
              </div>
          
          </div>
          <div class="slide__content--copy">
          <p>${item.copy}</p>
        </div>
          </div>
        </section>
      `
    }).join('')}
  `
};