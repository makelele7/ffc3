pullToRefresh.init({
    mainElement: '#content', // ID oder Klassenname deines Hauptinhalts
    onRefresh: function() {
        // Aktionen, die bei Aktualisierung ausgeführt werden sollen
        location.reload(); // Beispiel: Seite neu laden
    }
});