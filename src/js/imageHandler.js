export const imageHandler = (element, url, width, height) => {
  const image = document.createElement('img');
  image.src = url;
  image.height = height;
  image.width = width;
  return element.appendChild(image);
};