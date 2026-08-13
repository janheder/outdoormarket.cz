const isSk = (document.documentElement.lang || 'cs').toLowerCase().startsWith('sk');

function headerPhone() {
    const elementKPresunu = document.querySelector('.top-navigation-bar .top-navigation-contacts');
    const novyRodic = document.querySelector('.header-top');
    
    if (elementKPresunu && novyRodic) {
        const phoneLink = elementKPresunu.querySelector('.project-phone');
        const span = phoneLink?.querySelector('span');
        
        if (phoneLink && span) {
            // Vezme pouze text před první závorkou "("
            const cistyText = span.textContent.split('(')[0];
            const matches = cistyText.match(/\d+/g);
            
            if (matches) {
                const cislo = matches.join('');
                if (cislo.length === 9) {
                    let prefix = '+420';
                    let ariaLabelPrefix = 'Telefon';

                    if (typeof isSk !== 'undefined' && isSk) {
                        prefix = '+421';
                        ariaLabelPrefix = 'Telefón';
                    }

                    const naformatovaneCislo = `${prefix} ${cislo.substring(0, 3)} ${cislo.substring(3, 6)} ${cislo.substring(6, 9)}`;
                    
                    // Nastaví čisté naformátované číslo
                    span.textContent = naformatovaneCislo;
                    phoneLink.setAttribute('aria-label', `${ariaLabelPrefix}: ${naformatovaneCislo}`);
                }
            }
        }
        novyRodic.appendChild(elementKPresunu);
    }
}

function cartHeaderStep() {
    const cartHeader = document.querySelector('.ordering-process .cart-header');
    if (cartHeader) {
        let text = 'Dokončení objednávky';

        if (isSk) {
            text = 'Dokončenie objednávky';
        }

        cartHeader.append(
            Object.assign(document.createElement('li'), {
                className: 'step step-4',
                innerHTML: `<strong><span>${text}</span></strong>`
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

function headerSocials() {
  const targetElement = document.querySelector('.top-navigation-menu');

  if (document.querySelector('.header-socials')) return;

  if (targetElement) {
    const htmlContent = `
      <div class="header-socials">
        <div class="header-socials__title">Sledujte nás</div>
        <a href="https://www.facebook.com/outdoormarket.cz" class="header-socials__link" target="_blank" rel="noopener noreferrer nofollow">
          <span class="header-socials__icon">
            <img src="https://outdoormarket-cz.pages.dev/icons/facebook.svg" loading="eager" alt="Facebook icon" width="6" height="12">
          </span>
          Facebook
        </a>
        <a href="https://www.instagram.com/outdoormarket.cz/" class="header-socials__link" target="_blank" rel="noopener noreferrer nofollow">
          <span class="header-socials__icon">
            <img src="https://outdoormarket-cz.pages.dev/icons/instagram.svg" loading="eager" alt="Instagram icon" width="12" height="12">
          </span>
          Instagram
        </a>
      </div>
    `;

    targetElement.insertAdjacentHTML('afterend', htmlContent);
  }
}

function saiSliderSocials() {
    document.querySelectorAll('.sai-ProductWidget__productsWrapper .price-save').forEach(el => {
    // Pokud text začíná slovem "až", zabalíme ho do <span class="until">až</span> a nahradíme mezeru před % za &nbsp;
    if (el.textContent.includes('až')) {
        el.innerHTML = el.innerHTML
        .replace(/až\s*/i, '<span class="until">až</span> ')
        .replace(/\s+%/g, '&nbsp;%');
    }
    });
}




document.addEventListener("DOMContentLoaded", () => {
    headerPhone();   
    cartHeaderStep();
    footerSectionsToggle();
    productFavourite();
    headerSocials();
    saiSliderSocials();
}); 