const form = document.querySelector('.login-form');

function handleSubmit(event) {
    event.preventDefault();

    const { email, password } = form.elements;
    if (email.value.trim() === '' || password.value.trim() === '') {
        alert(`All form fields must be filled in`);
        return;
    }
    const formData = {
        email: email.value.trim(),
        password: password.value.trim()
    };
    
    console.log(formData);
    form.reset();
}
    form.addEventListener('submit', handleSubmit);
