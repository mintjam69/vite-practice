import"./assets/styles-BK2ISr_U.js";import{i as k}from"./assets/vendor-frHSA4Lh.js";import{g as m,r as a,s as o}from"./assets/storage-BF_eudZ6.js";const n="tasks";let t=m(n)||[];a.taskList.innerHTML=r(t);a.taskForm.addEventListener("submit",d);a.taskList.addEventListener("click",u);function d(e){e.preventDefault();const s=e.target.elements.taskName.value.trim();if(s===""){k.warning({message:"Enter something for add",position:"topRight"});return}const i={text:s,id:Date.now()};t.push(i),o(n,t),a.taskList.innerHTML=r(t),a.taskForm.reset()}function u(e){e.target.nodeName==="BUTTON"&&(t=t.filter(s=>s.id!==+e.target.id),a.taskList.innerHTML=r(t),o(n,t))}function r(e){return e.map(({text:s,id:i})=>`
  <li>
  ${s} <button id="${i}">Delete</button>
  </li>
  `).join("")}
//# sourceMappingURL=todo.js.map
