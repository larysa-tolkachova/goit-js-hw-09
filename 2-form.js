import"./assets/styles-CPl-rJYj.js";const o={email:"",message:""},n="feedback-form-state",t=document.querySelector(".feedback-form"),l=t.querySelector('input[name="email"]'),r=t.querySelector('textarea[name="message"]');t.querySelector("button");t.addEventListener("submit",i);t.addEventListener("input",m);const s=JSON.parse(localStorage.getItem(n))||{};l.value=s.email||"";r.value=s.message||"";function m(e){const a=e.target.name;(a==="email"||a==="message")&&(o[a]=e.target.value.trim(),localStorage.setItem(n,JSON.stringify(o)))}function i(e){e.preventDefault(),l.value===""||r.value===""?alert("«Fill please all fields»"):(console.log({email:l.value,message:r.value}),e.currentTarget.reset(),localStorage.removeItem(n))}
//# sourceMappingURL=2-form.js.map
