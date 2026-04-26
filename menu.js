// --- Indsæt Favicon (Fane-logo) automatisk på alle sider ---
const faviconLink = document.createElement('link');
faviconLink.rel = 'icon';
faviconLink.href = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.82em' font-size='110' font-family='Georgia, serif' fill='%233498db'>π</text></svg>";
document.head.appendChild(faviconLink);
// -----------------------------------------------------------

// --- 1. DIT KARTOTEK OVER EMNER ---
const stxMenuData = {
    "A-Niveau": [
        { title: "Integralregning", path: "emner/A/integralregning.html" }
    ],
    "B-Niveau": [
        { title: "Differentialregning", path: "emner/B/differentialregning.html" }
    ],
    "C-Niveau": [
        { title: "Funktioner", path: "emner/C/Funktioner.html" }
    ],
    "Formelsamlinger": [
        { title: "A-niveau", path: "formelsamling/A/formelsamlingA.html" },
        { title: "B-niveau", path: "formelsamling/B/formelsamlingB.html" },
        { title: "C-niveau", path: "formelsamling/C/formelsamlingC.html" }
    ],
    "Spil": [
        { title: "Pi quiz", path: "spil/piquiz.html" },
    ]
};

// --- 2. MASKINRUMMET (Skal ikke ændres) ---
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('sidebar-menu');
    if (!nav) return;

    let html = `<h2>
    <a href="${window.basePath}index.html" onclick="lukAlleMenuer()" style="text-decoration: none; color: inherit; display: flex; align-items: center; justify-content: center; gap: 10px;">
        <span style="font-family: 'Georgia', serif; font-size: 2.2em; color: #3498db; font-weight: normal; line-height: 0.8; position: relative; top: -5px;">π</span> 
        STX Matematik
    </a>
</h2>`;

    for (const [niveau, emner] of Object.entries(stxMenuData)) {
        const menuId = "menu-" + niveau.replace(/\s+/g, ''); 

        html += `
        <div class="level-container" id="${menuId}">
            <button class="level-btn" type="button">${niveau} <span class="arrow">▶</span></button>
            <ul class="submenu">
        `;

        emner.forEach(emne => {
            html += `<li><a href="${window.basePath}${emne.path}">${emne.title}</a></li>`;
        });

        html += `
            </ul>
        </div>
        `;
    }

    html += `
    <div class="sidebar-footer">
        <a href="${window.basePath}index.html" class="home-link" onclick="sessionStorage.clear();">Forside</a>
    </div>
    `;

    nav.innerHTML = html;

    // --- 3. AKTIVER HUKOMMELSE OG FARVER ---
    aktiverMenuFunktioner();

    // --- 4. HAMBURGER MENU TIL MOBIL ---
    // Skaber knappen og lægger den ind på siden
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger-btn';
    hamburger.innerHTML = '☰'; // Starter som en hamburger
    document.body.appendChild(hamburger);

    // Lytter efter klik på knappen
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('mobile-open'); // Åbner/lukker menuen i CSS
        
        // Skifter ikon mellem hamburger og kryds
        if (nav.classList.contains('mobile-open')) {
            hamburger.innerHTML = '✖'; 
        } else {
            hamburger.innerHTML = '☰'; 
        }
    });
});

function aktiverMenuFunktioner() {
    document.querySelectorAll('.level-container').forEach(container => {
        const menuId = container.id;
        const btn = container.querySelector('.level-btn');
        const state = sessionStorage.getItem(menuId);
        
        if (state === 'aaben') container.classList.add('active');

        btn.addEventListener('click', (e) => {
            e.preventDefault(); 
            const isActive = container.classList.toggle('active');
            sessionStorage.setItem(menuId, isActive ? 'aaben' : 'lukket');
        });
    });

    const currentFile = window.location.pathname.split('/').pop(); 
    document.querySelectorAll('.submenu a').forEach(link => {
        const linkFile = link.getAttribute('href').split('/').pop(); 
        if (linkFile === currentFile && currentFile !== '') {
            link.classList.add('current-page');
        }
    });

    const yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
}

window.lukAlleMenuer = function() {
    const aktiveElementer = document.querySelectorAll('#sidebar-menu .active');
    aktiveElementer.forEach(el => {
        el.classList.remove('active');
    });
    sessionStorage.clear(); 
};