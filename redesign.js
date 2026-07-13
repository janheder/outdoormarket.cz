function headerPhone() {
    const elementKPresunu = document.querySelector('.top-navigation-bar .top-navigation-contacts');
    const novyRodic = document.querySelector('.header-top');
    if (elementKPresunu && novyRodic) {
        novyRodic.appendChild(elementKPresunu);
    }
}




document.addEventListener("DOMContentLoaded", () => {
    headerPhone();  
});