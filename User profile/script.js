document.querySelector('.theme-toggle').addEventListener('click', function() {
    const body = document.body;
    const toggleButton = this;
    
    if (body.classList.contains('theme-dark')) {
        body.classList.replace('theme-dark', 'theme-light');
        toggleButton.innerHTML = '🌞'; 
    } else {
        body.classList.replace('theme-light', 'theme-dark');
        toggleButton.innerHTML = '🌜'; 
    }
});
