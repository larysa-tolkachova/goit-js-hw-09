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

//отримуємо дані з LS і передаємо в поля
function relevantDan() {
    try {
        if (localStorage.length === 0) {
            return
        }
    
    const lsDan = JSON.parse(localStorage.getItem(LS_key));
        
    input.value = lsDan.email;
    textarea.value = lsDan.message;  
        
        for (const key in lsDan) {
            
            form.elements[key].value = lsDan[key];
        }
    
    } catch (error) {
        console.log(error);
    } 
    
}

relevantDan();

// беремо дані з поля і передаємо в LS
function inputDan(event) {
    const input = event.target.name;
     
    if (input === 'email' || input === 'message') {
        formData[input] = event.target.value.trim();
               
        localStorage.setItem(LS_key, JSON.stringify(formData));
         
    }
}

//передаємо дані та очищаємо форму та LS
function handleSubmit(event) {
    event.preventDefault();
    
    if (input.value === "" || textarea.value === "") {
        alert("«Fill please all fields»");        
    }

    console.log(`Email: ${input.value}\nMessage: ${textarea.value}`); 
    event.currentTarget.reset();
    localStorage.removeItem(LS_key);
}


