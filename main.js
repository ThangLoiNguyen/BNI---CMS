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