const toggleButton = document.getElementsByClassName('burger')[0];
const navBar = document.getElementsByClassName('nav-main-div')[0];

toggleButton.addEventListener('click', () => {
    navBar.classList.toggle('active')
})

