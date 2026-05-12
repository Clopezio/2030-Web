function setLanguage(lang) {
  document.documentElement.lang = lang;
    document.querySelectorAll('.lang-en, [lang-en]').forEach(e => e.style.display = lang === 'en' ? '' : 'none');
    document.querySelectorAll('.lang-it, [lang-it]').forEach(e => e.style.display = lang === 'it' ? '' : 'none');
  let flag = document.getElementById('lang-flag');
  if (flag) flag.src = lang === 'en' ? '../assets/uk.png' : '../assets/italia.png';
  localStorage.setItem('site-lang', lang);
}

function setupLangSwitcher() {
  let flag = document.getElementById('lang-flag');
  if (flag) {
    flag.onclick = function() {
      const nextLang = document.documentElement.lang === 'it' ? 'en' : 'it';
      setLanguage(nextLang);
    };
  }
  const savedLang = localStorage.getItem('site-lang') || 'en';
  setLanguage(savedLang);
}

document.addEventListener('DOMContentLoaded', function() {

  setupLangSwitcher();

    function loadHTMLContent(elementId, filePath, callback) {
       
        loadWithXHR(filePath, function(content) {
            injectHTML(elementId, content);
            if (callback) callback();
        });
    }

    function loadWithXHR(filePath, onSuccess) {
        var request = new XMLHttpRequest();
        request.open('GET', filePath, true);

       
        request.onload = function() {
            if (isSuccessStatus(request.status) && request.responseText) {
                onSuccess(request.responseText);
            }
        };

        request.onerror = function() {
            console.warn('Async load failed for: ' + filePath + ', trying sync fallback...');
            loadSyncFallback(filePath, onSuccess);
        };

        request.send();
    }

    function loadSyncFallback(filePath, onSuccess) {
        try {
            var request = new XMLHttpRequest();
            request.open('GET', filePath, false); 
            request.send();
            
            if (request.responseText) {
                onSuccess(request.responseText);
            }
        } catch(error) {
            console.error('Failed to load ' + filePath + ':', error);
        }
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
        element.querySelectorAll('[href], [src]').forEach(function(el) {
            var attr = el.hasAttribute('href') ? 'href' : 'src';
            var value = el.getAttribute(attr);

            if (!value || /^(?:[a-z]+:|\/|#)/i.test(value)) {
                return;
            }
        });
    }
    loadHTMLContent('navbar', 'navbar.html', setupLangSwitcher);
    loadHTMLContent('footer', 'footer.html', null);
});