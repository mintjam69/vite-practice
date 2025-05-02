import{g as k,r as a,s as o}from"./assets/storage-BsKeap_u.js";/* empty css                      */import{i as m}from"./assets/vendor-I1I71QQ2.js";const n="tasks";let t=k(n)||[];a.taskList.innerHTML=r(t);a.taskForm.addEventListener("submit",d);a.taskList.addEventListener("click",u);function d(e){e.preventDefault();const s=e.target.elements.taskName.value.trim();if(s===""){m.warning({message:"Enter something for add",position:"topRight"});return}const i={text:s,id:Date.now()};t.push(i),o(n,t),a.taskList.innerHTML=r(t),a.taskForm.reset()}function u(e){e.target.nodeName==="BUTTON"&&(t=t.filter(s=>s.id!==+e.target.id),a.taskList.innerHTML=r(t),o(n,t))}function r(e){return e.map(({text:s,id:i})=>`
  <li>
  ${s} <button id="${i}">Delete</button>
  </li>
  `).join("")}
//# sourceMappingURL=todo.js.map
