const form = document.querySelector('#form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const error = document.querySelector('#error');
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!name.value.trim()) {
        // alert('Name is required!');
        error.innerText = 'Name is required!';
    }
    else if (name.value.trim().length < 4) {
        error.innerText = 'Name should be at least of four letters!';
         }
    else if (!email.value.trim()) {
        // alert('Email is required!');
        error.innerText = 'Email is required!';
    }
    else if (!emailRegex.test(email.value.trim())) {
         alert('Please enter valid email');
    }
    else if (!message.value.trim()) {
        // alert('You must add message to send it!');
        error.innerText = 'You must add message to send it!';
    }
    else{
        alert ('Form submitted successfully!'); 
        form.reset();
}
    
});