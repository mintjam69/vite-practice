import photo from '../../img/not-found.jpeg'

export function createMarkup(arr) {
    return arr.map(({ description, image, name, temperament, wikipedia_url }) => `
    <div class="card">
        <h2 class="card-title">${name}</h2>
        <img src="${image?.url ?? photo}" alt="${name}" class="card-image" />
        <div class="card-body">
            <p><strong>Temperament:</strong>${temperament}</p>
            <p><strong>About:</strong>${description}</p>
            <a href="${wikipedia_url}" target="_blank">For more information</a>
        </div>
      </div>
    `).join("");
}

export function createRandomMarkup (arr) {
    return arr.map(({id, url}) =>
    `    <div class="card">
      <a href="${url}"><img src="${url}" alt="${id}" class="card-image"></a>
    </div>`
    ).join('');
}

export function showElement (element){
element.classList.remove('hidden');
}

export function hideElement (element){
    element.classList.add('hidden');
}