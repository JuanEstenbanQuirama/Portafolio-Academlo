const toggleElement = document.getElementById("toggle-menu");
const mainMenuElement = document.getElementById("main-menu");

toggleElement.addEventListener('click', ()=>{
    mainMenuElement.classList.toggle('main-menu--show');
})

