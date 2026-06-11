// --- Indsæt Favicon (Fane-logo) automatisk på alle sider ---
const faviconLink = document.createElement('link');
faviconLink.rel = 'icon';
faviconLink.href = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.82em' font-size='110' font-family='Georgia, serif' fill='%233498db'>π</text></svg>";
document.head.appendChild(faviconLink);
// -----------------------------------------------------------

// --- 1. DIT KARTOTEK OVER EMNER ---
const stxMenuData = {
    "A-Niveau": [
        { title: "Funktioner A", path: "emner/A/funktionerA.html" },
        { title: "Differentialligninger", path: "emner/A/Differentialligninger.html" },
        { title: "Vektorfunktioner og parameterkurver", path: "emner/A/VektorfunktionerParameterkurver.html" },
        { title: "Funktioner af to variable", path: "emner/A/Funktionertovariable.html" },
        { title: "Sandsynlighedsregning", path: "emner/A/Sandsynlighedsregning.html" },
        { title: "Tal", path: "emner/A/Tal.html" },
        { title: "Keglesnit", path: "emner/A/Keglesnit.html" },
        { title: "Polære funktioner", path: "emner/A/polaere_funktioner.html" }
    ],
    "B-Niveau": [
        { title: "Differentialregning - B", path: "emner/B/differentialregning.html" },
        { title: "Integralregning", path: "emner/B/integralregning.html" },
        { title: "Sandsynlighedsregning og statistik", path: "emner/B/Sandsynlighedsregningstatistik.html" },
        { title: "Vektorer i 2D", path: "emner/B/Vektorer2D.html" }
    ],
    "C-Niveau": [
        { title: "Funktioner C", path: "emner/C/Funktioner.html" },
        { title: "polynomier", path: "emner/C/polynomier.html" },
        { title: "Differentialregning - C", path: "emner/C/differentialregning.html" },
        { title: "vektor i 2d", path: "emner/C/c-vektor2d.html" },
        { title: "Statistik", path: "emner/C/Statistik.html" },
    ],
    "Formelsamlinger": [
        { title: "A-niveau", path: "formelsamling/A/formelsamlingA.html" },
        { title: "B-niveau", path: "formelsamling/B/formelsamlingB.html" },
        { title: "C-niveau", path: "formelsamling/C/formelsamlingC.html" }
    ],
    "Spil": [
        { title: "Pi quiz", path: "spil/piquiz.html" },
        { title: "Euler's tal quiz", path: "spil/equiz.html" },
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

    // Tilføj det indbyggede søgefelt her
    html += `
    <div style="padding: 0 15px 15px 15px; position: relative;">
        <input type="text" id="menuSearch" placeholder="Søg i noter..." style="width: 100%; padding: 8px; border-radius: 5px; border: 1px solid #bdc3c7; box-sizing: border-box; font-family: inherit; font-size: 0.9rem; outline: none;">
        <ul id="menuSearchResults" style="list-style: none; padding: 0; margin: 5px 0 0 0; background: white; border-radius: 5px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); position: absolute; z-index: 1000; width: calc(100% - 30px); max-height: 250px; overflow-y: auto; display: none;"></ul>
    </div>
    `;

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

    // --- 3. AKTIVER HUKOMMELSE, FARVER OG SØGNING ---
    aktiverMenuFunktioner();
    aktiverSoegefunktion(); // Ny funktion kaldes her

    // --- 4. HAMBURGER MENU TIL MOBIL ---
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger-btn';
    hamburger.innerHTML = '☰'; 
    document.body.appendChild(hamburger);

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('mobile-open'); 
        
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
    
    const currentPath = window.location.pathname; 
    document.querySelectorAll('.submenu a').forEach(link => {
        if (link.pathname === currentPath && currentPath !== '/' && currentPath !== '') {
            link.classList.add('current-page');
        }
    });

    const yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
}

// --- NY FUNKTION: Håndterer søgefeltet ---
function aktiverSoegefunktion() {
    const searchInput = document.getElementById('menuSearch');
    const searchResults = document.getElementById('menuSearchResults');
    
    // Samler alle sider fra menuen i én lang liste, så den er let at søge i
    let allPages = [];
    for (const [niveau, emner] of Object.entries(stxMenuData)) {
        emner.forEach(emne => {
            allPages.push({ title: emne.title, path: emne.path, niveau: niveau });
        });
    }

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        searchResults.innerHTML = '';
        
        if (query.length === 0) {
            searchResults.style.display = 'none';
            return;
        }

        // Filtrer siderne baseret på det indtastede
        const filtered = allPages.filter(p => p.title.toLowerCase().includes(query));
        
        if (filtered.length > 0) {
            searchResults.style.display = 'block';
            filtered.forEach(p => {
                const li = document.createElement('li');
                li.style.borderBottom = '1px solid #ecf0f1';
                
                // Tilføj hover-effekt via JavaScript for at holde det samlet her
                li.addEventListener('mouseenter', () => li.style.backgroundColor = '#f4f7f6');
                li.addEventListener('mouseleave', () => li.style.backgroundColor = 'transparent');

                li.innerHTML = `
                    <a href="${window.basePath}${p.path}" style="text-decoration: none; color: #2c3e50; font-size: 0.9em; display: block; padding: 10px; transition: background 0.2s;">
                        <strong>${p.title}</strong><br>
                        <span style="font-size:0.75em; color:#7f8c8d; text-transform: uppercase;">${p.niveau}</span>
                    </a>
                `;
                searchResults.appendChild(li);
            });
        } else {
            searchResults.style.display = 'block';
            searchResults.innerHTML = '<li style="padding: 10px; color: #7f8c8d; font-size: 0.9em; text-align: center;">Ingen resultater fundet</li>';
        }
    });

    // Skjul resultater, hvis man klikker et andet sted på skærmen
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
}

window.lukAlleMenuer = function() {
    const aktiveElementer = document.querySelectorAll('#sidebar-menu .active');
    aktiveElementer.forEach(el => {
        el.classList.remove('active');
    });
    sessionStorage.clear(); 
};