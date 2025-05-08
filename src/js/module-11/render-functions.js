export function createMarkup(arr) {
    return arr.map(({ description, image, name, temperament, wikipedia_url }) => `
    <div class="card">
        <h2 class="card-title">${name}</h2>
        <img src="${image?.url ?? ""}" alt="${name}" class="card-image" />
        <div class="card-body">
            <p><strong>Temperament:</strong>${temperament}</p>
            <p><strong>About:</strong>${description}</p>
            <a href="${wikipedia_url}" target="_blank">For more information</a>
        </div>
      </div>
    `).join("");
}