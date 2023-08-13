window.addEventListener('load', function() {
    // Die Seite ist vollständig geladen
    document.getElementById('loader-container').style.opacity = 0;
    document.getElementById('loader-container').style.display = 'none';
    document.getElementById('app-content').style.display = 'visible';
  });
