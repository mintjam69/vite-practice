import"./assets/styles-Dw0C7vT8.js";function s(){return fetch("https://api.thecatapi.com/v1/breeds?api_key=live_CiyBl2DGdQbtRhqwPqEyMf2vf4H3gOsjs1jxhtBzg9HselLoHgS6M5BXCintOvyN").then(t=>{if(!t.ok)throw new Error("Wrong request");return t.json()}).catch(t=>{console.log(t)})}function a(r){return r.map(({description:o,image:t,name:n,temperament:c,wikipedia_url:e})=>`
    <div class="card">
        <h2 class="card-title">${n}</h2>
        <img src="${(t==null?void 0:t.url)??""}" alt="${n}" class="card-image" />
        <div class="card-body">
            <p><strong>Temperament:</strong>${c}</p>
            <p><strong>About:</strong>${o}</p>
            <a href="${e}" target="_blank">For more information</a>
        </div>
      </div>
    `).join("")}const i=document.querySelector(".card-container");s().then(r=>{console.log(r),i.innerHTML=a(r)});
//# sourceMappingURL=cats.js.map
