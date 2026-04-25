// --- 1. DIT KARTOTEK OVER EMNER ---
// Det er KUN herunder, du skal tilføje nye emner fremover!
const stxMenuData = {
    "A-Niveau": [
        { title: "Integralregning", path: "emner/A/integralregning.html" }
    ],
    "B-Niveau": [

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
        { title: "Pi quiz", path: "spil/piquiz.html" }
    ]
};

// --- 2. MASKINRUMMET (Skal ikke ændres) ---
// Denne funktion bygger automatisk menuen, når en side loader
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('sidebar-menu');
    if (!nav) return; // Hvis der ikke er en menu på siden, stop her.

    let html = `<h2>
    <a href="${window.basePath}index.html" onclick="lukAlleMenuer()" style="text-decoration: none; color: inherit; display: flex; align-items: center; justify-content: center; gap: 10px;">
        <span style="font-family: 'Georgia', serif; font-size: 2.2em; color: #3498db; font-weight: normal; line-height: 0.8; position: relative; top: -5px;">π</span> 
        STX Matematik
    </a>
</h2>`;

    // Kør igennem alle niveauerne
    for (const [niveau, emner] of Object.entries(stxMenuData)) {
        const menuId = "menu-" + niveau.charAt(0); // Giver id'er som "menu-A"

        html += `
        <div class="level-container" id="${menuId}">
            <button class="level-btn" type="button">${niveau} <span class="arrow">▶</span></button>
            <ul class="submenu">
        `;

        // Kør igennem alle emner og byg links. 
        // window.basePath sørger for, at stien enten hedder "../A/" eller "emner/A/" alt efter hvor vi er.
        emner.forEach(emne => {
            html += `<li><a href="${window.basePath}${emne.path}">${emne.title}</a></li>`;
        });

        html += `
            </ul>
        </div>
        `;
    }

    // Tilføj Forside-knappen i bunden
    html += `
    <div class="sidebar-footer">
        <a href="${window.basePath}index.html" class="home-link" onclick="localStorage.clear();">Forside</a>
    </div>
    `;

    // Sæt hele denne kode ind i HTML'en
    nav.innerHTML = html;

    // --- 3. AKTIVER HUKOMMELSE OG FARVER ---
    aktiverMenuFunktioner();
});

function aktiverMenuFunktioner() {
    // Fold-ud og hukommelse
    document.querySelectorAll('.level-container').forEach(container => {
        const menuId = container.id;
        const btn = container.querySelector('.level-btn');
        const state = localStorage.getItem(menuId);
        
        if (state === 'aaben') container.classList.add('active');

        btn.addEventListener('click', (e) => {
            e.preventDefault(); 
            const isActive = container.classList.toggle('active');
            localStorage.setItem(menuId, isActive ? 'aaben' : 'lukket');
        });
    });

    // Fremhæv den side vi er på lige nu
    const currentFile = window.location.pathname.split('/').pop(); 
    document.querySelectorAll('.submenu a').forEach(link => {
        const linkFile = link.getAttribute('href').split('/').pop(); 
        if (linkFile === currentFile && currentFile !== '') {
            link.classList.add('current-page');
        }
    });

    // Sæt årstal i bunden (Hvis du også vil have JavaScript til at gøre dette centralt)
    const yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
}

window.lukAlleMenuer = function() {
    // 1. Fjerner 'active' klassen så de lukker visuelt her og nu
    const aktiveElementer = document.querySelectorAll('#sidebar-menu .active');
    aktiveElementer.forEach(el => {
        el.classList.remove('active');
    });

    // 2. DET VIGTIGSTE: Vi rydder localStorage, så menuen "glemmer" 
    // at bjælkerne var åbne, når den nye side indlæses.
    localStorage.clear(); 
};


// --- Indsæt Favicon (Fane-logo) automatisk på alle sider ---
const faviconLink = document.createElement('link');
faviconLink.rel = 'icon';
// Font-size er sat op til 110, og y-positionen er justeret for at centrere den
faviconLink.href = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.82em' font-size='110' font-family='Georgia, serif' fill='%233498db'>π</text></svg>";
document.head.appendChild(faviconLink);
// -----------------------------------------------------------
