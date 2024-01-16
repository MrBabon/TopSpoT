export function setupLoader() {
    var loader = document.getElementById('loader');
    
    loader.classList.add('flex');
    loader.classList.remove('hidden');

    window.addEventListener('load', () => {
        loader.classList.remove('flex');
        loader.classList.add('hidden');
    });
}
