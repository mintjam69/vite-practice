export function createGalleryCard(arr) {
  return arr
    .map(({ alt_description, urls: { small }, description }) => {
      return `
          <li class="gallery-item">
            <img src="${small}" alt="${alt_description}" class="gallery-img" />
            <p class="gallery-image-descr">${alt_description}</p>
          </li>
    `;
    })
    .join('');
}
