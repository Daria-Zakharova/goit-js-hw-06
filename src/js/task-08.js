const LoginFormEl = document.querySelector('.login-form');

const submitLoginForm = event => {
    
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    if (!email.value || !password.value) {
        alert('Please, make sure all the required fields are filled in!');
    }

    else {
        const loginData = { email: email.value, password: password.value };
        console.log(loginData);
        event.currentTarget.reset();
    }
}

LoginFormEl.addEventListener('submit', submitLoginForm);
