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
        console.log(formData);
        
    }
}

    const lsDan = JSON.parse(localStorage.getItem(LS_key)) || {};

    input.value = lsDan.email || "";
    textarea.value = lsDan.message || "";   


function handleSubmit(event) {
    event.preventDefault();
    
    if (lsDan.email === "" || lsDan.message === "") {
        alert("«Fill please all fields»");
    }
    
    console.log(lsDan);   
    event.currentTarget.reset();
    localStorage.removeItem(LS_key);
}


// ===============================
// const formData = {
//     email: " ",
//     message: " ",
// };
// const form = document.querySelector('.feedback-form');
// const input = document.querySelector('[type="email"]');
// const textarea = document.querySelector('[name="message"]');

// const savedData = JSON.parse(localStorage.getItem("feedback-form-state")) || {};

// input.value = savedData.email || "";
// textarea.value = savedData.message || "";

// form.addEventListener("input", (evt) => {
//     console.log(evt);
//     console.log(input.value);
    
//     console.log(textarea.value);
    
    
//     formData.email = input.value;
//     formData.message = textarea.value;
//     localStorage.setItem("feedback-form-state", JSON.stringify(formData));
// })

// form.addEventListener("submit", (evt)=> {
//     evt.preventDefault();
//     if (textarea.value !== "" && input.value !== "") {
//         console.log({email: input.value, message: textarea.value});
//         form.reset();
//         localStorage.removeItem("feedback-form-state");
//     } else {
//         alert("Fill please all fields");
//     };
// })