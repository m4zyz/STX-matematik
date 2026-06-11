// --- Indsæt Favicon (Fane-logo) automatisk på alle sider ---
const faviconLink = document.createElement('link');
faviconLink.rel = 'icon';
faviconLink.href = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.82em' font-size='110' font-family='Georgia, serif' fill='%233498db'>π</text></svg>";
document.head.appendChild(faviconLink);
// -----------------------------------------------------------

// --- 1. KARTOTEK OVER EMNER ---
const stxMenuData = {
    "A-Niveau": [
        {
            title: "Funktioner A",
            path: "emner/A/funktionerA.html",
            keywords: "definitionsmængde værdimængde nulpunkter ekstrema",
            sections: [
                { title: "1. Invers funktion", anchor: "#invers", keywords: "invers funktion omvendt" },
                { title: "2. Trigonometriske funktioner", anchor: "#trigonometri", keywords: "sinus cosinus tangens trigonometri" },
                { title: "3. Harmoniske svingninger", anchor: "#harmonisk", keywords: "harmonisk svingning amplitude periode" },
                { title: "4. Parallelforskydning af grafer", anchor: "#forskydning", keywords: "parallelforskydning graf flytning" }
            ],
            proofs: [
                { title: "Bevis: Omregning grader og radianer", anchor: "#bevis-radian", keywords: "radian grader omregning" }
            ]
        },
        {
            title: "Differentialligninger",
            path: "emner/A/Differentialligninger.html",
            keywords: "separation af de variable panserformlen vækstmodeller logistisk vækst",
            sections: [
                { title: "1. Introduktion", anchor: "#intro", keywords: "introduktion differentialligning" },
                { title: "2. At gøre prøve", anchor: "#proeve", keywords: "prøve gøre prøve tjekke løsning" },
                { title: "3. Bestemmelse af tangentligninger", anchor: "#tangent", keywords: "tangent tangentligning" },
                { title: "4. Linjeelementer og hældningsfelter", anchor: "#haeldning", keywords: "linjeelement hældningsfelt" },
                { title: "5. Simple vækstmodeller", anchor: "#vaekst", keywords: "vækst vækstmodel eksponentiel" },
                { title: "6. Separable differentialligninger", anchor: "#separable", keywords: "separabel separation af variable" },
                { title: "7. Lineære differentialligninger af 1. orden", anchor: "#lineaere", keywords: "lineær panserformel 1. orden" },
                { title: "8. Opstilling af differentialligninger", anchor: "#opstilling", keywords: "opstilling model" }
            ],
            proofs: [
                { title: "Bevis: Separation af variable (Sætn. 2.4)", anchor: "#bevis-separation", keywords: "separation variable" },
                { title: "Bevis: y'=k·y (Separation)", anchor: "#bevis-eksponentiel", keywords: "eksponentiel differentialligning k*y" },
                { title: "Bevis: y'=k·y (Hjælpefunktion)", anchor: "#bevis-eksponentiel-hjaelpe", keywords: "hjælpefunktion k*y" },
                { title: "Bevis: y'=b-a·y (Separation)", anchor: "#bevis-forskudt", keywords: "forskudt eksponentiel b-a*y" },
                { title: "Bevis: y'=b-a·y (Hjælpefunktion)", anchor: "#bevis-forskudt-hjaelpe", keywords: "hjælpefunktion b-a*y" },
                { title: "Bevis: Løsning til y''=h(x)", anchor: "#bevis-ydobbelt-h", keywords: "anden orden dobbelt afledet" },
                { title: "Bevis: Løsning til y''=k", anchor: "#bevis-ydobbelt-k", keywords: "anden orden konstant" },
                { title: "Bevis: Logistisk vækst 1 (Substitution)", anchor: "#bevis-logistisk1", keywords: "logistisk vækst substitution" },
                { title: "Bevis: Logistisk vækst 2 (Partialbrøker)", anchor: "#bevis-logistisk-separation", keywords: "logistisk partialbrøk" },
                { title: "Bevis: Logistisk vækst 2 (Fra 8.3a)", anchor: "#bevis-logistisk-genbrug", keywords: "logistisk genbrug" },
                { title: "Bevis: Maksimal hældning i logistisk vækst", anchor: "#bevis-logistisk-max", keywords: "logistisk maksimum hældning" },
                { title: "Bevis: Panserformlen (Sætn. 8.4)", anchor: "#bevis-lineaer", keywords: "panserformel lineær 1. orden" }
            ]
        },
        {
            title: "Vektorfunktioner og parameterkurver",
            path: "emner/A/VektorfunktionerParameterkurver.html",
            keywords: "hastighedsvektor accelerationsvektor banekurve",
            sections: [
                { title: "1. Vektorfunktion og parameterkurve", anchor: "#intro", keywords: "vektorfunktion parameterfremstilling banekurve" },
                { title: "2. Hastighed og differentialkvotient", anchor: "#hastighed", keywords: "hastighed bevægelse differentialkvotient" },
                { title: "3. Tangentvektor og tangentligning", anchor: "#tangent", keywords: "tangentvektor tangent tangentligning" },
                { title: "4. Acceleration", anchor: "#acceleration", keywords: "acceleration" },
                { title: "5. Dobbeltpunkter", anchor: "#dobbeltpunkter", keywords: "dobbeltpunkt tangent" },
                { title: "6. Anvendelser", anchor: "#anvendelser", keywords: "anvendelse" }
            ],
            proofs: []
        },
        {
            title: "Funktioner af to variable",
            path: "emner/A/Funktionertovariable.html",
            keywords: "niveaukurver partielt afledede sadelpunkt gradient",
            sections: [
                { title: "1. Koordinatsystemer og geometri i 3D", anchor: "#koordinatsystemer", keywords: "3D koordinat vektor geometri" },
                { title: "2. Funktioner af to variable og flader", anchor: "#flader", keywords: "to variable flade graf" },
                { title: "3. Partielle afledede", anchor: "#partielle", keywords: "partiel afledet differentiering" },
                { title: "4. Gradient og tangentplan", anchor: "#gradient", keywords: "gradient tangentplan" },
                { title: "5. Stationære punkter", anchor: "#stationaere", keywords: "stationær punkt sadelpunkt minimum maksimum" }
            ],
            proofs: []
        },
        {
            title: "Sandsynlighedsregning",
            path: "emner/A/Sandsynlighedsregning.html",
            keywords: "binomialfordeling normalfordeling middelværdi varians",
            sections: [
                { title: "1. Normalfordelinger", anchor: "#normalfordelinger", keywords: "normalfordeling normalfordelt" },
                { title: "2. Sammenhæng med binomialfordeling", anchor: "#binomial", keywords: "binomialfordeling sammenhæng normal" },
                { title: "3. Standardnormalfordelingen", anchor: "#standardnormal", keywords: "standardnormal z-score" },
                { title: "4. Estimering af middelværdi og spredning", anchor: "#estimering", keywords: "estimering middelværdi spredning" },
                { title: "5. Residualer og lineær model", anchor: "#residualer", keywords: "residual lineær model" },
                { title: "6. Variabeltransformation", anchor: "#transformation", keywords: "variabeltransformation transformation" }
            ],
            proofs: []
        },
        {
            title: "Tal",
            path: "emner/A/Tal.html",
            keywords: "komplekse tal reelle tal",
            sections: [
                { title: "1. Udvikling af talbegrebet", anchor: "#udvikling", keywords: "talbegreb udvikling" },
                { title: "2. Tallinjen og talmængder", anchor: "#tallinjen", keywords: "tallinje talmængde reel kompleks" },
                { title: "3. Decimalbrøker", anchor: "#decimalbroeker", keywords: "decimalbrøk periodisk" },
                { title: "4. Udvidelse af potenser", anchor: "#potenser", keywords: "potens udvidelse" }
            ],
            proofs: []
        },
        {
            title: "Keglesnit",
            path: "emner/A/Keglesnit.html",
            keywords: "cirkel ellipse parabel hyperbel brændpunkt ledelinje",
            sections: [
                { title: "1. Geometriske steder", anchor: "#geometrisk", keywords: "geometrisk sted definition afstand" },
                { title: "2. Parablen", anchor: "#parablen", keywords: "parabel brændpunkt ledelinje parameter" },
                { title: "3. Ellipsen", anchor: "#ellipsen", keywords: "ellipse halvakse brændpunkt excentricitet" },
                { title: "4. Hyperblen", anchor: "#hyperblen", keywords: "hyperbel brændpunkt ledelinje excentricitet asymptote" }
            ],
            proofs: [
                { title: "Bevis: Udledning af parablens ligning", anchor: "#bevis-parabel", keywords: "parabel ligning bevis udledning" },
                { title: "Bevis: Udledning af ellipsens ligning", anchor: "#bevis-ellipse", keywords: "ellipse ligning bevis udledning" },
                { title: "Bevis: Udledning af hyperblens ligning", anchor: "#bevis-hyperbel", keywords: "hyperbel ligning bevis udledning" }
            ]
        },
        {
            title: "Polære funktioner",
            path: "emner/A/polaere_funktioner.html",
            keywords: "polære koordinater vinkel radius",
            sections: [
                { title: "1. Polære koordinater", anchor: "#polkoord", keywords: "polære koordinater vinkel" },
                { title: "2. Omskrivning til rektangulære koordinater", anchor: "#omskrivning", keywords: "rektangulær omskrivning" },
                { title: "3. Polære funktioner og grafer", anchor: "#polfunk", keywords: "polær funktion graf" },
                { title: "4. Afstand til origo", anchor: "#afstand", keywords: "afstand origo" },
                { title: "5. Skæringspunkter mellem polære grafer", anchor: "#skæring", keywords: "skæring skæringspunkt" },
                { title: "6. Areal og polære funktioner", anchor: "#areal", keywords: "areal polær" },
                { title: "7. Kurvelængde af polær graf", anchor: "#kurvelaengde", keywords: "kurvelængde polær" }
            ],
            proofs: [
                { title: "Bevis: Omregning polære til rektangulære koordinater", anchor: "#bevis-omskrivning", keywords: "omregning koordinater bevis" },
                { title: "Bevis: Areal udspændt af én polær funktion", anchor: "#bevis-areal", keywords: "areal polær bevis" },
                { title: "Bevis: Areal mellem to polære funktioner", anchor: "#bevis-areal2", keywords: "areal to polære bevis" },
                { title: "Bevis: Kurvelængde af polær graf", anchor: "#bevis-kurve", keywords: "kurvelængde polær bevis" }
            ]
        }
    ],
    "B-Niveau": [
        {
            title: "Differentialregning B",
            path: "emner/B/differentialregning.html",
            keywords: "tretrinsreglen h-reglen tangentligning sekant produktreglen",
            sections: [
                { title: "1. Definition af differentialkvotient", anchor: "#definition", keywords: "definition differentialkvotient tretrinsreglen h-reglen" },
                { title: "Hvad betyder 'h' egentlig?", anchor: "#forstaa-h", keywords: "h grænseværdi sekant tangent" },
                { title: "2. Optimering", anchor: "#optimering", keywords: "optimering maksimum minimum ekstrema" },
                { title: "3. Regneregler for differentiation", anchor: "#regneregler", keywords: "regneregler sum produkt kvotient kæderegel" },
                { title: "4. Eksponential- logaritme- og potensfunktioner", anchor: "#funktioner", keywords: "eksponential logaritme potens afledet" },
                { title: "5. Vækst og væksthastighed", anchor: "#vaekst", keywords: "vækst væksthastighed relativ absolut" },
                { title: "6. Differentiabilitet og kontinuitet", anchor: "#differentiabilitet", keywords: "differentiabilitet kontinuitet" }
            ],
            proofs: [
                { title: "Bevis: e^x er sin egen afledede", anchor: "#bevis-ex", keywords: "e^x afledet bevis" },
                { title: "Bevis: Differentialkvotienten af x²", anchor: "#bevis-x2", keywords: "x i anden afledet bevis" },
                { title: "Bevis: Differentialkvotienten af x³", anchor: "#bevis-x3", keywords: "x i tredje afledet bevis" },
                { title: "Bevis: Differentialkvotienten af 1/x", anchor: "#bevis-1-x", keywords: "1/x reciprok afledet bevis" },
                { title: "Bevis: Differentialkvotienten af √x", anchor: "#bevis-sqrt-x", keywords: "kvadratrod sqrt afledet bevis" },
                { title: "Bevis: Konstant faktor-reglen", anchor: "#bevis-konstant", keywords: "konstant faktor regel bevis" },
                { title: "Bevis: Sumreglen", anchor: "#bevis-sum", keywords: "sumregel bevis" },
                { title: "Bevis: Produktreglen", anchor: "#bevis-produkt", keywords: "produktregel bevis" },
                { title: "Bevis: Differentiation af sammensat funktion (kædereglen)", anchor: "#bevis-sammensat", keywords: "sammensat funktion kæderegel bevis" }
            ]
        },
        {
            title: "Integralregning",
            path: "emner/B/integralregning.html",
            keywords: "arealet under kurven stamfunktion substitution",
            sections: [
                { title: "1. Stamfunktioner og ubestemt integral", anchor: "#stamfunktioner", keywords: "stamfunktion ubestemt integral" },
                { title: "2. Arealer og bestemt integral", anchor: "#arealer-bestemt", keywords: "areal bestemt integral" },
                { title: "3. Regneregler for integration", anchor: "#regneregler", keywords: "regneregler integration sum konstant" },
                { title: "4. Arealer mellem grafer", anchor: "#arealer-grafer", keywords: "areal mellem grafer" },
                { title: "5. Integration ved u-substitution", anchor: "#substitution", keywords: "substitution u-substitution" },
                { title: "6. Anvendelser af integralregning", anchor: "#anvendelser", keywords: "anvendelse rumfang kurvelængde omdrejningslegeme" }
            ],
            proofs: [
                { title: "Bevis: Stamfunktioner afviger med en konstant", anchor: "#bevis-konstant", keywords: "stamfunktion konstant bevis" },
                { title: "Bevis: Areal under en kurve (Riemannsummer)", anchor: "#bevis-areal-under", keywords: "areal Riemann bevis" },
                { title: "Bevis: Areal mellem to grafer", anchor: "#bevis-areal-mellem", keywords: "areal grafer bevis" },
                { title: "Bevis: Integration ved substitution", anchor: "#bevis-sub", keywords: "substitution bevis" },
                { title: "Bevis: Partiel integration", anchor: "#bevis-partiel", keywords: "partiel integration bevis" },
                { title: "Bevis: Indskudsreglen", anchor: "#bevis-indskud", keywords: "indskudsregel bevis" },
                { title: "Bevis: Regneregler ubestemt integral", anchor: "#bevis-regler-ubestemt", keywords: "regneregler ubestemt bevis" },
                { title: "Bevis: Regneregler bestemt integral", anchor: "#bevis-regler-bestemt", keywords: "regneregler bestemt bevis" },
                { title: "Bevis: Arealfunktionen er en stamfunktion", anchor: "#bevis-arealfunktion", keywords: "arealfunktion stamfunktion bevis" },
                { title: "Bevis: Stamfunktion til potensfunktion", anchor: "#bevis-potens", keywords: "potens stamfunktion bevis" },
                { title: "Bevis: Stamfunktion til e^x", anchor: "#bevis-exp-e", keywords: "e^x stamfunktion bevis" },
                { title: "Bevis: Stamfunktion til a^x", anchor: "#bevis-exp-a", keywords: "a^x stamfunktion bevis" },
                { title: "Bevis: Stamfunktion til ln x", anchor: "#bevis-ln", keywords: "ln logaritme stamfunktion bevis" },
                { title: "Bevis: Stamfunktion til sin x", anchor: "#bevis-sin", keywords: "sinus sin stamfunktion bevis" },
                { title: "Bevis: Stamfunktion til cos x", anchor: "#bevis-cos", keywords: "cosinus cos stamfunktion bevis" },
                { title: "Bevis: Stamfunktion til tan x", anchor: "#bevis-tan", keywords: "tangens tan stamfunktion bevis" },
                { title: "Bevis: Kurvelængde", anchor: "#bevis-kurvelaengde", keywords: "kurvelængde bevis" },
                { title: "Bevis: Rumfang om x-aksen", anchor: "#bevis-vol-x", keywords: "rumfang omdrejningslegeme x-akse bevis" },
                { title: "Bevis: Rumfang om y-aksen", anchor: "#bevis-vol-y", keywords: "rumfang omdrejningslegeme y-akse bevis" }
            ]
        },
        {
            title: "Sandsynlighedsregning og statistik",
            path: "emner/B/Sandsynlighedsregningstatistik.html",
            keywords: "chi-i-anden test p-værdi boksplot",
            sections: [
                { title: "1. Hvad er sandsynlighed?", anchor: "#indledning", keywords: "sandsynlighed grundbegreb" },
                { title: "2. Sandsynlighedsmodeller", anchor: "#model", keywords: "model sandsynlighedsmodel" },
                { title: "3. Kombinatorik og sandsynligheder", anchor: "#kombinatorik", keywords: "kombinatorik permutation" },
                { title: "4. Binomialfordelinger", anchor: "#binomial", keywords: "binomialfordeling n k p" },
                { title: "5. Opinionsundersøgelser og hypotesetest", anchor: "#opinionsundersogelser", keywords: "opinionsundersøgelse hypotesetest p-værdi" }
            ],
            proofs: [
                { title: "Bevis: Antal permutationer (Sætn. 4.4)", anchor: "#bevis-1", keywords: "permutation antal bevis" }
            ]
        },
        {
            title: "Vektorer i 2D",
            path: "emner/B/Vektorer2D.html",
            keywords: "prikprodukt skalarprodukt determinant tværvektor",
            sections: [
                { title: "1. Den rette linje", anchor: "#den-rette-linje", keywords: "ret linje ligning hældning" },
                { title: "2. Vinkler og skæring mellem linjer", anchor: "#vinkler-skaering", keywords: "vinkel skæring linjer" },
                { title: "3. Projektioner", anchor: "#projektioner", keywords: "projektion projektionsvektor" },
                { title: "4. Tværvektor og determinant", anchor: "#tvaervektor-determinant", keywords: "tværvektor determinant" },
                { title: "5. Afstand fra punkt til linje", anchor: "#afstand", keywords: "afstand punkt linje" },
                { title: "6. Cirklen", anchor: "#cirklen", keywords: "cirkel centrum radius ligning" }
            ],
            proofs: [
                { title: "Bevis: Projektionssætningen", anchor: "#bevis-1", keywords: "projektion sætning bevis" },
                { title: "Bevis: Afstand fra punkt til linje", anchor: "#bevis-2", keywords: "afstand punkt linje bevis" },
                { title: "Bevis: Cirklens ligning", anchor: "#bevis-3", keywords: "cirkel ligning bevis" }
            ]
        }
    ],
    "C-Niveau": [
        {
            title: "Funktioner C",
            path: "emner/C/Funktioner.html",
            keywords: "lineær eksponentiel potens fordoblingskonstant",
            sections: [
                { title: "1. Grundlæggende funktionsbegreb", anchor: "#grundlag", keywords: "funktion definitionsmængde værdimængde" },
                { title: "2. Logaritmer", anchor: "#logaritmer", keywords: "logaritme log ln" },
                { title: "3. Eksponentialfunktioner", anchor: "#eksponent", keywords: "eksponentialfunktion vækst fordobling" },
                { title: "4. Potensfunktioner", anchor: "#potens", keywords: "potensfunktion a b" },
                { title: "5. Proportionalitet", anchor: "#proportion", keywords: "proportional direkte omvendt" },
                { title: "6. Sammensatte funktioner", anchor: "#sammensat", keywords: "sammensat funktion" },
                { title: "7. Inverse funktioner", anchor: "#invers", keywords: "invers omvendt funktion" },
                { title: "8. Opsparingsannuitet", anchor: "#opsparing", keywords: "opsparing annuitet rente" },
                { title: "9. Gældsannuitet", anchor: "#gaeld", keywords: "gæld lån annuitet ydelse" },
                { title: "10. Regression", anchor: "#regression", keywords: "regression lineær eksponentiel potens" }
            ],
            proofs: [
                { title: "Bevis: Regneregler for log (Sætn. 1.1)", anchor: "#bevis1-1", keywords: "log regneregler bevis" },
                { title: "Bevis: Beregning af a og b i f(x)=b·a^x (Sætn. 1.3)", anchor: "#bevis1-3", keywords: "eksponentiel a b bevis" },
                { title: "Bevis: Eksponentiel vækst (Sætn. 1.4)", anchor: "#bevis1-4", keywords: "eksponentiel vækst bevis" },
                { title: "Bevis: Fordoblingskonstant (Sætn. 1.5)", anchor: "#bevis1-5", keywords: "fordoblingskonstant halveringskonstant bevis" },
                { title: "Bevis: a og b for potensfunktioner (Sætn. 1.7)", anchor: "#bevis1-7", keywords: "potens a b bevis" },
                { title: "Bevis: Potensvækst (Sætn. 1.8)", anchor: "#bevis1-8", keywords: "potensvækst bevis" }
            ]
        },
        {
            title: "Polynomier",
            path: "emner/C/polynomier.html",
            keywords: "andengradsligning diskriminant toppunkt",
            sections: [
                { title: "1. Typer af polynomier", anchor: "#typer", keywords: "polynomium type grad" },
                { title: "2. Andengradsligninger", anchor: "#andengradsligninger", keywords: "andengradsligning diskriminant løsning" },
                { title: "3. Det gyldne snit", anchor: "#gyldnesnit", keywords: "gyldne snit phi" },
                { title: "4. Parabler", anchor: "#parabler", keywords: "parabel toppunkt symmetriakse" },
                { title: "5. Polynomier af grad større end 2", anchor: "#hoejeregrad", keywords: "tredje fjerde grad højere polynomium" }
            ],
            proofs: [
                { title: "Bevis: Diskriminantformlen (Sætn. 2.2)", anchor: "#bevis2-2", keywords: "diskriminant formel bevis" },
                { title: "Bevis: Andengradspolynomiets faktorisering (Sætn. 2.6)", anchor: "#bevis2-6", keywords: "faktorisering andengradsligning bevis" }
            ]
        },
        {
            title: "Differentialregning C",
            path: "emner/C/differentialregning.html",
            keywords: "hældning væksthastighed",
            sections: [
                { title: "1. Differentialkvotient", anchor: "#kvotient", keywords: "differentialkvotient afledet hældning" },
                { title: "2. Regneregler", anchor: "#regneregler", keywords: "regneregler sum produkt kvotient kæde" },
                { title: "3. Tangentens ligning", anchor: "#tangent", keywords: "tangent ligning berøring" },
                { title: "4. Monotoniforhold og ekstrema", anchor: "#monotoni", keywords: "monotoni voksende aftagende maksimum minimum" }
            ],
            proofs: [
                { title: "Bevis: Differentiation af sum", anchor: "#bevis-sum", keywords: "sum differentiation bevis" },
                { title: "Bevis: Differentiation af k·f(x)", anchor: "#bevis-konstant", keywords: "konstant faktor bevis" },
                { title: "Bevis: Differentiation af differens", anchor: "#bevis-differens", keywords: "differens subtraktion bevis" },
                { title: "Bevis: Produktreglen", anchor: "#bevis-produkt", keywords: "produktregel bevis" },
                { title: "Bevis: Kvotientreglen", anchor: "#bevis-brok", keywords: "kvotientregel brøk bevis" },
                { title: "Bevis: Kædereglen (sammensat funktion)", anchor: "#bevis-kaede", keywords: "kæderegel sammensat bevis" },
                { title: "Bevis: Differentiation af x²", anchor: "#bevis-kvadrat", keywords: "x i anden kvadrat bevis" },
                { title: "Bevis: Differentiation af x^n (potensfunktion)", anchor: "#bevis-potens", keywords: "x^n potens bevis" },
                { title: "Bevis: Differentiation af 1/x", anchor: "#bevis-reciprok", keywords: "1/x reciprok bevis" },
                { title: "Bevis: Differentiation af √x", anchor: "#bevis-kvadratrod", keywords: "kvadratrod sqrt bevis" },
                { title: "Bevis: Differentiation af e^x", anchor: "#bevis-exp-e", keywords: "e^x eksponential bevis" },
                { title: "Bevis: Differentiation af a^x", anchor: "#bevis-exp-a", keywords: "a^x eksponential bevis" },
                { title: "Bevis: Differentiation af ln x", anchor: "#bevis-ln", keywords: "ln logaritme bevis" },
                { title: "Bevis: Differentiation af log x", anchor: "#bevis-log10", keywords: "log10 titalslogaritme bevis" },
                { title: "Bevis: Differentiation af log_g x", anchor: "#bevis-logg", keywords: "log g logaritme bevis" },
                { title: "Bevis: Differentiation af sin x", anchor: "#bevis-sin", keywords: "sinus sin bevis" },
                { title: "Bevis: Differentiation af cos x", anchor: "#bevis-cos", keywords: "cosinus cos bevis" },
                { title: "Bevis: Differentiation af tan x", anchor: "#bevis-tan", keywords: "tangens tan bevis" },
                { title: "Bevis: Parablens tangent i (0,c)", anchor: "#bevis-parabel", keywords: "parabel tangent bevis" }
            ]
        },
        {
            title: "Vektorer i 2D C",
            path: "emner/C/c-vektor2d.html",
            keywords: "længde koordinater addition",
            sections: [
                { title: "1. Hvad er en vektor?", anchor: "#hvad-er-en-vektor", keywords: "vektor definition retning størrelse" },
                { title: "2. Algebra og geometri: Vektorregning", anchor: "#algebra-og-geometri", keywords: "vektorregning algebra geometri" },
                { title: "3. Punkter og Vektorer", anchor: "#punkter-vektorer", keywords: "punkt vektor stedvektor" },
                { title: "4. Beliggenhed og Prikprodukt", anchor: "#beliggenhed-prikprodukt", keywords: "prikprodukt beliggenhed vinkel" },
                { title: "5. Trigonometri", anchor: "#trigonometri", keywords: "trigonometri sinus cosinus" }
            ],
            proofs: [
                { title: "Bevis: Den modsatte vektor og differens", anchor: "#bevis-modsat", keywords: "modsat vektor differens bevis" },
                { title: "Bevis: Vektor-regneregler", anchor: "#bevis-vektorregler", keywords: "vektorregel bevis" },
                { title: "Bevis: Indskudssætningen og afstandsformlen", anchor: "#bevis-indskud", keywords: "indskud afstand bevis" },
                { title: "Bevis: Regneregler for prikprodukt", anchor: "#bevis-prikprodukt", keywords: "prikprodukt regel bevis" },
                { title: "Bevis: Grundrelationen (cos² + sin² = 1)", anchor: "#bevis-grundrelation", keywords: "grundrelation cosinus sinus bevis" },
                { title: "Bevis: Prikprodukt og vinkel", anchor: "#bevis-vinkel", keywords: "prikprodukt vinkel bevis" },
                { title: "Bevis: Hyp-mod-hos-sætningen", anchor: "#bevis-hypmodhos", keywords: "hypotenuse modstående hosliggende bevis" },
                { title: "Bevis: Cosinusrelationerne", anchor: "#bevis-cosinusrel", keywords: "cosinusrelation bevis" },
                { title: "Bevis: Sinusrelationerne og trekants areal", anchor: "#bevis-sinusrel", keywords: "sinusrelation areal trekant bevis" }
            ]
        },
        {
            title: "Statistik",
            path: "emner/C/Statistik.html",
            keywords: "middeltal median typetal kvartilsæt",
            sections: [
                { title: "1. Indekstal", anchor: "#indekstal", keywords: "indekstal prisindeks" },
                { title: "2. Deskriptiv statistik: Ugrupperede observationer", anchor: "#ugrupperede", keywords: "middelværdi median typetal ugrupperet" },
                { title: "3. Boksplot og Kvartiler", anchor: "#kvartiler", keywords: "boksplot kvartil Q1 Q2 Q3" },
                { title: "4. Spredning og Outliers", anchor: "#spredning", keywords: "spredning outlier" },
                { title: "5. Grupperede observationer og Sumkurver", anchor: "#grupperede", keywords: "grupperet sumkurve histogram" }
            ],
            proofs: []
        }
    ],
    "Formelsamlinger": [
        { title: "A-niveau", path: "formelsamling/A/formelsamlingA.html" },
        { title: "B-niveau", path: "formelsamling/B/formelsamlingB.html" },
        { title: "C-niveau", path: "formelsamling/C/formelsamlingC.html" }
    ],
    "Spil": [
        { title: "Pi quiz", path: "spil/piquiz.html" },
        { title: "Euler's tal quiz", path: "spil/equiz.html" }
    ]
};

