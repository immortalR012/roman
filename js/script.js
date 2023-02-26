let inbutton = document.querySelector('.in-button');
let loginpopup = document.querySelector('.login-popup');
let buttonclouse = document.querySelector('.button-clouse');




function showpopup() {

    loginpopup.classList.add('show-popup')
}



function closepopup() {

    loginpopup.classList.remove('show-popup')

};
inbutton.addEventListener('click', showpopup)
buttonclouse.addEventListener('click', closepopup)





