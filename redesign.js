function headerPhone() {
    const elementKPresunu = document.querySelector('.top-navigation-bar .top-navigation-contacts');
    const novyRodic = document.querySelector('.header-top');
    if (elementKPresunu && novyRodic) {
        novyRodic.appendChild(elementKPresunu);
    }
}

function cartHeaderStep() {
    const cartHeader = document.querySelector('.ordering-process .cart-header');
    if (cartHeader) {
        cartHeader.append(
            Object.assign(document.createElement('li'), {
                className: 'step step-4',
                innerHTML: `<strong><span>Dokončení objednávky</span></strong>`
            })
        );
    }
}



/* document.addEventListener("DOMContentLoaded", () => { */
    headerPhone();   
    cartHeaderStep();
/* }); */