// --- 2. MASKINRUMMET ---
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('sidebar-menu');
    if (!nav) return;

    let html = `<h2>
    <a href="${window.basePath}index.html" onclick="lukAlleMenuer()" style="text-decoration: none; color: inherit; display: flex; align-items: center; justify-content: center; gap: 10px;">
        <span style="font-family: 'Georgia', serif; font-size: 2.2em; color: #3498db; font-weight: normal; line-height: 0.8; position: relative; top: -5px;">π</span> 
        STX Matematik
    </a>
</h2>`;

    html += `
    <div style="padding: 0 15px 15px 15px; position: relative;">
        <input type="text" id="menuSearch" placeholder="Søg i noter " style="width: 100%; padding: 8px; border-radius: 5px; border: 1px solid #bdc3c7; box-sizing: border-box; font-family: inherit; font-size: 0.9rem; outline: none;">
        <ul id="menuSearchResults" style="list-style: none; padding: 0; margin: 5px 0 0 0; background: white; border-radius: 5px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); position: absolute; z-index: 1000; width: calc(100% - 30px); max-height: 350px; overflow-y: auto; display: none;"></ul>
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
        html += `</ul></div>`;
    }

    html += `
    <div class="sidebar-footer">
        <a href="${window.basePath}index.html" class="home-link" onclick="sessionStorage.clear();">Forside</a>
    </div>
    `;

    nav.innerHTML = html;
    aktiverMenuFunktioner();
    aktiverSoegefunktion();

    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger-btn';
    hamburger.innerHTML = '☰';
    document.body.appendChild(hamburger);
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('mobile-open');
        hamburger.innerHTML = nav.classList.contains('mobile-open') ? '✖' : '☰';
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

// --- SØGEFUNKTION ---
function aktiverSoegefunktion() {
    const searchInput = document.getElementById('menuSearch');
    const searchResults = document.getElementById('menuSearchResults');

    // Byg et komplet søgeindeks over ALT: sider, sektioner og beviser
    let searchIndex = [];

    for (const [niveau, emner] of Object.entries(stxMenuData)) {
        emner.forEach(emne => {
            // Tilføj selve hovedsiden
            searchIndex.push({
                title: emne.title,
                subtitle: niveau,
                badge: null,
                url: emne.path,
                keywords: emne.keywords ? emne.keywords.toLowerCase() : ""
            });

            // Tilføj individuelle sektioner (teori-afsnit)
            if (emne.sections) {
                emne.sections.forEach(sec => {
                    searchIndex.push({
                        title: sec.title,
                        subtitle: emne.title,
                        badge: "Teori",
                        badgeColor: "#2980b9",
                        url: emne.path + sec.anchor,
                        keywords: (sec.keywords || "").toLowerCase()
                    });
                });
            }

            // Tilføj individuelle beviser
            if (emne.proofs) {
                emne.proofs.forEach(proof => {
                    searchIndex.push({
                        title: proof.title,
                        subtitle: emne.title,
                        badge: "Bevis",
                        badgeColor: "#27ae60",
                        url: emne.path + proof.anchor,
                        keywords: (proof.keywords || "").toLowerCase()
                    });
                });
            }
        });
    }

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        searchResults.innerHTML = '';

        if (query.length < 2) {
            searchResults.style.display = 'none';
            return;
        }

        const filtered = searchIndex.filter(item => {
            return item.title.toLowerCase().includes(query) ||
                   item.subtitle.toLowerCase().includes(query) ||
                   item.keywords.includes(query);
        });

        if (filtered.length > 0) {
            searchResults.style.display = 'block';
            filtered.forEach(item => {
                const li = document.createElement('li');
                li.style.cssText = 'border-bottom: 1px solid #ecf0f1;';

                li.addEventListener('mouseenter', () => li.style.backgroundColor = '#f4f7f6');
                li.addEventListener('mouseleave', () => li.style.backgroundColor = 'transparent');

                const badgeHtml = item.badge
                    ? `<span style="display:inline-block; font-size:0.7em; padding:1px 6px; border-radius:3px; background:${item.badgeColor}; color:white; margin-left:5px; vertical-align:middle;">${item.badge}</span>`
                    : '';

                li.innerHTML = `
                    <a href="${window.basePath}${item.url}" style="text-decoration:none; color:#2c3e50; font-size:0.9em; display:block; padding:9px 10px;">
                        <div style="display:flex; align-items:center; flex-wrap:wrap; gap:2px;">
                            <strong>${item.title}</strong>${badgeHtml}
                        </div>
                        <div style="font-size:0.78em; color:#7f8c8d; margin-top:2px;">${item.subtitle}</div>
                    </a>
                `;
                searchResults.appendChild(li);
            });
        } else {
            searchResults.style.display = 'block';
            searchResults.innerHTML = '<li style="padding:10px; color:#7f8c8d; font-size:0.9em; text-align:center;">Ingen resultater fundet</li>';
        }
    });

    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });

    // Luk søgeresultater når man navigerer med Enter
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchResults.style.display = 'none';
            searchInput.blur();
        }
    });
}

window.lukAlleMenuer = function() {
    document.querySelectorAll('#sidebar-menu .active').forEach(el => el.classList.remove('active'));
    sessionStorage.clear();
};