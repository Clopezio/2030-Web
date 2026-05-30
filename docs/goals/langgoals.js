function setLanguage(lang) {
    document.documentElement.lang = lang;

    // mostra solo il testo della lingua selezionata 
    document.querySelectorAll('.lang-en, [lang-en]').forEach((element) => {
        element.style.display = lang === 'en' ? '' : 'none';
    });

    document.querySelectorAll('.lang-it, [lang-it]').forEach((element) => {
        element.style.display = lang === 'it' ? '' : 'none';
    });

    const flag = document.getElementById('lang-flag');
    if (flag) flag.src = lang === 'en' ? '../assets/uk.png' : '../assets/italia.png';

    localStorage.setItem('site-lang', lang);
}

function setupLangSwitcher() {
    const flag = document.getElementById('lang-flag');

    // la bandiera funge da interruttore per cambiare lingua
    if (flag) {
        flag.onclick = function () {
            const nextLang = document.documentElement.lang === 'it' ? 'en' : 'it';
            setLanguage(nextLang);
        };
    }

    const savedLang = localStorage.getItem('site-lang') || 'en';
    setLanguage(savedLang);
}

function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navbar');

    if (!hamburger || !nav) return;

    const closeMenu = () => {
        nav.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
    };

    const toggleMenu = (event) => {
        if (event) event.stopPropagation();

        const isOpen = nav.classList.toggle('active');
        hamburger.classList.toggle('active', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen);
        document.body.classList.toggle('menu-open', isOpen);
    };

    hamburger.addEventListener('click', toggleMenu);
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

    // chiude il menu quando si tocca al di fuori
    document.addEventListener('click', (event) => {
        if (!nav.classList.contains('active')) return;
        if (nav.contains(event.target) || hamburger.contains(event.target)) return;
        closeMenu();
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) closeMenu();
    });
}

// nel caso in cui il caricamento fallisca, fornisce un fallback con un navbar e footer di base
const NAVBAR_FALLBACK = `
<header class="topbar">
    <a href="../index.html" class="topbar-left">
        <div class="logocontainer">
            <img src="../assets/logo.png" alt="logo">
        </div>

        <div class="titoletto">
            <h1 class="navbar1">Agenda 2030</h1>
            <h2 class="navbar2">Sustainable development goals</h2>
        </div>
    </a>

    <button class="hamburger" type="button" aria-label="Toggle navigation" aria-expanded="false" aria-controls="primary-navigation">
        <span></span>
        <span></span>
        <span></span>
    </button>

    <nav class="navbar" id="primary-navigation" style="align-items: center;">
        <a href="../index.html">Home</a>
        <a href="../goals.html">Goals</a>
        <img id="lang-flag" src="../assets/uk.png" style="cursor:pointer;width:30px;">
    </nav>
</header>
`;

const FOOTER_FALLBACK = `
<footer class="footer">
    <div class="footer-content">
        <div class="footer-columns">
            <div class="footer-column">
                <h4 class="footer-heading lang-en">About This Project</h4>
                <ul class="footer-list">
                    <p>A school project exploring the UN's Sustainable Development Goals and the 2030 Agenda</p>
                    <p>Created for Magistri Cumacini Institute</p>
                </ul>
            </div>
            <div class="footer-column footer-navigation">
                <h4 class="footer-heading">Navigation</h4>
                <ul class="footer-list">
                    <p><a style="color: white;" href="../index.html">Home</a></p>
                    <p><a style="color: white;" href="../goals.html">Goals</a></p>
                </ul>
            </div>
            <div class="footer-column">
                <h4 class="footer-heading">Learn More</h4>
                <ul class="footer-list">
                    <p><a style="color: white;" href="https://sdgs.un.org/" target="_blank">Official UN SDGs</a></p>
                    <p><a style="color: white;" href="https://www.un.org/sustainabledevelopment/agenda2030/" target="_blank">2030 Agenda</a></p>
                </ul>
            </div>
            <div class="footer-column">
                <h4 class="footer-heading">Credits</h4>
                <ul class="footer-list">
                    <p>Project by Umut, Klodian, and Illya</p>
                    <p>Guided by Professor Eugenio Chiriaco</p>
                </ul>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="social-icons">
                <a href="https://github.com/Clopezio/2030-Web" class="social-link" target="_blank">
                    <img src="../assets/github.png" alt="GitHub Logo" class="social-icon">
                </a>
            </div>
            <p class="footer-copyright">© 2026 Agenda 2030 Project. MIT License.</p>
        </div>
    </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', function () {

  setupLangSwitcher();

    function loadHTMLContent(elementId, filePath, callback, fallbackHtml) {
        loadWithXHR(
            filePath,
            function (content) {
                injectHTML(elementId, content);
                if (callback) callback();
            },
            function () {
                if (!fallbackHtml) return;
                injectHTML(elementId, fallbackHtml);
                if (callback) callback();
            }
        );
    }

    function loadWithXHR(filePath, onSuccess, onFailure) {
        var request = new XMLHttpRequest();
        request.open('GET', filePath, true);

        request.onload = function () {
            if (isSuccessStatus(request.status) && request.responseText) {
                onSuccess(request.responseText);
                return;
            }

            var fallbackContent = loadSyncFallback(filePath);
            if (fallbackContent) {
                onSuccess(fallbackContent);
                return;
            }

            console.warn('Async load failed for: ' + filePath + ' (status ' + request.status + ').');
            if (onFailure) onFailure();
        };

        request.onerror = function () {
            var fallbackContent = loadSyncFallback(filePath);
            if (fallbackContent) {
                onSuccess(fallbackContent);
                return;
            }

            console.warn('Async load failed for: ' + filePath + '.');
            if (onFailure) onFailure();
        };

        request.send();
    }

    function loadSyncFallback(filePath) {
        try {
            var request = new XMLHttpRequest();
            request.open('GET', filePath, false);
            request.send();

            if (isSuccessStatus(request.status) && request.responseText) {
                return request.responseText;
            }
        } catch (error) {
            console.error('Failed to load ' + filePath + ':', error);
        }

        return null;
    }

    function isSuccessStatus(status) {
        return status === 0 || status === 200;
    }

    function injectHTML(elementId, htmlContent) {
        var targetElement = document.getElementById(elementId);
        if (!targetElement) return;

        targetElement.innerHTML = htmlContent;

        updateRelativePaths(targetElement);
    }

    function updateRelativePaths(element) {
        element.querySelectorAll('[href], [src]').forEach(function (el) {
            var attr = el.hasAttribute('href') ? 'href' : 'src';
            var value = el.getAttribute(attr);

            if (!value || /^(?:[a-z]+:|\/|#)/i.test(value)) {
                return;
            }
        });
    }

    loadHTMLContent('navbar', 'navbar.html', function () {
        setupLangSwitcher();
        setupMobileMenu();
    }, NAVBAR_FALLBACK);

    loadHTMLContent('footer', 'footer.html', null, FOOTER_FALLBACK);
});
