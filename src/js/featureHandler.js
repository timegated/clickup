export const featureHandler = (target, arr) => {
  target.innerHTML = `
    ${arr.map(feature => {
      return `
        <section>
          <img src=${feature.img} alt=${feature.title} width=232 />
          <div class="content">
            <h2>${feature.title}</h2>
            <p>${feature.copy}</p>
            <div class="btn__container">
            <button class="feature--btn">${feature.btnTxt}</button>
            <span class="fas fa-arrow-right purple"></span>
            </div>
          </div>
        </section>
      `
    }).join('')}
  `
};