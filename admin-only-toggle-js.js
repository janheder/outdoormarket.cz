

(() => {
    if (!document.body.classList.contains('admin-logged')) {
        return;
    }

    const timestamp = Date.now();
    const redesignCssUrl = 'https://outdoormarket-cz.pages.dev/redesign.css?v=' + timestamp; 
    const redesignJsUrl = 'https://outdoormarket-cz.pages.dev/redesign.js?v=' + timestamp; 
    const storageKey = 'shoptet-redesign-preview';

    const initRedesignToggle = () => {
        if (document.getElementById('redesign-toggle-container')) return;

        const isEnabled = localStorage.getItem(storageKey) === 'enabled';

        const toggleRedesign = (enable) => {
            const existingStyle = document.getElementById('redesign-preview-style');
            const existingScript = document.getElementById('redesign-preview-script');

            if (enable) {
                if (!existingStyle) {
                    const styleLink = document.createElement('link');
                    styleLink.rel = 'stylesheet';
                    styleLink.href = redesignCssUrl;
                    styleLink.id = 'redesign-preview-style';
                    document.head.appendChild(styleLink);
                }
                if (!existingScript) {
                    const scriptTag = document.createElement('script');
                    scriptTag.src = redesignJsUrl;
                    scriptTag.id = 'redesign-preview-script';
                    scriptTag.defer = true;
                    document.head.appendChild(scriptTag);
                }
                localStorage.setItem(storageKey, 'enabled');
            } else {
                if (existingStyle) existingStyle.remove();
                if (existingScript) existingScript.remove();
                localStorage.setItem(storageKey, 'disabled');
            }
        };

        const toggleContainer = document.createElement('div');
        toggleContainer.id = 'redesign-toggle-container';
        toggleContainer.style.cssText = 'position: fixed; bottom: 20px; right: 20px; display: flex; align-items: center; background: #fff; padding: 10px 15px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: 999999; border: 1px solid #e2e8f0;';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'redesign-toggle';
        checkbox.checked = isEnabled;
        checkbox.style.cursor = 'pointer';

        const label = document.createElement('label');
        label.htmlFor = 'redesign-toggle';
        label.innerText = 'Redesign (pouze přihlášený admin)';
        label.style.cssText = 'color: #000; margin-left: 8px; cursor: pointer; font-size: 13px; font-weight: bold; margin-bottom: 0; user-select: none; font-family: sans-serif;';

        toggleContainer.appendChild(checkbox);
        toggleContainer.appendChild(label);
        
        document.body.appendChild(toggleContainer);

        toggleRedesign(isEnabled);

        checkbox.addEventListener('change', (e) => {
            toggleRedesign(e.target.checked);
        });
    };

    if (document.body) {
        initRedesignToggle();
    } else {
        window.addEventListener('DOMContentLoaded', initRedesignToggle);
    }
})();
