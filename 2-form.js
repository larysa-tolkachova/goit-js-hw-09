import"./assets/styles-BLhbhNtt.js";const r={email:"",message:""},o="feedback-form-state",a=document.querySelector(".feedback-form");a.querySelector('input[name="email"]');a.querySelector('textarea[name="message"]');a.querySelector("button");a.addEventListener("submit",n);a.addEventListener("input",l);function l(t){const e=t.target.name;(e==="email"||e==="message")&&(r[e]=t.target.value.trim(),localStorage.setItem(o,JSON.stringify(r)))}function n(t){t.preventDefault();const e=JSON.parse(localStorage.getItem(o))||{};(e.email===""||e.message==="")&&alert("«Fill please all fields»"),console.log(r),t.currentTarget.reset(),localStorage.removeItem(o)}
//# sourceMappingURL=2-form.js.map
