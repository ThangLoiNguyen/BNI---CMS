//---Show password

var toggler = document.getElementById('toggler');
var password = document.getElementById('password');

var hidePassword = true
function myfunction() {
    if (hidePassword) {
        password.type = 'text';
        toggler.className = 'sign-in__form--icon fa-regular fa-eye';
        hidePassword = false;
    } else {
        password.type = 'password';
        hidePassword = true;
        toggler.className = 'sign-in__form--icon fa-regular fa-eye-slash';
    }
}

//---Required password
document.getElementById('submit').addEventListener('click', function (event) {
    const pass = document.getElementById('password').value;
    const mail = document.getElementById('email').value;
    if (mail === '') {
        alert('Enter your Email!');
    }

    else if (pass === '') {
        alert('Enter password!');
    }

    else {
        window.location.href = 'https://gecko-cms.2soft.top/';
    }
})
