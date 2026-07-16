function headerPhone() {
    const elementKPresunu = document.querySelector('.top-navigation-bar .top-navigation-contacts');
    const novyRodic = document.querySelector('.header-top');
    
    if (elementKPresunu && novyRodic) {
        const phoneLink = elementKPresunu.querySelector('.project-phone');
        const span = phoneLink?.querySelector('span');
        
        if (phoneLink && span) {
            // Vytáhneme z původního textu pouze číslice (např. "778037100")
            const matches = span.textContent.match(/\d+/);
            
            if (matches) {
                const cislo = matches[0]; // Získáme řetězec číslic
                
                // Ověříme, že máme standardní 9místné české číslo
                if (cislo.length === 9) {
                    // Rozdělíme na trojice: 778, 037, 100
                    const naformatovaneCislo = `+420 ${cislo.substring(0, 3)} ${cislo.substring(3, 6)} ${cislo.substring(6, 9)}`;
                    
                    // Upravíme vizuální text i atribut pro přístupnost
                    span.textContent = naformatovaneCislo;
                    phoneLink.setAttribute('aria-label', `Telefon: ${naformatovaneCislo}`);
                }
            }
        }
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

function footerSectionsToggle() {
    const footer = document.getElementById('footer');
    if (footer) {
        footer.addEventListener('click', function(event) {
            if (event.target.matches('#footer .footer__section > h2')) {
                event.target.classList.toggle('--active');
            }
        });
    }
}

function productFavourite() {
    const source = document.querySelector('.product-top .buy-box .dkLabFavouriteDiv');
    const target = document.querySelector('.p-image');

    if (source && target) {
        // Přesune element na konec .p-image
        target.appendChild(source); 
    }
}


/* document.addEventListener("DOMContentLoaded", () => { */
    headerPhone();   
    cartHeaderStep();
    footerSectionsToggle();
    productFavourite();
/* }); */