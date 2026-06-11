// --- Indsæt Favicon (Fane-logo) automatisk på alle sider ---
const faviconLink = document.createElement('link');
faviconLink.rel = 'icon';
faviconLink.href = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.82em' font-size='110' font-family='Georgia, serif' fill='%233498db'>π</text></svg>";
document.head.appendChild(faviconLink);
// -----------------------------------------------------------

// --- 1. DIT KARTOTEK OVER EMNER (Nu med nøgleord!) ---
const stxMenuData = {
    "A-Niveau": [
        { title: "Funktioner A", path: "emner/A/funktionerA.html", keywords: "definitionsmængde værdimængde nulpunkter ekstrema" },
        { title: "Differentialligninger", path: "emner/A/Differentialligninger.html", keywords: "separation af de variable panserformlen vækstmodeller logistisk vækst" },
        { title: "Vektorfunktioner og parameterkurver", path: "emner/A/VektorfunktionerParameterkurver.html", keywords: "hastighedsvektor accelerationsvektor banekurve" },
        { title: "Funktioner af to variable", path: "emner/A/Funktionertovariable.html", keywords: "niveaukurver partielt afledede sadelpunkt gradient" },
        { title: "Sandsynlighedsregning", path: "emner/A/Sandsynlighedsregning.html", keywords: "binomialfordeling normalfordeling middelværdi varians" },
        { title: "Tal", path: "emner/A/Tal.html", keywords: "komplekse tal reelle tal" },
        { title: "Keglesnit", path: "emner/A/Keglesnit.html", keywords: "cirkel ellipse parabel hyperbel brændpunkt" }, // <-- Se her! Nu virker søgning på hyperbel.
        { title: "Polære funktioner", path: "emner/A/polaere_funktioner.html", keywords: "polære koordinater vinkel radius" }
    ],
    "B-Niveau": [
        { title: "Differentialregning - B", path: "emner/B/differentialregning.html", keywords: "tretrinsreglen h-reglen tangentligning sekant produktreglen" },
        { title: "Integralregning", path: "emner/B/integralregning.html", keywords: "arealet under kurven stamfunktion substitution" },
        { title: "Sandsynlighedsregning og statistik", path: "emner/B/Sandsynlighedsregningstatistik.html", keywords: "chi-i-anden test p-værdi boksplot" },
        { title: "Vektorer i 2D", path: "emner/B/Vektorer2D.html", keywords: "prikprodukt skalarprodukt determinant tværvektor" }
    ],
    "C-Niveau": [
        { title: "Funktioner C", path: "emner/C/Funktioner.html", keywords: "lineær eksponentiel potens fordoblingskonstant" },
        { title: "Polynomier", path: "emner/C/polynomier.html", keywords: "andengradsligning diskriminant toppunkt" },
        { title: "Differentialregning - C", path: "emner/C/differentialregning.html", keywords: "hældning væksthastighed" },
        { title: "Vektor i 2D", path: "emner/C/c-vektor2d.html", keywords: "længde koordinater addition" },
        { title: "Statistik", path: "emner/C/Statistik.html", keywords: "middeltal median typetal kvartilsæt" }
    ],
    "Formelsamlinger": [
        { title: "A-niveau", path: "formelsamling/A/formelsamlingA.html", keywords: "formler overblik" },
        { title: "B-niveau", path: "formelsamling/B/formelsamlingB.html", keywords: "formler overblik" },
        { title: "C-niveau", path: "formelsamling/C/formelsamlingC.html", keywords: "formler overblik" }
    ],
    "Spil": [
        { title: "Pi quiz", path: "spil/piquiz.html", keywords: "konkurrence spil sjov" },
        { title: "Euler's tal quiz", path: "spil/equiz.html", keywords: "konkurrence spil sjov" }
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

    // Indbygget søgefelt
    html += `
    <div style="padding: 0 15px 15px 15px; position: relative;">
        <input type="text" id="menuSearch" placeholder="Søg i noter (fx 'hyperbel')..." style="width: 100%; padding: 8px; border-radius: 5px; border: 1px solid #bdc3c7; box-sizing: border-box; font-family: inherit; font-size: 0.9rem; outline: none;">
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
    aktiverSoegefunktion();

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

// --- NY FUNKTION: Håndterer søgefeltet med nøgleord ---
function aktiverSoegefunktion() {
    const searchInput = document.getElementById('menuSearch');
    const searchResults = document.getElementById('menuSearchResults');
    
    // Samler alle sider fra menuen, nu inklusiv nøgleordene (hvis de findes)
    let allPages = [];
    for (const [niveau, emner] of Object.entries(stxMenuData)) {
        emner.forEach(emne => {
            allPages.push({ 
                title: emne.title, 
                path: emne.path, 
                niveau: niveau,
                keywords: emne.keywords ? emne.keywords.toLowerCase() : "" 
            });
        });
    }

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        searchResults.innerHTML = '';
        
        if (query.length === 0) {
            searchResults.style.display = 'none';
            return;
        }

        // Filtrer siderne: Findes teksten enten i titlen ELLER i nøgleordene?
        const filtered = allPages.filter(p => {
            return p.title.toLowerCase().includes(query) || p.keywords.includes(query);
        });
        
        if (filtered.length > 0) {
            searchResults.style.display = 'block';
            filtered.forEach(p => {
                const li = document.createElement('li');
                li.style.borderBottom = '1px solid #ecf0f1';
                
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