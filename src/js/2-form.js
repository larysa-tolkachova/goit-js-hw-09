const formData = {
    email: "",
    message: ""
}


const LS_key = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const input = form.querySelector('input[name="email"]');
const textarea = form.querySelector('textarea[name="message"]');
const button = form.querySelector("button");


form.addEventListener("submit", handleSubmit);
form.addEventListener("input", inputDan);

function inputDan(event) {
    const input = event.target.name;

    if (input === 'email' || input === 'message') {
        formData[input] = event.target.value.trim();
        localStorage.setItem(LS_key, JSON.stringify(formData));
    
    }
}

function handleSubmit(event) {
    event.preventDefault();

    const lsDan = JSON.parse(localStorage.getItem(LS_key)) || {};
       
    if (lsDan.email === "" || lsDan.message === "") {
        alert("«Fill please all fields»");
    }
    
    console.log(formData);   
    event.currentTarget.reset();
    localStorage.removeItem(LS_key);
}