export function setupScrollTop() {
    var scrollButton = document.getElementById('scrollButton');
    var scrollIcon = document.getElementById('scrollIcon');

    function updateScroll() {
        if (window.scrollY <= 0) {
            scrollIcon.classList.remove('opacity-1');
            scrollIcon.classList.add('opacity-0');
        } else {
            scrollIcon.classList.remove('opacity-0');
            scrollIcon.classList.add('opacity-1');
        }
    }

    window.addEventListener('scroll', updateScroll);

    scrollButton.addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Appeler la fonction updateScroll une fois au chargement de la page
    updateScroll();

    // Assurez-vous de retirer les écouteurs d'événements lorsque la page se ferme
    window.addEventListener('beforeunload', function () {
        window.removeEventListener('scroll', updateScroll);
        scrollButton.removeEventListener('click', function () {});
    });
}